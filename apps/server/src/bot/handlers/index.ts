import { Composer } from "../composer.js";
import adminPanel from "./admin-panel.js";
import uncaught from "./uncaught.js";
import welcome from "./welcome.js";

const composer = new Composer();

composer
  .on("message")
  .filter(ctx => ctx.chat.type === "private")
  .use(welcome)
  .use(adminPanel)
  .use(uncaught); // must be the last one

export default composer;
