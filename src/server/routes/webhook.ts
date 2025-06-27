import { webhookCallback } from "grammy";
import { createRouter } from "../create-router.js";
import { ServerDependencies } from "../index.js";

export const createWebhookRouter = (deps: ServerDependencies) => {
  const { bot, config } = deps;

  const router = createRouter();

  router.post(
    "/webhook",
    webhookCallback(bot, "hono", {
      secretToken: config.WEBHOOK_SECRET,
    })
  );

  return router;
};
