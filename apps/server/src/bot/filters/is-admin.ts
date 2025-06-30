import type { Context } from "../context.js";

export function isAdmin(ctx: Context) {
  return !!ctx.from && ctx.config.TG_BOT_ADMINS?.includes(ctx.from.id);
}
