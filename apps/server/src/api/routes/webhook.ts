import { createRouter } from "../create-router.js";
import type { ServerDependencies } from "../index.js";
import { webhookCallback } from "grammy";

export function createWebhookRouter(deps: ServerDependencies) {
  const { bot, config } = deps;

  const router = createRouter();

  router.post(
    "/webhook",
    webhookCallback(bot, "hono", {
      secretToken: config.WEBHOOK_SECRET,
    }),
  );

  return router;
}
