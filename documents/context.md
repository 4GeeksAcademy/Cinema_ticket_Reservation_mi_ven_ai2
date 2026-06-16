# Project: Cinema Seat Reservations (TypeScript)

## Tech Stack
* Primary: CLI Application / demonstration of TypeScript logic
* Optional: Dashboard / front-end application (HTML, Tailwind CSS, TypeScript)

## Allowed Technologies
* Use HTML, Tailwind CSS, and TypeScript only for the front-end implementation.

## Product & Delivery Requirements
* Use a mobile-first approach in structure and content priority.
* Ensure SEO compatibility (semantic HTML, metadata, canonical, structured data).
* Ensure GEO compatibility (LLM/discovery-friendly metadata and crawl files).

## Strict Constraints
* Do NOT use objects or classes in this context.
* Must use purely functional programming with primitive types and arrays.
* Use a two-dimensional array (matrix) only.
* Matrix dimensions: 8 rows by 10 columns.
* Data representation: 1 = occupied, 0 = available.

## Core Requirements
* Function to initialize the 8x10 seating matrix.
* Function to print the seating matrix to the console.
	* Use 'X' for occupied seats.
	* Use 'L' for available seats.
	* Include row and column numbers.
* Function to reserve a seat using row and column numbers.
	* Must change the value from 0 to 1.
	* Validate if already occupied and return success/failure message.
* Function to count and return total occupied and available seats.

## Advanced Feature
* Function to find two adjacent available seats horizontally in the same row.
	* Return their positions.
	* Return the first pair found if there are multiple.
	* Show a clear message if no adjacent seats exist.

## Testing & Output
* Test empty room.
* Print clear console messages for every action (e.g., reservation success, seat taken).
* Document all functions with comments.
