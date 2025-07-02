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
  const baseStyles = `enabled:cursor-pointer bg-(--button-color) enabled:hover:bg-(--button-accent-color) text-(--button-text-color) h-52 px-32 font-rubik enabled:active:scale-95 transition-all duration-100 rounded-[12px] select-none gap-8 flex items-center justify-center disabled:text-(--button-disabled-text-color) disabled:cursor-not-allowed shadow-xl/30`;

  return (
    <button className={clsx(baseStyles, className)} {...props}>
      {children}
    </button>
  );
}
