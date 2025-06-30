import { Composer } from "../composer.js";

const composer = new Composer();

composer.on("message:text", async (ctx) => {
  return ctx.reply("Your request cant be processed.");
});

export default composer;
