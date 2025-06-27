import { Hono } from "hono";
import { Env } from "./environment.js";

export function createRouter() {
  return new Hono<Env>();
}
