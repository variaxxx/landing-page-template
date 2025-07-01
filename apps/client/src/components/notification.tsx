"use client";

import SuccessIcon from "@/../public/icons/circle-check-fill.svg";
import CrossIcon from "@/../public/icons/cross.svg";
import ErrorIcon from "@/../public/icons/triangle-alert-fill.svg";
import { useEffect, useState } from "react";

type NotificationType = "success" | "error";

interface NotificationProps {
  title: string;
  info: string;
  type: NotificationType;
}

export default function Notification({
  title,
  info,
  type,
}: NotificationProps) {
  const [isVisible, setVisibility] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setVisibility(false);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // });

  return (
    <div className={`${isVisible ? "opacity-100" : "opacity-0"} absolute shadow-lg bg-(--primary-background-color) border-2 rounded-[16px] border-(--secondary-background-color) bottom-24 px-16 py-12 flex items-center`}>
      {type === "success" && (
        <SuccessIcon className="h-32" />
      )}

      {type === "error" && (
        <ErrorIcon className="h-32" />
      )}

      <div className="flex flex-col ml-16 gap-4">
        <span className="font-medium font-rubik text-[16px]/[16px]">{title}</span>

        <span className="text-(--secondary-text-color) font-rubik text-[16px]/[16px]">{info}</span>
      </div>

      <CrossIcon className="h-16 ml-24" />
    </div>
  );
}
