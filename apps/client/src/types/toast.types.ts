import type { ReactNode } from "react";

export type ToastType = "success" | "error";

export interface ToastProps {
  title: string;
  info: string;
  type: ToastType;
  onClose?: () => void;
}

export type ToastIcons = Record<ToastType, ReactNode>;

export interface ToastItem extends ToastProps {
  id: number;
}
