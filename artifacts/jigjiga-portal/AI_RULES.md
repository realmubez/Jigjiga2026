# AI Rules for Jigjiga Portal

## Repo location
- The actual frontend app lives in `artifacts/jigjiga-portal`.
- When referring to app files from the workspace root, use paths like `artifacts/jigjiga-portal/src/App.tsx`.

## Tech stack
- React + TypeScript, bundled with Vite.
- Client-side routing is handled with **Wouter** in `artifacts/jigjiga-portal/src/App.tsx`.
- Styling is done with **Tailwind CSS** via `artifacts/jigjiga-portal/src/index.css`.
- Reusable UI primitives come from **shadcn/ui**, built on top of **Radix UI**.
- Icons should primarily come from **lucide-react**.
- App-wide async server state is set up with **@tanstack/react-query**.
- Animations use **framer-motion**.
- Forms should use **react-hook-form** with **zod** validation when validation is needed.
- The app includes **react-youtube** for embedded YouTube players.
- Path aliases are configured, especially `@/components`, `@/pages`, `@/hooks`, `@/lib`, and `@/components/ui`.

## Library usage rules

### Routing
- Use **Wouter** for all routes, redirects, and navigation.
- Keep route definitions centralized in `artifacts/jigjiga-portal/src/App.tsx`.
- Do **not** introduce React Router for this app.

### UI components
- Use existing **shadcn/ui** components from `src/components/ui` before building custom primitives.
- If a design needs customization, compose a new component around shadcn/ui components instead of rewriting the base primitives.
- Use **Radix-backed** shadcn components for accessible dialogs, dropdowns, tabs, tooltips, sheets, accordions, and similar interactive UI.

### Styling
- Use **Tailwind CSS utility classes** for layout, spacing, typography, color, and responsiveness.
- Avoid adding new styling systems such as Material UI, Chakra UI, styled-components, Emotion, or CSS-in-JS libraries.
- Only add plain CSS in `src/index.css` when a global style is truly needed.

### Icons and media
- Use **lucide-react** for general-purpose icons.
- Use **react-icons** only if a specific brand or logo icon is not available in Lucide.
- Use **react-youtube** for YouTube embeds instead of hand-writing iframe logic.

### Data fetching and state
- Use **TanStack Query** for server-fetched data, caching, refetching, and async mutations.
- If backend endpoints are used, prefer the workspace API client instead of introducing Axios or another fetch abstraction.
- For local UI state, use normal React state, context, or the existing local store patterns in `src/lib` and `src/contexts`.

### Forms and validation
- Use **react-hook-form** for form state and submission handling.
- Use **zod** with the resolver package for schema validation at form boundaries.
- Do not build large forms with ad hoc `useState` fields unless the form is extremely small.

### Motion
- Use **framer-motion** for page transitions, reveals, and intentional interactive animation.
- Keep animations subtle and performance-friendly; do not add animation libraries beyond Framer Motion.

### Project structure
- Put pages in `src/pages`.
- Put reusable components in `src/components`.
- Put shared helpers in `src/lib` and reusable hooks in `src/hooks`.
- Use the configured `@/...` aliases instead of deep relative import chains when possible.

## Default implementation choices
- New page or route: **Wouter** + page component in `src/pages`.
- New button/card/dialog/form UI: **shadcn/ui** + Tailwind.
- New icon: **lucide-react** first.
- New form: **react-hook-form** + **zod**.
- New async API data: **TanStack Query** + existing fetch/client utilities.
- New animation: **framer-motion**.
