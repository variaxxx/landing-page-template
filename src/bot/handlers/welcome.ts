import { Composer } from "../composer.js";

const composer = new Composer();

composer.command("start", async (ctx) => {
  return ctx.reply("Bot is working");
});

composer.command("id", async (ctx) => {
  return ctx.reply(`Your ID is: ${ctx.from?.id}`)
})

export default composer;
