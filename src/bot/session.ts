import { session as session_ } from "grammy";

export interface Session {
  isAdmin: boolean;
}

const initial = (): Session => ({
  isAdmin: false,
});

export const session = session_({ initial });
