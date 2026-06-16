# Cinema Seat Reservation Technical Diagram

This document explains the project from three angles:
1. Relevant file structure
2. Main components
3. Runtime data flow

## 1) Relevant File Structure Diagram

```mermaid
flowchart TD
    ROOT[Project Root]

    ROOT --> IDX[index.html]
    ROOT --> SRC[src]

    SRC --> MAIN[src/main.ts]
    SRC --> STYLE[src/style.css]
    SRC --> TYPES[src/vite-env.d.ts]
```

## 2) Main Components Diagram

```mermaid
flowchart LR
    HTML[index.html]
    TS[src/main.ts]
    CSS[src/style.css]
    USER[User]

    HTML --> TS
    TS --> CSS
    USER --> TS

    TS --> LOGIC[Reservation Logic]
    TS --> UI[Dashboard Renderer]
    TS --> EVENTS[UI Event Listeners]
    TS --> FORMAT[Seat Code Formatter 1-based]
    TS --> REPORTING[Seat Summary + Adjacent Pair]

    LOGIC --> MATRIX[Seat Matrix 8 x 10]
    FORMAT --> LOGIC
    FORMAT --> UI
    EVENTS --> LOGIC
    LOGIC --> REPORTING
    REPORTING --> UI
```

## 3) Runtime Flow Diagram

```mermaid
flowchart TD
    A[App start] --> B[Import styles and set constants]
    B --> C[Run empty-room console test]
    C --> D[Render dashboard]
    D --> E[Initialize empty 8x10 matrix]
    E --> F[Paint seat grid + counters + adjacent message]
    F --> G[Wait for user input]

    G --> H{Action type}
    H -->|Reserve button| I[Read row and column numbers]
    H -->|Seat click| J[Read seat from dataset as row and column]
    H -->|Reset| K[Restore empty matrix]

    I --> M[Apply reserve seat action]
    J --> M
    M --> N{Seat in bounds and free}
    N -->|No| O[Show failure status]
    N -->|Yes| P[Mark seat occupied]

    K --> F
    O --> F
    P --> F
```
