type SeatMatrix = number[][];
type SeatPair = [[number, number], [number, number]];

if (typeof document !== "undefined") {
  void import("./style.css");
}

const ROWS = 8;
const COLUMNS = 10;

/**
 * Builds a seat code using 1-based row/column values.
 * Example: (1,1), (2,4), (8,10).
 */
function getSeatCode(rowNumber: number, columnNumber: number): string {
  return `(${rowNumber},${columnNumber})`;
}

/**
 * Creates an 8x10 seat matrix.
 * 0 means available, 1 means occupied.
 */
function initializeSeatingMatrix(value: 0 | 1 = 0): SeatMatrix {
  const matrix: SeatMatrix = [];

  for (let row = 0; row < ROWS; row += 1) {
    const currentRow: number[] = [];
    for (let column = 0; column < COLUMNS; column += 1) {
      currentRow.push(value);
    }
    matrix.push(currentRow);
  }

  return matrix;
}

/**
 * Creates a copy of the matrix to avoid mutating existing state by reference.
 */
function cloneMatrix(matrix: SeatMatrix): SeatMatrix {
  return matrix.map((row) => row.slice());
}

/**
 * Prints the seat matrix in a readable console table with numeric row/column headers.
 * X = occupied, L = available.
 */
function printSeatingMatrix(matrix: SeatMatrix, title: string): void {
  console.log(`\n${title}`);

  const header: string[] = [];
  for (let column = 1; column <= COLUMNS; column += 1) {
    header.push(String(column).padStart(2, " "));
  }
  console.log(`    ${header.join(" ")}`);

  for (let row = 0; row < ROWS; row += 1) {
    const seats: string[] = [];
    for (let column = 0; column < COLUMNS; column += 1) {
      seats.push(matrix[row][column] === 1 ? " X" : " L");
    }
    console.log(`${String(row + 1).padStart(2, " ")} |${seats.join(" ")}`);
  }
}

/**
 * Attempts to reserve one seat by row/column number.
 * Returns a success or failure message.
 */
function reserveSeat(matrix: SeatMatrix, rowNumber: number, columnNumber: number): string {
  const rowIndex = rowNumber - 1;
  const columnIndex = columnNumber - 1;
  const seatCode = getSeatCode(rowNumber, columnNumber);

  if (rowIndex < 0 || rowIndex >= ROWS || columnIndex < 0 || columnIndex >= COLUMNS) {
    return `Reservation failed: seat ${seatCode} is out of range.`;
  }

  if (matrix[rowIndex][columnIndex] === 1) {
    return `Reservation failed: seat ${seatCode} is already occupied.`;
  }

  matrix[rowIndex][columnIndex] = 1;
  return `Reservation successful: seat ${seatCode} is now occupied.`;
}

/**
 * Counts seats and returns [occupied, available].
 */
function countSeats(matrix: SeatMatrix): [number, number] {
  let occupied = 0;
  let available = 0;

  for (let row = 0; row < ROWS; row += 1) {
    for (let column = 0; column < COLUMNS; column += 1) {
      if (matrix[row][column] === 1) {
        occupied += 1;
      } else {
        available += 1;
      }
    }
  }

  return [occupied, available];
}

/**
 * Finds the first horizontal adjacent pair of available seats.
 * Returns coordinates as row/column numbers, or null if none exists.
 */
function findAdjacentAvailableSeats(matrix: SeatMatrix): SeatPair | null {
  for (let row = 0; row < ROWS; row += 1) {
    for (let column = 0; column < COLUMNS - 1; column += 1) {
      if (matrix[row][column] === 0 && matrix[row][column + 1] === 0) {
        return [
          [row + 1, column + 1],
          [row + 1, column + 2],
        ];
      }
    }
  }

  return null;
}

/**
 * Converts the adjacent-seat search result into a readable message.
 */
function getAdjacentSeatMessage(matrix: SeatMatrix): string {
  const pair = findAdjacentAvailableSeats(matrix);
  if (pair === null) {
    return "Adjacent seats: none available.";
  }

  const first = getSeatCode(pair[0][0], pair[0][1]);
  const second = getSeatCode(pair[1][0], pair[1][1]);
  return `Adjacent seats found at ${first} and ${second}.`;
}

/**
 * Prints occupied/available totals and adjacent-seat status.
 */
function printScenarioSummary(matrix: SeatMatrix): void {
  const totals = countSeats(matrix);
  console.log(`Occupied seats: ${totals[0]}`);
  console.log(`Available seats: ${totals[1]}`);
  console.log(getAdjacentSeatMessage(matrix));
}

/**
 * Runs the required empty-room console test with explicit action logs.
 */
function runEmptyRoomConsoleTest(): void {
  const matrix = initializeSeatingMatrix();

  console.log("\n=== Test: Empty room ===");
  printSeatingMatrix(matrix, "Initial seating matrix");
  printScenarioSummary(matrix);

  console.log("\nAction: reserve seat (1,1)");
  console.log(reserveSeat(matrix, 1, 1));

  console.log("\nAction: reserve seat (1,1) again");
  console.log(reserveSeat(matrix, 1, 1));

  printSeatingMatrix(matrix, "After reservation actions");
  printScenarioSummary(matrix);
}

/**
 * Builds the seat grid markup for the dashboard.
 */
