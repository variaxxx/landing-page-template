<h1 align="center">✨ Landing Page Template</h1>
<p align="center"> A modern full-stack starter powered by <strong>Next.js</strong>, <strong>Hono</strong>, and <strong>grammY</strong>.</p>

- [⚙️ Tech Stack](#️-tech-stack)
- [✅ Features](#-features)
- [🚀 Getting Started](#-getting-started)
  - [1. 🔐 Environment Variables](#1--environment-variables)
  - [2. 📦 Install Dependencies](#2--install-dependencies)
  - [3. 💻 Running the Project](#3--running-the-project)
    - [Development](#development)
    - [Production](#production)
  - [4. 🏗️ Build Commands](#4-️-build-commands)
  - [5. 🧼 Linting](#5--linting)
- [📦 Docker Deployment](#-docker-deployment)
  - [🐳 1. Build Docker Images](#-1-build-docker-images)
  - [▶️ 2. Run the Containers](#️-2-run-the-containers)
  - [⚙️ 3. Environment Configuration](#️-3-environment-configuration)
  - [🧼 4. Stop the Containers](#-4-stop-the-containers)
- [📁 Project Structure](#-project-structure)

## ⚙️ Tech Stack
- **Frontend**: Next.js (React-based)
- **Backend**: Hono (Fast and lightweight web framework)
- **Telegram Bot**: grammY
- **Styling**: Tailwind CSS
- **Language**: TypeScript (everywhere)

## ✅ Features
- ✨ Modern full-stack TypeScript setup
- ⚡ Fast backend with Hono
- 🤖 Integrated Telegram bot via grammY
- 🧩 Modular and scalable folder structure
- 💅 Beautiful UI with Tailwind CSS
- 🌐 Easy deployment with Docker

## 🚀 Getting Started

### 1. 🔐 Environment Variables
Copy the example .env file and update with your values:
```bash
cp apps/server/example.env apps/server/.env
```
Edit .env and provide your configuration (e.g. API URLs, bot token, etc).

Same for the `apps/client/.env`.

---

### 2. 📦 Install Dependencies

```bash
npm install
```
This installs dependencies for the entire monorepo (client, server, and bot).

---

### 3. 💻 Running the Project

#### Development

Start both the frontend and backend in development mode:
```bash
npm run dev
```

You can also run them separately:
```bash
npm run dev:client   # Start Next.js on http://localhost:3000
npm run dev:server   # Start backend with tsc-watch
```

#### Production

> ⚠️ **Build Required Before Start!**
>
> Please make sure to build the codebase first before starting the application. Refer to the [Build Commands](#4-️-build-commands) section for more information.

Run both the client and server in production mode:
```bash
npm run start
```

Or run them individually:
```bash
npm run start:client   # Serve pre-built Next.js frontend
npm run start:server   # Serve backend after compilation
```

---

### 4. 🏗️ Build Commands

Build the entire app:
```bash
npm run build
```

Or build parts individually:
```bash
npm run build:client   # Build Next.js app
npm run build:server   # Compile backend + Telegram bot
```

---

### 5. 🧼 Linting

Check for code quality issues:
```bash
npm run lint
```

Fix common issues automatically:
```bash
npm run lint:fix
```

## 📦 Docker Deployment
This project includes Docker support for both the frontend (Next.js) and backend (Hono + Telegram bot).

---

### 🐳 1. Build Docker Images

Build the images for both client and server:
```bash
docker-compose build
```

Or, if you’re using standalone Docker commands:
```bash
# Build client
cd apps/client
docker build -t landing-client .

# Build server
cd apps/server
docker build -t landing-server .
```

---

### ▶️ 2. Run the Containers
Using docker-compose:
```bash
docker-compose up
```

Or manually:
```bash
# Run server (API + Telegram bot)
docker run -d --env-file ./apps/server/.env -p 5000:5000 landing-server

# Run frontend (Next.js)
docker run -d 3000:3000 landing-client
```

---

### ⚙️ 3. Environment Configuration
Ensure that both `apps/client/.env` and `apps/server/.env` are properly configured.

---

### 🧼 4. Stop the Containers
```bash
docker-compose down
```

## 📁 Project Structure

```
apps/
├── client/                  # Next.js frontend
│   ├── public/              # Public static files (images, icons, etc.)
│   ├── src/                 # Source folder
│   │   ├── app/             # Next.js app directory (routing, layouts, pages)
│   │   ├── components/      # Reusable React components
│   │   ├── styles/          # Global CSS/Tailwind styles
│   │   ├── types/           # TypeScript type definitions
│   │   ├── ui/              # Shared UI elements (buttons, inputs, etc.)
│   │   └── utils/           # Utility functions/helpers
│   ├── .env.development     # Environment variables for development mode
│   └── .env                 # Base environment file (must be created manually)
└── server/                  # Backend server built with Hono
    ├── src/                 # Source folder
    │   └── api/             # API-related logic
    │   │   ├── routes/      # HTTP route handlers
    │   │   └── index.ts     # API entrypoint, route registration
    │   └── bot/             # Telegram bot logic (powered by grammY)
    │   │   ├── filters/     # Bot filters
    │   │   ├── handlers/    # Message/command handlers
    │   │   └── index.ts     # Entry point for bot setup
    │   ├── config.ts        # Shared configuration, environment loading
    │   └── main.ts          # Main server entry point (launches API & bot)
    └── .env                 # Server-specific environment variables
```
