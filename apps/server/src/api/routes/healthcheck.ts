import { createRouter } from "../create-router.js";

const router = createRouter();

router.get("/", (c) => {
  return c.json({ status: true });
});

export default router;
