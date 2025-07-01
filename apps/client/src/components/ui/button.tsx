"use client";

import { clsx } from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function Button({
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "cursor-pointer bg-(--button-color) hover:bg-(--button-accent-color) text-(--button-text-color) h-[52px] px-[32px] font-rubik active:scale-95 duration-100 ease-in-out rounded-[12px] select-none";

  return (
    <button className={clsx(baseStyles, className)} {...props}>
      {children}
    </button>
  );
}