function buildSeatGridMarkup(matrix: SeatMatrix): string {
  const columnHeader: string[] = [];
  for (let column = 1; column <= COLUMNS; column += 1) {
    columnHeader.push(`<div class="rounded-md bg-slate-800 py-1 text-center text-xs font-semibold text-white">${column}</div>`);
  }

  const rowsMarkup: string[] = [];
  for (let row = 0; row < ROWS; row += 1) {
    const seatsMarkup: string[] = [];
    for (let column = 0; column < COLUMNS; column += 1) {
      const occupied = matrix[row][column] === 1;
      const stateClass = occupied
        ? "border-rose-600 bg-rose-600 text-white"
        : "border-emerald-600 bg-emerald-100 text-emerald-900";
      const seatCode = getSeatCode(row + 1, column + 1);
      const seatMark = occupied ? "X" : "L";

      seatsMarkup.push(
        `<button type="button" class="seat-btn rounded-md border px-2 py-2 text-xs font-semibold ${stateClass}" data-row="${row + 1}" data-column="${column + 1}" aria-label="Reserve seat ${seatCode}">${seatMark}</button>`,
      );
    }

    rowsMarkup.push(
      `<div class="grid grid-cols-[30px_repeat(10,minmax(0,1fr))] gap-1"><div class="rounded-md bg-slate-900 py-1 text-center text-xs font-semibold text-white">${row + 1}</div>${seatsMarkup.join("")}</div>`,
    );
  }

  return `<div class="grid gap-1"><div class="grid grid-cols-[30px_repeat(10,minmax(0,1fr))] gap-1"><div class="rounded-md bg-slate-950 py-1 text-center text-xs font-semibold text-white">R/C</div>${columnHeader.join("")}</div>${rowsMarkup.join("")}</div>`;
}

/**
 * Renders the dashboard UI and wires reserve/reset interactions.
 */
function renderDashboard(): void {
  if (typeof document === "undefined") {
    return;
  }

  const app = document.querySelector<HTMLDivElement>("#app");
  if (app === null) {
    return;
  }

  let matrix = initializeSeatingMatrix();
  let status = "Ready: reserve any seat.";

  const paint = (): void => {
    const totals = countSeats(matrix);
    const adjacent = getAdjacentSeatMessage(matrix);

    app.innerHTML = `
      <section class="mt-5 rounded-2xl border border-slate-300 bg-white p-4 shadow-sm sm:p-6">
        <h2 class="text-center text-xl font-bold text-red-700">Interactive Seat Reservation</h2>

        <div class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <label class="text-sm font-medium text-red-700">Row
            <input id="row-input" type="number" min="1" max="${ROWS}" value="1" class="mt-1 w-full rounded-md border border-red-300 bg-white px-3 py-2 text-sm text-red-700" />
          </label>
          <label class="text-sm font-medium text-red-700">Column
            <input id="column-input" type="number" min="1" max="${COLUMNS}" value="1" class="mt-1 w-full rounded-md border border-red-300 bg-white px-3 py-2 text-sm text-red-700" />
          </label>
          <div class="grid grid-cols-2 gap-2 sm:grid-cols-1">
            <button id="reserve-btn" type="button" class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white">Reserve</button>
            <button id="reset-btn" type="button" class="rounded-md border border-red-400 bg-white px-3 py-2 text-sm font-semibold text-red-700">Reset</button>
          </div>
        </div>

        <p id="status-msg" class="mt-3 text-sm font-medium text-red-700">${status}</p>
        <p class="mt-1 text-sm text-red-700">Occupied: <strong>${totals[0]}</strong> | Available: <strong>${totals[1]}</strong></p>
        <p class="mt-1 text-sm text-red-700">${adjacent}</p>

        <div class="mt-4 overflow-x-auto">${buildSeatGridMarkup(matrix)}</div>
      </section>
    `;

    const rowInput = app.querySelector<HTMLInputElement>("#row-input");
    const columnInput = app.querySelector<HTMLInputElement>("#column-input");
    const reserveButton = app.querySelector<HTMLButtonElement>("#reserve-btn");
    const resetButton = app.querySelector<HTMLButtonElement>("#reset-btn");

    if (rowInput !== null && columnInput !== null && reserveButton !== null) {
      reserveButton.addEventListener("click", () => {
        const row = Number.parseInt(rowInput.value, 10);
        const column = Number.parseInt(columnInput.value, 10);

        if (Number.isNaN(row) || Number.isNaN(column)) {
          status = "Reservation failed: invalid seat selection.";
          paint();
          return;
        }

        const nextMatrix = cloneMatrix(matrix);
        const message = reserveSeat(nextMatrix, row, column);
        matrix = nextMatrix;
        status = message;
        console.log(`Action: reserve seat ${getSeatCode(row, column)}`);
        console.log(message);
        paint();
      });
    }

    if (resetButton !== null) {
      resetButton.addEventListener("click", () => {
        matrix = initializeSeatingMatrix();
        status = "Scenario reset to empty room.";
        console.log("Action: reset scenario");
        paint();
      });
    }

    app.querySelectorAll<HTMLButtonElement>(".seat-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const row = Number.parseInt(button.dataset.row ?? "", 10);
        const column = Number.parseInt(button.dataset.column ?? "", 10);

        if (Number.isNaN(row) || Number.isNaN(column)) {
          return;
        }

        const nextMatrix = cloneMatrix(matrix);
        const message = reserveSeat(nextMatrix, row, column);
        matrix = nextMatrix;
        status = message;
        console.log(`Action: reserve seat ${getSeatCode(row, column)}`);
        console.log(message);
        paint();
      });
    });
  };

  paint();
}

runEmptyRoomConsoleTest();
renderDashboard();

export {};
