# BASE
FROM node:20-alpine AS base

WORKDIR /usr

# BUILDER
FROM base AS builder

COPY apps/client/package*.json ./apps/client/

WORKDIR /usr/apps/client
RUN npm ci && \
    npm cache clean --force

COPY apps/client ./

RUN npm run build

# RUNNER
FROM base AS runner

WORKDIR /usr

COPY --from=builder /usr/apps/client/public ./public
COPY --from=builder /usr/apps/client/.next ./.next
COPY --from=builder /usr/apps/client/package*.json ./

RUN npm ci --omit-dev

EXPOSE 3000

CMD ["node", "build/main.js"]
