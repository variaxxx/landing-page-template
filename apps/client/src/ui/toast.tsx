"use client";

import SuccessIcon from "@/../public/icons/circle-check-fill.svg";
import CrossIcon from "@/../public/icons/cross.svg";
import ErrorIcon from "@/../public/icons/triangle-alert-fill.svg";
import type { ToastIcons, ToastProps } from "@/types/toast.types";
import { useEffect, useState } from "react";

export default function Toast({
  title,
  info,
  type,
  onClose,
}: ToastProps) {
  const [isVisible, setVisibility] = useState(true);

  const expirationTime = 3;

  const iconsMap: ToastIcons = {
    success: (<SuccessIcon className="h-32" />),
    error: (<ErrorIcon className="h-32" />),
  };

  const IconComponent = iconsMap[type];

  const close = () => {
    setVisibility(false);
    if (onClose)
      onClose();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      close();
    }, 1000 * expirationTime);

    return () => clearTimeout(timer);
  });

  return (
    <div
      className={`${isVisible ? "opacity-100" : "opacity-0"} relative shadow-lg bg-(--primary-background-color) border-2 rounded-[16px] border-(--secondary-background-color) bottom-24 px-16 py-12 flex items-center`}
    >
      {IconComponent}

      <div className="flex flex-col ml-16 gap-4">
        <span className="font-medium font-rubik text-[16px]/[16px]">
          {title}
        </span>

        <span className="text-(--secondary-text-color) font-rubik text-[16px]/[16px]">
          {info}
        </span>
      </div>

      <CrossIcon className="h-16 ml-24 cursor-pointer" onClick={close} />
    </div>
  );
}
