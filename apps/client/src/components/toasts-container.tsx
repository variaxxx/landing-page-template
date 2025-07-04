"use client";

import Toast from "../ui/toast";
import type { ToastItem, ToastProps } from "@/types/toast.types";
import { generateRandomId } from "@/utils/generate-id";
import { useState } from "react";

export function useToasts() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const maxCnt = 3;

  const showToast = (props: ToastProps) => {
    const id = generateRandomId();
    setToasts(prev => [...prev.slice(0, maxCnt - 1), { ...props, id }]);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(item => item.id !== id));
  };

  const ToastsContainer = () =>
    (toasts.length > 0 && (
      <div className="fixed z-50 bottom-0 flex flex-col gap-8">
        {toasts.map(item => (
          <Toast
            key={item.id}
            info={item.info}
            title={item.title}
            type={item.type}
            onClose={() => removeToast(item.id)}
          />
        ))}
      </div>
    ));

  return { showToast, ToastsContainer };
}
