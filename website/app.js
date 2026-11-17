const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeNavigation() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNavigation));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeNavigation(); });

const filters = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('.project-card')];
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => {
    const active = filter === button;
    filter.classList.toggle('active', active);
    filter.setAttribute('aria-pressed', String(active));
  });
  let count = 0;
  cards.forEach(card => {
    card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    if (!card.hidden) count += 1;
  });
  document.querySelector('#filter-status').textContent = `Showing ${count} ${count === 1 ? 'project' : 'projects'}.`;
}));

const projects = {
  motor: {
    label: 'ENGINEERING / ACADEMIC PROJECT', title: 'Closing the loop.',
    intro: 'Investigation of closed-loop DC motor speed control using a PID controller, as part of my academic project work.',
    sections: [
      ['My contribution', ['Investigating motor speed behaviour and the role of feedback.', 'Assessing how PID adjustments affect the control response.', 'Using a structured problem-solving approach to understand performance.']],
      ['Evidence & next steps', ['Measurements, hardware details and tuning results will be added as the project write-up is prepared.', 'The interactive lab below is an educational simulation, not a reconstruction of measured project results.']]
    ], href: '#lab', link: 'Try the interactive lab'
  },
  gps: {
    label: 'ANDROID / CONCEPT IN DEVELOPMENT', title: 'GPS Guard.',
    intro: 'An Android location-privacy app concept that helps users understand permissions and follow a temporary privacy routine.',
    sections: [
      ['Planned scope', ['Location permission auditing and guided links to device settings.', 'A default 30-minute routine with a countdown and reminder notifications.', 'Chrome privacy checks and repeatable tests on HONOR MagicOS 10 / Android 16.']],
      ['What remains unverified', ['The exact HONOR model is not yet confirmed.', 'Device-specific settings paths, background behaviour and notification reliability need testing.', 'An ordinary Android app cannot silently switch off system location or revoke other apps’ permissions. The concept guides user-controlled settings changes; it is not a guaranteed tracking blocker.']]
    ], href: 'https://github.com/SunShineHead', link: 'Explore my GitHub'
  },
  focused: {
    label: 'SOFTWARE / REPOSITORY IN PROGRESS', title: 'Staying Focused.',
    intro: 'Focused is my personal repository, containing a Python OASIS project, tests, workflow configurations and now this portfolio.',
    sections: [
      ['Inside the workspace', ['Python project structure and a small OASIS status example.', 'GitHub workflows and repository maintenance experiments.', 'A standalone static portfolio in the website directory.']],
      ['Current status', ['The repository is a learning workspace, not a claim of a finished production platform.', 'The Python package and workflow checks have their own development status, separate from this website.']]
    ], href: 'https://github.com/SunShineHead/Focused', link: 'View the repository'
  },
  debug: {
    label: 'PROGRAMMING / ONGOING PRACTICE', title: 'Finding the why.',
    intro: 'Building confidence in C++ debugging and pseudocode design through practical problem-solving.',
    sections: [
      ['My approach', ['Read compiler messages and identify the first meaningful error.', 'Break the intended behaviour down into clear pseudocode.', 'Make a targeted correction and check whether the result matches the intent.']],
      ['A developing skill', ['This describes my stated practice and interests. It is not a claim of advanced C++ expertise.', 'A future case study can show a concrete error, root cause, fix and verified result.']]
    ], href: 'https://github.com/SunShineHead', link: 'Explore my GitHub'
  }
};
const dialog = document.querySelector('#project-dialog');
let lastProjectButton = null;
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  lastProjectButton = button;
  document.querySelector('#dialog-label').textContent = project.label;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-intro').textContent = project.intro;
  const content = document.querySelector('#dialog-content');
  content.replaceChildren();
  project.sections.forEach(([heading, items]) => {
    const h3 = document.createElement('h3');
    h3.textContent = heading;
    const list = document.createElement('ul');
    items.forEach(text => { const item = document.createElement('li'); item.textContent = text; list.append(item); });
    content.append(h3, list);
  });
  const link = document.querySelector('#dialog-link');
  link.textContent = project.link;
  link.href = project.href;
  if (project.href.startsWith('https:')) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
  else { link.removeAttribute('target'); link.removeAttribute('rel'); }
  dialog.showModal();
  document.body.style.overflow = 'hidden';
}));
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) {
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
} });
dialog.addEventListener('close', () => { document.body.style.overflow = ''; lastProjectButton?.focus(); });
document.querySelector('#dialog-link').addEventListener('click', () => dialog.close());

const gains = ['kp', 'ki', 'kd'].map(id => document.getElementById(id));
const presets = {
  balanced: [1.8, 2, 0.08],
  responsive: [2.8, 4, 0.06],
  overshoot: [0.6, 4, 0]
};
const presetButtons = [...document.querySelectorAll('[data-preset]')];
const canvas = document.querySelector('#response-chart');
const ctx = canvas.getContext('2d');
let simulation = [];

/** Normalized first-order plant: dy/dt = (u-y)/0.65; target speed = 100 RPM.
 * Derivative acts on measured speed to avoid a setpoint derivative kick.
 * Conditional integration prevents windup when the actuator saturates.
 */
