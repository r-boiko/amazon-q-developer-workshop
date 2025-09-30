# Development Guidelines

## Code Quality Standards

### Naming Conventions
- **Classes**: PascalCase (e.g., `WordList`, `GameController`, `WordSelectionService`)
- **Methods**: camelCase (e.g., `getRandomWord()`, `loadWordsFromFile()`, `makeGuess()`)
- **Variables**: camelCase (e.g., `currentWord`, `lastWord`, `attempts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_ATTEMPTS`)
- **Package/Module Names**: lowercase with dots/underscores (e.g., `com.sample.qwords`, `Qwords.controllers`)

### Documentation Standards
- **Java**: Use Javadoc comments for public methods and classes
- **Python**: Use docstrings with parameter and return type descriptions
- **TypeScript**: Use JSDoc comments for complex functions
- **Inline Comments**: Explain business logic, especially game rules and scoring

### Error Handling Patterns
- **Java**: Use try-catch blocks with specific exception types, log errors with Log4j2
- **Python**: Custom exception classes (`GameError`, `InvalidWordError`, `GameSessionError`)
- **TypeScript**: Use try-catch with proper error logging to console
- **Consistent Error Messages**: User-friendly messages for game states

## Architectural Patterns

### Singleton Pattern Implementation
**Frequency**: Used in 4/10 analyzed files
```java
// Java implementation
private static WordList instance;
public static WordList getInstance() {
    if (instance == null) {
        instance = new WordList();
    }
    return instance;
}
```

```python
# Python implementation
_instance = None
@classmethod
def get_instance(cls, file_path=None):
    if cls._instance is None:
        cls._instance = WordList(file_path)
    return cls._instance
```

### MVC Controller Pattern
**Frequency**: Used in 3/10 analyzed files
- **Spring Boot**: Use `@Controller`, `@GetMapping`, `@PostMapping` annotations
- **Flask**: Use Blueprint pattern with route decorators
- **Express**: Use Router with HTTP method handlers
- **Session Management**: Use framework-specific session attributes

### Service Layer Pattern
**Frequency**: Used in 2/10 analyzed files
- Encapsulate business logic in service classes
- Inject services into controllers via dependency injection
- Keep controllers thin, services focused on single responsibility

## Common Implementation Patterns

### Word Validation Logic
**Frequency**: Used in 3/10 analyzed files
```java
public String getInfo(String guess) {
    StringBuilder result = new StringBuilder();
    for (int i = 0; i < guess.length(); i++) {
        char c = guess.charAt(i);
        if (contains(c)) {
            if (word.charAt(i) == c) {
                result.append('+'); // Correct position
            } else {
                result.append('?'); // Wrong position
            }
        } else {
            result.append('X'); // Not in word
        }
    }
    return result.toString();
}
```

### File I/O Operations
**Frequency**: Used in 4/10 analyzed files
- Use try-with-resources in Java
- Use context managers (`with` statement) in Python
- Handle file not found gracefully with fallback defaults
- Support multiple file locations (classpath, filesystem, resources)

### Logging Practices
**Frequency**: Used in 3/10 analyzed files
- **Java**: Use Lombok's `@Log4j2` or SLF4J
- **Python**: Use Flask's `current_app.logger`
- **TypeScript**: Use `console.log` for development, structured logging for production
- Log game state changes, user actions, and errors

## Frontend Development Standards

### JavaScript/TypeScript Patterns
**Frequency**: Used in 1/10 analyzed files
- Use `addEventListener` for DOM event handling
- Implement form validation before submission
- Add visual feedback with CSS animations (shake, fade-in)
- Use `setTimeout` for animation timing
- Prevent default form submission for custom handling

### CSS Animation Standards
- Use CSS classes for animations (`shake`, `fade-in`, `letter-box`)
- Implement hover effects with transform and transition
- Use consistent timing (0.3s transitions, 820ms shake duration)
- Apply responsive design with Bootstrap framework

## Testing Guidelines

### Unit Test Structure
**Frequency**: Used in 1/10 analyzed files
- Test edge cases (null inputs, empty strings, boundary values)
- Use descriptive test method names (`testGetCredentialsWithValidKeys`)
- Test both positive and negative scenarios
- Use appropriate assertions (`assertNotNull`, `assertEquals`, `assertTrue`)
- Group related tests in test classes

### Test Coverage Areas
- Word validation logic
- Game state transitions
- File I/O operations
- Error handling scenarios
- Boundary conditions (max attempts, word length)

## Security Considerations

### Input Validation
- Validate word length (6 characters)
- Sanitize user input (trim, lowercase)
- Check for null/empty inputs
- Use pattern matching for allowed characters

### Session Management
- Store minimal data in sessions
- Clear sensitive data after game completion
- Use framework-provided session handling
- Implement proper session timeout

## Performance Optimization

### Memory Management
- Use defensive copying for collections (`new ArrayList<>(wordList)`)
- Clear resources in finally blocks or use try-with-resources
- Implement proper singleton cleanup methods
- Avoid memory leaks in long-running sessions

### Efficient Data Structures
- Use StringBuilder for string concatenation
- Use List.contains() for word lookups
- Implement lazy loading for word lists
- Cache frequently accessed data