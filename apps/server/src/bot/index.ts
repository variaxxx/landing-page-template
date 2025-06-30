import type { BotConfig } from "../config.js";
import { config } from "../config.js";
import type { Context } from "./context.js";
import handlers from "./handlers/index.js";
import { session } from "./session.js";
import { hydrate } from "@grammyjs/hydrate";
import type { BotConfig as BotConfig_ } from "grammy";
import { Bot as TelegramBot } from "grammy";

export interface BotDependencies {
  config: BotConfig;
}

export function createBot(
  token: string,
  deps: BotDependencies,
  botConfig?: BotConfig_<Context>,
) {
  const { config } = deps;

  const bot = new TelegramBot<Context>(token, botConfig);

  // Setting up config
  bot.use(async (ctx, next) => {
    ctx.config = config;
    await next();
  });

  // Middlewares
  bot.use(session);
  bot.use(hydrate());

  // Errors handler
  if (config.TG_BOT_MODE === "polling") {
    bot.catch(({ ctx, error: err }) => {
      console.error(err);
      if (err instanceof Error) {
        if (!err.message.includes(bot.token)) {
          return ctx.reply(`An error occurred: ${err.message}`);
        }
      }
    });
  }

  bot.use(handlers); // Handlers

  return bot;
}

export async function startBot(bot: Bot) {
  if (config.bot.TG_BOT_MODE === "polling") {
    await Promise.all([
      bot.init(),
      bot.api.deleteWebhook({ drop_pending_updates: true }),
    ]);

    return bot.start({
      onStart: async () => {
        // eslint-disable-next-line no-console
        console.log("Bot started in polling mode");
      },
    });
  } else if (config.bot.TG_BOT_MODE === "webhook") {
    // TODO
  }
}

export type Bot = ReturnType<typeof createBot>;