function simulate(kp, ki, kd) {
  const dt = 0.01;
  let speed = 0, integral = 0, previousSpeed = 0, derivative = 0;
  const samples = [];
  for (let step = 0; step <= 800; step += 1) {
    const time = step * dt;
    const target = time >= 0.4 ? 1 : 0;
    const error = target - speed;
    derivative = 0.8 * derivative + 0.2 * ((speed - previousSpeed) / dt);
    const candidateIntegral = integral + error * dt;
    const proposed = kp * error + ki * candidateIntegral - kd * derivative;
    if ((proposed >= 0 && proposed <= 2) || (proposed > 2 && error < 0) || (proposed < 0 && error > 0)) integral = candidateIntegral;
    const control = Math.max(0, Math.min(2, kp * error + ki * integral - kd * derivative));
    samples.push({ time, speed: speed * 100 });
    previousSpeed = speed;
    speed += ((control - speed) / 0.65) * dt;
  }
  return samples;
}

function drawChart() {
  const box = canvas.getBoundingClientRect();
  if (!box.width || !box.height || !ctx) return;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(box.width * ratio);
  canvas.height = Math.round(box.height * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  const width = box.width, height = box.height;
  const pad = { left: 36, right: 13, top: 15, bottom: 34 };
  const plotWidth = width - pad.left - pad.right;
  const plotHeight = height - pad.top - pad.bottom;
  const maxSpeed = Math.max(140, Math.ceil(Math.max(...simulation.map(s => s.speed)) / 20) * 20);
  const x = time => pad.left + time / 8 * plotWidth;
  const y = speed => pad.top + (1 - speed / maxSpeed) * plotHeight;
  ctx.clearRect(0, 0, width, height);
  ctx.font = '9px monospace'; ctx.fillStyle = '#7b8374';
  for (let rpm = 0; rpm <= maxSpeed; rpm += 20) {
    ctx.beginPath(); ctx.strokeStyle = '#e3e7dc'; ctx.lineWidth = 0.7;
    ctx.moveTo(pad.left, y(rpm)); ctx.lineTo(width - pad.right, y(rpm)); ctx.stroke();
    ctx.textAlign = 'right'; ctx.fillText(String(rpm), pad.left - 8, y(rpm) + 3);
  }
  for (let second = 0; second <= 8; second += 2) {
    ctx.textAlign = 'center'; ctx.fillText(`${second}s`, x(second), height - 14);
  }
  ctx.textAlign = 'left'; ctx.fillText('RPM', 3, 8);
  ctx.beginPath(); ctx.setLineDash([5, 5]); ctx.strokeStyle = '#929f83'; ctx.lineWidth = 1;
  ctx.moveTo(x(0), y(0)); ctx.lineTo(x(0.4), y(0)); ctx.lineTo(x(0.4), y(100)); ctx.lineTo(x(8), y(100)); ctx.stroke(); ctx.setLineDash([]);
  const gradient = ctx.createLinearGradient(0, pad.top, 0, height - pad.bottom);
  gradient.addColorStop(0, '#b95c2e22'); gradient.addColorStop(1, '#b95c2e00');
  ctx.beginPath(); ctx.moveTo(x(0), y(0));
  simulation.forEach(sample => ctx.lineTo(x(sample.time), y(sample.speed)));
  ctx.lineTo(x(8), y(0)); ctx.closePath(); ctx.fillStyle = gradient; ctx.fill();
  ctx.beginPath(); ctx.strokeStyle = '#b95c2e'; ctx.lineWidth = 2.25;
  simulation.forEach((sample, index) => { if (index === 0) ctx.moveTo(x(sample.time), y(sample.speed)); else ctx.lineTo(x(sample.time), y(sample.speed)); }); ctx.stroke();
}

function updateSimulation() {
  const values = gains.map(input => Number(input.value));
  gains.forEach(input => { document.getElementById(`${input.id}-value`).textContent = Number(input.value).toFixed(2); });
  simulation = simulate(...values);
  const peak = Math.max(...simulation.map(sample => sample.speed));
  const overshoot = Math.max(0, peak - 100);
  const lastOutside = simulation.findLastIndex(sample => sample.time >= 0.4 && Math.abs(sample.speed - 100) > 2);
  const settled = lastOutside < simulation.length - 1;
  const settling = settled ? Math.max(0, simulation[lastOutside + 1].time - 0.4).toFixed(2) : null;
  const final = simulation.at(-1).speed.toFixed(1);
  document.querySelector('#overshoot').textContent = `${overshoot.toFixed(1)}%`;
  document.querySelector('#settling').textContent = settled ? `${settling} s` : '> 7.60 s';
  document.querySelector('#final-speed').textContent = `${final} RPM`;
  canvas.setAttribute('aria-label', `Simulated motor step response. Target 100 RPM; final speed ${final} RPM; overshoot ${overshoot.toFixed(1)} percent; ${settled ? `settling time ${settling} seconds after the step` : 'not settled within the simulated time'}.`);
  presetButtons.forEach(button => {
    const active = presets[button.dataset.preset].every((value, index) => Math.abs(value - values[index]) < 0.001);
    button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active));
  });
  drawChart();
}
function setPreset(name) { presets[name].forEach((value, index) => { gains[index].value = value; }); updateSimulation(); }
gains.forEach(input => input.addEventListener('input', updateSimulation));
presetButtons.forEach(button => button.addEventListener('click', () => setPreset(button.dataset.preset)));
document.querySelector('#reset-pid').addEventListener('click', () => setPreset('balanced'));
new ResizeObserver(drawChart).observe(canvas);
updateSimulation();
