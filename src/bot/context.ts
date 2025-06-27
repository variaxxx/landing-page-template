import { HydrateFlavor } from "@grammyjs/hydrate";
import { Context as DefaultContext, SessionFlavor } from "grammy";
import { BotConfig } from "../config.js";
import { Session } from "./session.js";

interface AdditionContextFlavor {
  config: BotConfig;
}

export type Context = HydrateFlavor<
  DefaultContext & AdditionContextFlavor & SessionFlavor<Session>
>;
