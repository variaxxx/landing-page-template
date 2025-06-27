import { Bot } from '../bot/index.js';
import { ServerConfig } from "../config.js";

export interface Env {
  Variables: {
    config: ServerConfig,
    bot: Bot
  }
}
