import { session as session_ } from "grammy";

export interface Session {
  isAdmin: boolean;
}

function initial(): Session {
  return {
    isAdmin: false,
  };
}

export const session = session_({ initial });
