import type { BotConfig } from "../config.js";
import type { Session } from "./session.js";
import type { HydrateFlavor } from "@grammyjs/hydrate";
import type { Context as DefaultContext, SessionFlavor } from "grammy";

interface AdditionContextFlavor {
  config: BotConfig;
}

export type Context = HydrateFlavor<
  DefaultContext & AdditionContextFlavor & SessionFlavor<Session>
>;
