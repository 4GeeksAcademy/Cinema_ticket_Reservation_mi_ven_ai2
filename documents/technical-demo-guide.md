# Technical Demo Guide

## Project Scope

Cinema seat reservation simulator built with TypeScript + Vite, rendered in the browser with a live interactive dashboard.

## Core Runtime Files

- `index.html`
- `src/main.ts`
- `src/style.css`
- `src/vite-env.d.ts`

## Baseline Behavior At Startup

1. App initializes an empty 8x10 seat matrix.
2. Console test runs for an empty-room scenario and logs reservation outcomes.
3. Dashboard renders with numeric row/column controls, seat grid, counters, and adjacent-seat message.

## Demo Steps (UI)

1. Start the app with `npm run start`.
2. Enter row (1-8) and column (1-10), then click Reserve.
3. Click a seat directly in the grid where L means available and X means occupied.
4. Try reserving an already occupied seat to verify failure messaging.
5. Click Reset to return to an empty matrix.

## Expected Outcomes

- Invalid row/column combinations show an error status message.
- Occupied/Available counts update after each action.
- Adjacent seat message refreshes after each action.
- Reservation messages use 1-based seat coordinates like (1,1).
- Reset restores the initial empty scenario matrix.

## Validation

- Type check: `npm run typecheck`
- Production build: `npm run build`
