# Getting Started with Q-Words TypeScript Application

## Overview
Q-Words is a Wordle-inspired word guessing game built with TypeScript, Express.js, and EJS templating. Players have 5 attempts to guess a 6-letter word with color-coded feedback.

## Framework & Technology Stack
- **Runtime**: Node.js with TypeScript
- **Web Framework**: Express.js
- **Template Engine**: EJS
- **CSS Framework**: Bootstrap 5.3
- **Testing**: Jest with ts-jest
- **Build Tool**: TypeScript Compiler (tsc)

## Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

## Quick Setup

### 1. Install Dependencies
```bash
cd typescript
npm install
```

### 2. Build the Application
```bash
npm run build
```

### 3. Run the Application
```bash
# Workshop mode (default)
npm start

# Standalone mode
npm run start:standalone
```

### 4. Access the Game
Open your browser to: `http://localhost:8090`

## Application Structure

### Core Architecture (MVC Pattern)
```
typescript/
├── controllers/           # Request handlers
│   ├── HomeController.ts  # Landing page & user registration
│   └── GameController.ts  # Game logic & guess processing
├── models/               # Data models
│   ├── Word.ts          # Word validation & feedback logic
│   └── GameStatus.ts    # Game state enumeration
├── services/            # Business logic
│   └── WordSelectionService.ts  # Word selection logic
├── repositories/        # Data access
│   └── WordList.ts      # Word management (Singleton)
├── resources/           # Static data
│   └── default-words.txt  # Default word list
├── views/              # EJS templates
│   ├── home.ejs        # User registration page
│   └── game.ejs        # Main game interface
├── static/             # Static assets
│   └── images/Q.png    # Game logo
├── app.ts              # Express application setup
├── index.ts            # Application entry point
└── config.ts           # Configuration management
```

## Key Classes & Components

### 1. Word Model (`models/Word.ts`)
Core game logic for word validation and feedback generation.

**Key Methods:**
- `isCorrect(guess: string)`: Validates if guess matches the word
- `getInfo(guess: string)`: Returns feedback string (+, ?, X)
- `contains(c: string)`: Checks if character exists in word

### 2. WordList Repository (`repositories/WordList.ts`)
Singleton pattern for managing word storage and selection.

**Key Methods:**
- `getInstance()`: Returns singleton instance
- `getRandomWord()`: Selects random word from list
- `loadWordsFromFile(filePath: string)`: Loads custom word lists
- `addWord(word: string)`: Adds new word to collection

### 3. GameController (`controllers/GameController.ts`)
Handles game flow and user interactions.

**Routes:**
- `GET /game`: Initialize new game
- `POST /game`: Process guess and update game state

### 4. WordSelectionService (`services/WordSelectionService.ts`)
Business logic for word selection and game initialization.

## Game Rules

### Objective
Guess a 6-letter word within 5 attempts.

### Feedback System
- **+ (Green)**: Correct letter in correct position
- **? (Yellow)**: Correct letter in wrong position  
- **X (Red)**: Letter not in the word

### Game States
- `INPROGRESS`: Game is active, more attempts available
- `SUCCESS`: Word guessed correctly
- `FAILED`: All attempts used without success

## Configuration

### Environment Variables
- `WORKSHOP_MODE`: Set to "true" for workshop environment (default)
- `PORT`: Application port (default: 8090)

### Workshop vs Standalone Mode
- **Workshop Mode**: Uses `/proxy/8090` base path for AWS workshop environment
- **Standalone Mode**: Direct localhost access without proxy

## Development Commands

```bash
# Install dependencies
npm install

# Build TypeScript
npm run build

# Run in workshop mode
npm start

# Run in standalone mode  
npm run start:standalone

# Run tests
npm test
```

## Testing
The application uses Jest for testing. Test files are located in the `tests/` directory.

```bash
# Run all tests
npm test

# Run specific test file
npx jest tests/wordlist.test.ts
```

## Customization

### Adding Custom Words
1. Edit `resources/default-words.txt`
2. Add one word per line (6 letters each)
3. Restart the application

### Modifying Game Rules
- **Attempts**: Change limit in `GameController.ts` (currently 5)
- **Word Length**: Update validation in `Word.ts` and views
- **Feedback Logic**: Modify `getInfo()` method in `Word.ts`

## Troubleshooting

### Common Issues
1. **Port already in use**: Change PORT environment variable
2. **TypeScript compilation errors**: Run `npm run build` to check syntax
3. **Missing dependencies**: Run `npm install` to reinstall packages

### Debug Mode
Enable debug logging by setting:
```bash
DEBUG=app:* npm start
```

## Next Steps
- Explore the codebase starting with `index.ts`
- Modify word lists in `resources/default-words.txt`
- Add new features by extending the MVC structure
- Run tests to understand the application behavior