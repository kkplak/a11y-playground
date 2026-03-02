# Accessibility Playground

This project is a **React (TypeScript) + Vite** demonstration of web accessibility best practices.  It is designed as a self‑contained “Accessibility Playground” where each section showcases correct semantics, ARIA (only when needed), keyboard support, focus management, screen reader behaviour and an eye‑tracking friendly UI.

## Running the project

1. Make sure you have a recent version of Node.js installed.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser at the URL printed in the console (usually `http://localhost:5173`).

The project is fully client‑side and does not require any backend or external services.

> **Note about plugin versions**

This project uses Vite 5 and pins `@vitejs/plugin-react` to the 4.x
series. Earlier revisions targeted `3.3.2`, which no longer exists on
the npm registry and results in an installation error. Version 4.2.0
and later are compatible with Vite 5 and update the peer dependency
range accordingly【471274446125220†L657-L663】.

## Project structure

```
a11y-playground/
├── index.html         # HTML template with skip link and metadata
├── package.json       # Project metadata and scripts
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
├── public/
│   ├── images/        # Decorative and informative images used in the demos
│   ├── video-captions.vtt
│   ├── audio-transcript.md
│   └── video-transcript.md
└── src/
    ├── main.tsx       # Entry point that mounts the React app
    ├── index.css      # Global styles and CSS variables
    ├── App.tsx        # Top‑level component with navigation and layout
    └── components/    # Individual demo sections and utilities
```

## Accessible design features

* **Global structure** – The application uses proper landmarks (`header`, `nav`, `main`, `footer`), a skip link to jump straight to content, and sets the language on the root element.  Focus outlines are preserved and styled for high contrast.  The document title updates when navigating through sections.
* **Theme controls** – A high‑contrast mode and text size control make it easier for users with visual impairments.  Reduced motion is honoured via the `prefers‑reduced‑motion` media query and can also be toggled manually.
* **Eye‑tracking friendly UI** – All interactive elements meet or exceed the recommended target size (44×44 px), are spaced generously, and never rely solely on hover.  Labels accompany icons to aid users with cognitive or motor impairments.
* **Keyboard support** – Every interactive component supports keyboard navigation, including tab/shift + tab sequencing, arrow keys for roving focus patterns (e.g., tabs), `Enter`/`Space` to activate controls and `Escape` to close dialogs.
* **Accessible patterns** – Demos cover typography, images, video, audio, forms with validation, buttons and links, dialogs, accordions, tables, notifications, tabs, drag‑and‑drop alternatives, a language switch snippet and a testing checklist.  Each section includes a brief explanation and a “try it” list for keyboard and screen reader users.
* **Inspector panel** – A built‑in inspector shows the currently focused element’s role and accessible name, the active theme settings and a simulated screen reader announcement log for actions such as form validation.

## Credits

This playground was built as a reference implementation for web accessibility patterns.  It does not rely on any external services and all assets are included locally.