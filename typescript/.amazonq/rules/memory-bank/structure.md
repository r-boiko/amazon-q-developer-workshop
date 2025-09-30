# Project Structure

## Root Directory Organization
```
amazon-q-developer-workshop/
├── java/           # Spring Boot implementation
├── python/         # Flask implementation  
├── typescript/     # Express.js implementation
├── nodejs/         # Alternative Node.js implementation
├── csharp/         # ASP.NET Core implementation
├── prompts/        # Workshop prompts and exercises
├── scripts/        # Installation and setup scripts
└── README.md       # Workshop overview
```

## Core Architecture Pattern
Each language implementation follows a consistent **MVC (Model-View-Controller)** architecture:

### Controllers Layer
- **HomeController**: Handles landing page and user registration
- **GameController**: Manages game logic, guess processing, and state management

### Models Layer  
- **Word**: Core game entity with guess validation logic
- **GameStatus**: Enumeration for game states (INPROGRESS, SUCCESS, FAILED)

### Services Layer
- **WordSelectionService**: Handles word selection logic and game initialization

### Repositories Layer
- **WordList**: Manages word storage, loading, and random selection with singleton pattern

### Views Layer
- **home**: User registration and game start interface
- **game**: Main gameplay interface with guess input and feedback display

## Key Components

### Word Management System
- Default word lists stored in `resources/default-words.txt`
- Singleton pattern for word list management
- Random word selection with duplicate prevention
- File I/O operations for custom word lists

### Game Logic Engine
- 6-letter word validation
- Position-based character matching
- Multi-attempt tracking (max 5 attempts)
- Real-time feedback generation

### Web Interface
- Bootstrap-responsive design
- EJS/Razor/Thymeleaf templating
- Static asset management (CSS, JS, images)
- Workshop mode proxy path handling

## Architectural Patterns
- **Singleton Pattern**: WordList management
- **MVC Pattern**: Clear separation of concerns
- **Service Layer Pattern**: Business logic encapsulation
- **Repository Pattern**: Data access abstraction