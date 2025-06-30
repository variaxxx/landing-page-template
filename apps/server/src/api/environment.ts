import type { Bot } from "../bot/index.js";
import type { ServerConfig } from "../config.js";

export interface Env {
  Variables: {
    config: ServerConfig;
    bot: Bot;
  };
}
