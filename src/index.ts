import { createBot, startBot } from "./bot/index.js";
import { config } from "./config.js";
import { createServer, startServer } from "./server/index.js";

const bot = createBot(config.bot.TG_BOT_TOKEN, {
  config: config.bot,
});

const server = createServer({
  bot,
  config: config.server,
});

try {
  await Promise.all([startBot(bot), startServer(server)]);
} catch (err) {
  throw new Error(
    `Error while starting a bot: ${err instanceof Error ? err.message : err}`
  );
}
