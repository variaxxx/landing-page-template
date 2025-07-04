import { config } from "../../config.js";
import { createRouter } from "../create-router.js";

const router = createRouter();

interface NotificationSuccessResponse {
  deliveredCnt: number;
  totalCnt: number;
}

interface NotificationFailureResponse {
  msg: string;
  error: string;
}

router.post("/notification", async (c) => {
  const bot = c.get("bot");

  try {
    const results = await Promise.all(
      config.bot.TG_BOT_ADMINS.map(id =>
        bot.api
          .sendMessage(id, "Notification from server!")
          .then(() => ({
            success: true,
          }))
          .catch((err) => {
            console.error(`Message for ${id} failed: ${err.message}`);
            return { success: false };
          }),
      ),
    );

    return c.json<NotificationSuccessResponse>({
      deliveredCnt: results.filter(result => result.success).length,
      totalCnt: results.length,
    });
  } catch (e) {
    return c.json<NotificationFailureResponse>(
      {
        msg: "Something went wrong...",
        error: e instanceof Error ? e.message : "Unknown error",
      },
      500,
    );
  }
});

export default router;
