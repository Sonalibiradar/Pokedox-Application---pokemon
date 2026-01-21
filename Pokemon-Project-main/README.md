# Pokemon Search Application

A premium "Pokedex" application allowing users to search and view detailed statistics of Pokemon.
Built with a Spring Boot backend (caching enabled) and a React Frontend (Glassmorphism design).

## Features

- **Search**: Find Pokemon by name (e.g., "Charizard", "Mewtwo").
- **Premium UI**: Glassmorphism design, smooth 3D-like hover effects, floating animations.
- **Performance**: Backend caching (Caffeine) ensures sub-millisecond responses for repeated queries.
- **Details**: View type, stats (HP, Attack, etc.), height, and weight.

## Prerequisites

- **Java**: JDK 17 or higher.
- **Maven**: For running the backend.
- **Node.js**: For running the frontend.

## Getting Started

### 1. Start the Backend

Navigate to the `server` directory and run the Spring Boot application:

```bash
cd server
mvn spring-boot:run
```

The server will start on `http://localhost:8080`.
Failed API calls (e.g., invalid pokemon) will return appropriate JSON errors.

### 2. Start the Frontend

Navigate to the `client` directory and start the Vite dev server:

```bash
cd client
npm install
npm run dev
```

The frontend will likely start on `http://localhost:5173`.

### 3. Usage

1. Open your browser to the Frontend URL.
2. Enter a Pokemon name in the search bar.
3. Press Enter or Click "Search".
4. Enjoy the view!

## Architecture

- **Backend**: Spring Boot 3, Caffeine Cache, RestTemplate.
  - `PokemonController`: Exposes REST endpoints.
  - `PokemonService`: Handles logic and caching.
  - `GlobalExceptionHandler`: Manages errors.
- **Frontend**: React, Vite, TypeScript, Vanilla CSS.
  - `App.tsx`: Main logic.
  - `components/`: Modular UI components.
