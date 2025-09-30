# Technology Stack

## Programming Languages & Frameworks

### Java Implementation
- **Framework**: Spring Boot 3.x
- **Template Engine**: Thymeleaf
- **Build Tool**: Maven
- **Testing**: JUnit 5, Spring Boot Test
- **Java Version**: 17+

### Python Implementation  
- **Framework**: Flask
- **Template Engine**: Jinja2
- **Package Manager**: pip
- **Testing**: pytest
- **Python Version**: 3.8+

### TypeScript Implementation
- **Runtime**: Node.js
- **Framework**: Express.js
- **Template Engine**: EJS
- **Build Tool**: TypeScript Compiler (tsc)
- **Package Manager**: npm
- **Testing**: Jest
- **TypeScript Version**: 5.x

### Node.js Implementation
- **Runtime**: Node.js
- **Framework**: Express.js  
- **Template Engine**: EJS
- **Package Manager**: npm
- **Testing**: Jest

### C# Implementation
- **Framework**: ASP.NET Core
- **Template Engine**: Razor Pages
- **Build Tool**: .NET CLI
- **Testing**: xUnit
- **Version**: .NET 6+

## Frontend Technologies
- **CSS Framework**: Bootstrap 5.3
- **JavaScript**: Vanilla JS for game interactions
- **Icons**: Custom Q logo image
- **Responsive Design**: Mobile-first approach

## Development Commands

### Java
```bash
mvn clean install    # Build project
mvn spring-boot:run  # Run application
mvn test            # Run tests
```

### Python
```bash
pip install -r requirements.txt  # Install dependencies
python app.py                   # Run application
pytest                         # Run tests
```

### TypeScript
```bash
npm install          # Install dependencies
npm run build       # Compile TypeScript
npm start           # Run application
npm test            # Run tests
```

### C#
```bash
dotnet restore      # Restore packages
dotnet build        # Build project
dotnet run          # Run application
dotnet test         # Run tests
```

## Environment Configuration
- **Workshop Mode**: Configurable proxy paths for AWS workshop environment
- **Port Configuration**: Customizable via environment variables
- **Static Assets**: Served from framework-specific static directories