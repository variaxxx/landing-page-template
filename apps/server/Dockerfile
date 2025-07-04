# BASE
FROM node:20-alpine AS base

WORKDIR /usr

# BUILDER
FROM base AS builder

COPY apps/server/package*.json ./apps/server

WORKDIR /usr/apps/server
RUN npm ci && \
    npm cache clean --force

COPY apps/server ./

RUN npm run build

# RUNNER
FROM base AS runner

WORKDIR /usr

COPY --from=builder /usr/apps/server/build ./build
COPY --from=builder /usr/apps/server/package*.json ./

RUN npm ci --omit-dev

EXPOSE 80

CMD ["node", "build/main.js"]
