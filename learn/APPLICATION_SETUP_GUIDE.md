# Complete Application Setup Guide

This document covers the complete setup process for running applications across different technology stacks.

---

## Table of Contents
1. [Python Applications](#python-applications)
2. [Node.js Applications](#nodejs-applications)
3. [Java Applications](#java-applications)
4. [Golang Applications](#golang-applications)

---

## Python Applications

### Prerequisites
- **Python 3.8+** installed
- **pip** (comes with Python)
- **virtualenv** or **venv** (built-in)
- **Git** (optional but recommended)

### Flask Application Setup

#### 1. Install Python
```bash
# Ubuntu/Debian
sudo apt update && sudo apt install python3 python3-pip python3-venv

# macOS (Homebrew)
brew install python3

# Windows
# Download from python.org
```

#### 2. Create Project Structure
```bash
mkdir my-flask-app
cd my-flask-app
```

#### 3. Create Virtual Environment
```bash
# Using venv (built-in)
python3 -m venv venv

# Activate virtual environment
# Linux/macOS
source venv/bin/activate
# Windows
venv\Scripts\activate
```

#### 4. Install Dependencies
```bash
# Create requirements.txt
echo "flask==3.0.0" > requirements.txt

# Install
pip install -r requirements.txt
```

#### 5. Create Flask App
```python
# app.py
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, Flask!'

if __name__ == '__main__':
    app.run(debug=True)
```

#### 6. Run Application
```bash
python app.py
# Access at http://localhost:5000
```

---

### Django Application Setup

#### 1. Install Django
```bash
pip install django==5.0
```

#### 2. Create Project
```bash
django-admin startproject myproject
cd myproject
```

#### 3. Run Migrations
```bash
python manage.py migrate
```

#### 4. Create Superuser (Optional)
```bash
python manage.py createsuperuser
```

#### 5. Run Server
```bash
python manage.py runserver
# Access at http://localhost:8000
```

#### 6. Create App (Optional)
```bash
python manage.py startapp myapp
```

---

### Python Project Best Practices

| Practice | Description |
|----------|-------------|
| **requirements.txt** | Pin exact versions for reproducibility |
| **pyproject.toml** | Modern Python packaging (PEP 621) |
| **.python-version** | Specify Python version for tools like pyenv |
| **.env** | Store environment variables (never commit) |
| **pytest** | Testing framework |
| **black/ruff** | Code formatting and linting |

```bash
# Generate requirements.txt from installed packages
pip freeze > requirements.txt

# Install from requirements
pip install -r requirements.txt
```

---

## Node.js Applications

### Prerequisites
- **Node.js** (LTS version recommended)
- **npm** (comes with Node.js)
- **nvm** (Node Version Manager - recommended)
- **Git**

### Installing Node.js with nvm (Recommended)

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload shell
source ~/.bashrc

# Install latest LTS
nvm install --lts

# Use specific version
nvm use 20
```

### React Application Setup

#### 1. Create React App (Vite - Recommended)
```bash
# Using Vite (faster, modern)
npm create vite@latest my-react-app -- --template react

# Or with TypeScript
npm create vite@latest my-react-app -- --template react-ts
```

#### 2. Install Dependencies
```bash
cd my-react-app
npm install
```

#### 3. Run Development Server
```bash
npm run dev
# Access at http://localhost:5173
```

#### 4. Build for Production
```bash
npm run build
# Output in dist/ folder
```

#### 5. Preview Production Build
```bash
npm run preview
```

---

### Express.js Application Setup

#### 1. Initialize Project
```bash
mkdir my-express-app
cd my-express-app
npm init -y
```

#### 2. Install Dependencies
```bash
# Core dependencies
npm install express cors dotenv helmet morgan

# Development dependencies
npm install -D nodemon typescript @types/node @types/express ts-node
```

#### 3. Create Express Server
```javascript
// src/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello, Express!' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

#### 4. Update package.json Scripts
```json
{
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "test": "jest"
  },
  "type": "module"
}
```

#### 5. Run Application
```bash
# Development
npm run dev

# Production
npm start
# Access at http://localhost:3000
```

---

### Node.js Project Best Practices

| Practice | Description |
|----------|-------------|
| **package-lock.json** | Commit for reproducible builds |
| **.nvmrc** | Specify Node version |
| **ESLint + Prettier** | Code quality |
| **TypeScript** | Type safety |
| **.env files** | Environment configuration |
| **pnpm/yarn** | Faster package managers |

```bash
# Create .nvmrc
echo "20" > .nvmrc

# Use pnpm (faster, disk-efficient)
npm install -g pnpm
pnpm install
```

---

## Java Applications

### Prerequisites
- **JDK 17+** (LTS recommended)
- **Maven** or **Gradle**
- **Git**
- **IDE** (IntelliJ IDEA, VS Code, Eclipse)

### Installing JDK

```bash
# Ubuntu/Debian
sudo apt update && sudo apt install openjdk-17-jdk maven

# macOS (Homebrew)
brew install openjdk@17 maven

# Windows
# Download from Oracle or use SDKMAN
# SDKMAN: curl -s "https://get.sdkman.io" | bash
# Then: sdk install java 17.0.10-tem
```

### Spring Boot Application Setup

#### 1. Create Project (Spring Initializr)
```bash
# Option 1: Web (https://start.spring.io)
# Option 2: CLI
curl https://start.spring.io/starter.zip \
  -d dependencies=web,data-jpa,h2,validation \
  -d groupId=com.example \
  -d artifactId=myapp \
  -d name=myapp \
  -d packageName=com.example.myapp \
  -d javaVersion=17 \
  -o myapp.zip

unzip myapp.zip && cd myapp
```

#### 2. Project Structure
```
myapp/
├── src/
│   ├── main/
│   │   ├── java/com/example/myapp/
│   │   │   ├── MyappApplication.java
│   │   │   ├── controller/
│   │   │   ├── service/
│   │   │   ├── repository/
│   │   │   └── model/
│   │   └── resources/
│   │       ├── application.properties
│   │       └── static/
│   └── test/
├── pom.xml (Maven) or build.gradle (Gradle)
└── mvnw / mvnw.cmd / gradlew / gradlew.bat
```

#### 3. Create Controller
```java
// src/main/java/com/example/myapp/controller/HelloController.java
package com.example.myapp.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello, Spring Boot!";
    }

    @GetMapping("/health")
    public HealthResponse health() {
        return new HealthResponse("UP", java.time.Instant.now());
    }

    public record HealthResponse(String status, java.time.Instant timestamp) {}
}
```

#### 4. Configure Application
```properties
# src/main/resources/application.properties
server.port=8080
spring.application.name=myapp

# H2 Database (in-memory)
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.h2.console.enabled=true
```

#### 5. Run Application
```bash
# Using Maven wrapper
./mvnw spring-boot:run

# Or using Gradle wrapper
./gradlew bootRun

# Or build and run JAR
./mvnw clean package
java -jar target/myapp-0.0.1-SNAPSHOT.jar
# Access at http://localhost:8080
```

---

### Java Mobile (Android) Setup

#### Prerequisites
- **Android Studio** (includes JDK, SDK, Emulator)
- **Android SDK** (API 34+)

#### Create Android Project
```bash
# Using Android Studio: File > New > New Project
# Select: Empty Activity
# Language: Kotlin (recommended) or Java
# Minimum SDK: API 24+
```

#### Project Structure
```
MyApplication/
├── app/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/myapp/
│   │   │   │   └── MainActivity.kt
│   │   │   ├── res/
│   │   │   │   ├── layout/activity_main.xml
│   │   │   │   └── values/strings.xml
│   │   │   └── AndroidManifest.xml
│   │   └── test/
│   └── build.gradle.kts
├── build.gradle.kts
├── settings.gradle.kts
└── gradle.properties
```

#### Run Application
```bash
# From project root
./gradlew installDebug

# Or use Android Studio: Run > Run 'app'
```

---

## Golang Applications

### Prerequisites
- **Go 1.21+** installed
- **Git**
- **IDE** (VS Code with Go extension, GoLand)

### Installing Go

```bash
# Ubuntu/Debian
sudo apt update && sudo apt install golang-go

# macOS (Homebrew)
brew install go

# Windows
# Download from golang.org/dl

# Or use GVM (Go Version Manager)
bash < <(curl -s -S -L https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer)
source ~/.gvm/scripts/gvm
gvm install go1.21
gvm use go1.21 --default
```

### Gin Framework Setup

#### 1. Initialize Module
```bash
mkdir my-gin-app
cd my-gin-app
go mod init github.com/username/my-gin-app
```

#### 2. Install Gin
```bash
go get -u github.com/gin-gonic/gin
```

#### 3. Create Main Application
```go
// main.go
package main

import (
	"net/http"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Middleware
	r.Use(gin.Logger())
	r.Use(gin.Recovery())

	// Routes
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello, Gin!",
		})
	})

	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status":    "UP",
			"timestamp": time.Now().Format(time.RFC3339),
		})
	})

	// Start server
	r.Run(":8080") // Listen on port 8080
}
```

#### 4. Run Application
```bash
# Development
go run main.go

# Build binary
go build -o my-gin-app main.go
./my-gin-app

# Access at http://localhost:8080
```

---

### Go Project Structure (Standard Layout)

```
my-gin-app/
├── cmd/
│   └── server/
│       └── main.go
├── internal/
│   ├── handler/
│   ├── service/
│   ├── repository/
│   └── model/
├── pkg/
│   └── ...
├── configs/
│   └── config.yaml
├── go.mod
├── go.sum
├── Makefile
├── Dockerfile
└── README.md
```

#### Using Makefile
```makefile
# Makefile
.PHONY: run build test clean

run:
	go run ./cmd/server/main.go

build:
	go build -o bin/server ./cmd/server/main.go

test:
	go test ./...

clean:
	rm -rf bin/

docker-build:
	docker build -t my-gin-app .
```

```bash
# Run with make
make run
make build
```

---

### Go Best Practices

| Practice | Description |
|----------|-------------|
| **go.mod/go.sum** | Commit both for reproducible builds |
| **golangci-lint** | Comprehensive linter |
| **gofumpt/goimports** | Formatting |
| **Air** | Live reload for development |
| **Wire** | Dependency injection |
| **Viper** | Configuration management |

```bash
# Install air for live reload
go install github.com/air-verse/air@latest

# Create .air.toml and run
air

# Install golangci-lint
go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest
golangci-lint run
```

---

## Quick Reference Summary

| Stack | Install Command | Run Dev | Run Prod | Port |
|-------|----------------|---------|----------|------|
| **Flask** | `pip install flask` | `python app.py` | `gunicorn app:app` | 5000 |
| **Django** | `pip install django` | `python manage.py runserver` | `gunicorn` | 8000 |
| **React (Vite)** | `npm create vite@latest` | `npm run dev` | `npm run build && npm run preview` | 5173 |
| **Express** | `npm install express` | `npm run dev` | `npm start` | 3000 |
| **Spring Boot** | `./mvnw spring-boot:run` | `./mvnw spring-boot:run` | `java -jar app.jar` | 8080 |
| **Gin (Go)** | `go get github.com/gin-gonic/gin` | `go run main.go` | `./my-gin-app` | 8080 |

---

## Environment Management

### Python
```bash
# pyenv for version management
pyenv install 3.11.0
pyenv local 3.11.0

# poetry for dependency management
pip install poetry
poetry init
poetry add flask
poetry run python app.py
```

### Node.js
```bash
# nvm for version management
nvm install 20
nvm use 20

# pnpm for package management
npm install -g pnpm
pnpm install
```

### Java
```bash
# SDKMAN for version management
sdk install java 17.0.10-tem
sdk use java 17.0.10-tem

# Gradle/Maven wrapper (preferred)
./gradlew build
./mvnw package
```

### Go
```bash
# gvm for version management
gvm install go1.21
gvm use go1.21

# Go modules (built-in)
go mod tidy
go mod vendor
```

---

## Docker Setup (Universal)

### Dockerfile Examples

#### Python (Flask)
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]
```

#### Node.js (React/Express)
```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Spring Boot
```dockerfile
FROM eclipse-temurin:17-jdk-alpine AS builder
WORKDIR /app
COPY . .
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

#### Go (Gin)
```dockerfile
FROM golang:1.21-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o server ./cmd/server/main.go

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /app
COPY --from=builder /app/server .
EXPOSE 8080
CMD ["./server"]
```

### Docker Compose Example
```yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - ENV=production
    depends_on:
      - db

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  postgres_data:
```

```bash
# Run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

---

## Common Commands Cheatsheet

### Python
```bash
# Virtual environment
python -m venv venv && source venv/bin/activate

# Install packages
pip install package==version
pip freeze > requirements.txt
pip install -r requirements.txt

# Run
python app.py
python -m flask run

# Test
pytest
pytest --cov
```

### Node.js
```bash
# Initialize
npm init -y
npm create vite@latest

# Install
npm install package
npm install -D dev-package
npm ci  # Clean install from lockfile

# Run
npm run dev
npm start
npm run build

# Test
npm test
npm run test:watch
```

### Java (Maven)
```bash
# Create project
mvn archetype:generate

# Build
./mvnw clean compile
./mvnw clean package
./mvnw clean install

# Run
./mvnw spring-boot:run
java -jar target/app.jar

# Test
./mvnw test
./mvnw verify
```

### Go
```bash
# Module
go mod init module-name
go mod tidy

# Build
go build -o app main.go
go build -ldflags="-s -w" -o app main.go  # Smaller binary

# Run
go run main.go
go run ./cmd/server

# Test
go test ./...
go test -v -cover ./...
```

---

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Port already in use | `lsof -i :PORT` then `kill -9 PID` |
| Permission denied | `chmod +x script.sh` or run with `sudo` |
| Module not found | Check `go.mod`, `package.json`, `requirements.txt` |
| Version mismatch | Use version managers (nvm, pyenv, sdkman, gvm) |
| Dependency conflicts | Delete lock files and reinstall |

### Useful Debug Commands

```bash
# Check versions
python --version
node --version
java --version
go version

# Check installed packages
pip list
npm list
./mvnw dependency:tree
go list -m all

# Check running processes
ps aux | grep python
ps aux | grep node
ps aux | grep java
```

---

## Resources

- **Python**: [docs.python.org](https://docs.python.org), [flask.palletsprojects.com](https://flask.palletsprojects.com), [docs.djangoproject.com](https://docs.djangoproject.com)
- **Node.js**: [nodejs.org](https://nodejs.org), [vitejs.dev](https://vitejs.dev), [expressjs.com](https://expressjs.com)
- **Java**: [spring.io](https://spring.io), [spring.io/projects/spring-boot](https://spring.io/projects/spring-boot)
- **Go**: [golang.org](https://golang.org), [github.com/gin-gonic/gin](https://github.com/gin-gonic/gin)
- **Docker**: [docs.docker.com](https://docs.docker.com)

---

*Last updated: 2024*