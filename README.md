# Cinema Seat Reservations

<!-- hide -->
> By [@ehiber](https://github.com/ehiber) and contributors at [4Geeks Academy](https://4geeksacademy.com/)

[![build by developers](https://img.shields.io/badge/build_by-Developers-blue)](https://4geeks.com)
[![twitter](https://img.shields.io/twitter/follow/4geeksacademy?style=social&logo=twitter)](https://twitter.com/4geeksacademy)

*Estas instrucciones estan disponibles en [espanol](./README.es.md).*
<!-- endhide -->
Interactive cinema seat reservation simulator built with TypeScript, Vite, and Tailwind CSS.

## What this site does

- Simulates an 8x10 cinema seating matrix.
- Lets users reserve seats from row/column inputs.
- Supports direct seat selection by clicking seats in the grid.
- Optionally allows unreserving occupied seats.
- Shows live occupied/available counters.
- Detects and displays the first adjacent available seat pair.

## Before you begin

Install the packages by typing:

```bash
npm install
```

## How do I run the website to see live changes?

Type on the command line:

```bash
npm run start
```

Then open your local URL in the browser (usually `http://localhost:5173`).

## How do I run this in GitHub Codespaces?

Run the same development server:

```bash
npm run start
```

Vite is configured to listen on `0.0.0.0`, so Codespaces can detect and forward port `5173` automatically.

## How do I run only the TypeScript check?

Use this command to validate only TypeScript without starting Vite:

```bash
npm run typecheck
```

## How do I run `main.ts` from the terminal?

If you want to execute `./src/main.ts` directly and see `console.log` output in the terminal, run:

```bash
npm run console
```

This command is already wired to `./src/main.ts`.

## Where is the main project logic?

Core files currently used by the app:

- `./index.html` for the app shell and metadata.
- `./src/main.ts` for reservation logic and UI behavior.
- `./src/style.css` for Tailwind CSS import.
- `./src/vite-env.d.ts` for Vite TypeScript types.

## Project docs

- `./documents/context.md`
- `./documents/flow-diagram.md`
- `./documents/technical-demo-guide.md`

## Troubleshooting

### I don't see my changes...

Every time you change any file inside `./src`, the website refreshes automatically (hot reload).

If changes still don't appear, refresh clearing cache:

- Mac: `Cmd + Shift + R`
- Windows/Linux: `Ctrl + Shift + R`

## How do I include more TypeScript files?

Add files into `./src` and import them from `main.ts`.

Example:

```ts
import { myVar } from "./file2";
```

## How do I publish the website?

This boilerplate is compatible with Vercel in one step.

<!-- hide -->
## Contributors

This template was built as part of the [4Geeks Academy Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [ehiber](https://github.com/ehiber) and contributors. Find out more about our [AI Engineering Course](https://4geeksacademy.com/us/coding-bootcamps/ai-engineering), [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).

You can find other templates and resources like this at the [school's GitHub page](https://github.com/4geeksacademy/).
<!-- endhide -->
