<h1 align="center">✨ Simple Landing Page Template</h1>

## 🛠️ Tech Stack

- **Next.js** – frontend (React-based)
- **Hono** – ultra-light backend framework
- **grammY** – Telegram bot framework
- **Tailwind CSS** – utility-first styling
- **TypeScript**

## 🚀 Getting Started
### 1. 🔐 Environment Setup
Create a .env file based on the example:
```bash
cp example.env .env
```
Fill in your values as needed.

### 2. 📦 Install Dependencies
```bash
npm install
```

### 3. 🧪 Run needed script

#### Development
```bash
npm run dev
```
Run both client and server in development mode concurrently.

---
```bash
npm run dev:client
```
Start Next.js development server for the client on port 3000.

---

```bash
npm run dev:server
```
Start the server with tsc-watch to auto-restart on TypeScript changes.

#### Production
```bash
npm run start
```
Run both client and server in production mode concurrently.

---

```bash
npm run start:client
```
Start the production Next.js server for the client on port 3000.

---

```bash
npm run start:server
```
Compile TypeScript and run the server in production mode.

#### Build
```bash
npm run build:client
```
Build the Next.js client for production.
