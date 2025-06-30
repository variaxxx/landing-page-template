import { Composer } from "../composer.js";
import { isAdmin } from "../filters/is-admin.js";

const composer = new Composer();

const adminComposer = composer.filter(isAdmin);

adminComposer.command("admin", async (ctx) => {
  return ctx.reply("Your admin panel could be here.");
});

export default composer;
