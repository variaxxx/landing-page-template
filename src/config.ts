import process from "node:process";
import { z } from "zod/v4";

const botBaseConfigSchema = z.object({
  DEBUG: z
    .string()
    .transform((str) => (str === "true" ? true : false))
    .default(false),
  SERVER_HOST: z.string(),
  SERVER_PORT: z
    .string()
    .transform((str) => {
      const num = Number(str);
      return isNaN(num) ? 5000 : num;
    })
    .default(5000),
  TG_BOT_MODE: z.enum(["polling", "webhook"]),
  TG_BOT_TOKEN: z.string(),
  TG_BOT_ADMINS: z
    .string()
    .transform((str) => {
      return str
        .slice(1, -1)
        .split(",")
        .map((item) => {
          const num = Number(item.trim());
          return isNaN(num) ? null : num;
        })
        .filter((num) => num !== null);
    })
    .default([]),
});

const pollingConfigSchema = z.object({});

const webhookConfigSchema = z.object({
  WEBHOOK_URL: z.url(),
  WEBHOOK_SECRET: z.string(),
});

const botConfigSchema = botBaseConfigSchema.and(
  z.discriminatedUnion("TG_BOT_MODE", [
    z.object({
      TG_BOT_MODE: z.literal("polling"),
      ...pollingConfigSchema.shape,
    }),
    z.object({
      TG_BOT_MODE: z.literal("webhook"),
      ...webhookConfigSchema.shape,
    }),
  ])
);

const serverConfigSchema = z.object({
  DEBUG: z
    .string()
    .transform((str) => (str === "true" ? true : false))
    .default(false),
  SERVER_HOST: z.string(),
  SERVER_PORT: z
    .string()
    .transform((str) => {
      const num = Number(str);
      return isNaN(num) ? 5000 : num;
    })
    .default(5000),
  TG_BOT_MODE: z.enum(["polling", "webhook"]),
  WEBHOOK_SECRET: z.string().optional(),
});

function createConfig() {
  try {
    process.loadEnvFile();
  } catch (err) {
    throw new Error(`Error while loading .env file: ${err}`);
  }

  try {
    const botConfig = botConfigSchema.parse(process.env);
    const serverConfig = serverConfigSchema.parse(process.env);

    // console.log(serverConfig)
    // console.log(botConfig)

    return { bot: botConfig, server: serverConfig };
  } catch (err) {
    if (err instanceof z.ZodError) {
      const errPaths = err.issues.map((e) => e.path);
      throw new Error(
        `Error while parsing environment variables: ${errPaths.join(", ")}`
      );
    }

    throw err;
  }
}

export type BotConfig = z.infer<typeof botConfigSchema>;
export type ServerConfig = z.infer<typeof serverConfigSchema>;
export const config = createConfig();
