# Wallace Huang — Engineering & Software

The personal portfolio is a standalone static website in `website/`.

## Netlify deployment

The root `netlify.toml` configures:

- Base directory: `website`
- Publish directory: `.` (relative to the base directory)
- Build command: empty; the HTML, CSS and JavaScript are ready to serve

Deploy the branch containing these files. The base directory is an actual
repository folder; do not use a build-machine path such as `/opt/build`.
The Python OASIS project remains separate from the website.

## Content and interactions

- Real-name introduction and engineering/software portfolio.
- Four filterable project profiles with detail dialogs.
- An illustrative PID simulation with presets and keyboard-accessible sliders.
- Responsive navigation and GitHub links.
- A lightweight vector adaptation of the SunShineHead engineering identity.

The simulation uses a normalized first-order plant, actuator limits and
conditional integration for anti-windup. It is not measured motor project data.
Project details distinguish academic experience, ongoing practice and plans.

## Make changes

- `website/index.html`: main content and layout.
- `website/styles.css`: responsive styles.
- `website/app.js`: project details, filters and simulation.
- `website/assets/`: scalable logo.

The portfolio does not use an API key or backend. Keep any future API key in
server-side functions rather than browser JavaScript.

## Validation performed

- JavaScript syntax and TOML parsing.
- Netlify base/publish paths, local assets and section targets.
- Browser checks of filters, dialogs and PID presets.
- Phone-width preview of navigation, layout and simulation controls.
