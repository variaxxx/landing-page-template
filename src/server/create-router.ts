import type { Env } from "./environment.js";
import { Hono } from "hono";

export function createRouter() {
  return new Hono<Env>();
}
