# Main TypeScript Explanation

This document explains how the seat reservation logic works in src/main.ts.

## 1. Purpose of the file

src/main.ts contains both:

- Console-side demonstration logic (test output in terminal)
- Browser-side dashboard logic (interactive seat reservation UI)

The same seat rules are used in both places.

## 2. Core data model

The file uses only arrays and primitive values for seat state:

- SeatMatrix = number[][]
- SeatPair = [[number, number], [number, number]]

Seat values:

- 0 means available
- 1 means occupied

The matrix size is fixed by constants:

- ROWS = 8
- COLUMNS = 10

## 3. Browser style loading

When code runs in a browser, it imports src/style.css dynamically.
When code runs in terminal mode, this branch is skipped.

## 4. Seat code helper

The helper getSeatCode formats seat references using 1-based row and column values:

- Example: (1,1), (2,4), (8,10)

This keeps messages readable while matrix internals still use zero-based indexes.

## 5. Matrix creation and copy helpers

initializeSeatingMatrix:

- Creates a fresh 8x10 matrix
- Fills all seats with a default value (0 by default)

cloneMatrix:

- Copies each row
- Prevents accidental mutation of current UI state when trying a new reservation

## 6. Console rendering and seat rules

printSeatingMatrix:

- Prints a formatted table with column numbers and row numbers
- Uses X for occupied and L for available

reserveSeat:

- Converts 1-based row/column values into zero-based matrix indexes
- Validates bounds
- Rejects already occupied seats
- Marks valid available seats as occupied
- Returns a clear success/failure string

countSeats:

- Scans all matrix cells
- Returns [occupied, available]

findAdjacentAvailableSeats:

- Scans left to right, top to bottom
- Looks for first horizontal pair where both values are 0
- Returns pair coordinates or null

getAdjacentSeatMessage:

- Converts pair result into readable message with seat IDs

printScenarioSummary:

- Prints counts and adjacent-seat message together

## 7. Console test flow

runEmptyRoomConsoleTest performs a required demonstration:

1. Create empty matrix
2. Print initial matrix and summary
3. Reserve (1,1)
4. Try to reserve (1,1) again (expected failure)
5. Print final matrix and summary

This verifies core logic without relying on UI.

## 8. Dashboard markup generator

buildSeatGridMarkup returns HTML for the seat board:

- Top header shows columns 1-10
- Left header shows rows 1-8
- Each seat is a button labeled with state marker only:
  - L for available
  - X for occupied
- Green style indicates available seats
- Red style indicates occupied seats

## 9. Interactive dashboard behavior

renderDashboard:

- Runs only in browser
- Mounts content under #app
- Holds local state in two variables:
  - matrix (seat map)
  - status (latest action message)

paint function:

- Re-renders controls, status, counters, adjacent info, and seat grid
- Rebinds handlers after each render

Reserve button handler:

- Reads row and column numbers from inputs
- Validates numeric input
- Clones matrix and calls reserveSeat
- Updates status and re-renders

Reset button handler:

- Recreates empty matrix
- Sets reset message
- Re-renders

Seat button handler:

- Reads row/column from data attributes
- Clones matrix and calls reserveSeat
- Updates status and re-renders

## 10. Execution order

At the end of the file:

- runEmptyRoomConsoleTest() runs first
- renderDashboard() runs second

That means terminal logs appear for the scenario, and browser UI is available when loaded via Vite.

## 11. Design notes

This file keeps business logic centralized and reused by both console and UI.
The matrix stays numeric for simple computation, while helper functions present user-friendly seat labels.
