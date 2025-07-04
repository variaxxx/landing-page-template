# BASE
FROM node:20-alpine AS base

WORKDIR /usr

# BUILDER
FROM base AS builder

WORKDIR /usr

COPY package*.json ./
RUN npm i && \
    npm cache clean --force

COPY . .

RUN npm run build

# RUNNER
FROM base AS runner

WORKDIR /usr

COPY --from=builder /usr/public ./public
COPY --from=builder /usr/.next ./.next
COPY --from=builder /usr/package*.json ./

RUN npm i --omit-dev

EXPOSE 3000

CMD ["npm", "start"]
