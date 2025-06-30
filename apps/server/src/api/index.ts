import type { Bot } from "../bot/index.js";
import type { ServerConfig } from "../config.js";
import { config } from "../config.js";
import { createRouter } from "./create-router.js";
import botRouter from "./routes/bot.js";
import healthcheckRouter from "./routes/healthcheck.js";
import { createWebhookRouter } from "./routes/webhook.js";
import { serve } from "@hono/node-server";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

export interface ServerDependencies {
  bot: Bot;
  config: ServerConfig;
}

export function createServer(deps: ServerDependencies) {
  const { bot, config } = deps;

  const server = createRouter();

  // Setting up environment
  server.use("*", (c, next) => {
    c.set("bot", bot);
    c.set("config", config);
    return next();
  });

  // Middlewares
  if (config.DEBUG) {
    server.use("*", logger());
  }
  server.use("*", cors());

  // Routes
  if (config.TG_BOT_MODE === "webhook") {
    server.route(
      "/webhook",
      createWebhookRouter({
        bot,
        config,
      }),
    );
  }
  server.route("/healthcheck", healthcheckRouter);
  server.route("/bot", botRouter);

  return server;
}

export function startServer(server: Server) {
  return new Promise<{ url: string }>((resolve) => {
    serve(
      {
        fetch: server.fetch,
        hostname: config.server.SERVER_HOST,
        port: config.server.SERVER_PORT,
      },
      (info) => {
        const url
          = info.family === "IPv6"
            ? `http://[${info.address}]:${info.port}`
            : `http://${info.address}:${info.port}`;

        // eslint-disable-next-line no-console
        console.log(`Hono server started on: ${url}`);

        resolve({ url });
      },
    );
  });
}

export type Server = ReturnType<typeof createServer>;
