"use client";

import type { NotificationProps } from "./notification";
import Notification from "./notification";
import { generateRandomId } from "@/utils/generate-id";
import { useState } from "react";

interface NotificationItem extends NotificationProps {
  id: number;
}

export function useNotifications() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  const maxCnt = 3;

  const showNotification = (props: NotificationProps) => {
    const id = generateRandomId();
    setNotifications(prev => [...prev.slice(0, maxCnt - 1), { ...props, id }]);
  };

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(item => item.id !== id));
  };

  const NotificationContainer = () =>
    (notifications.length > 0 && (
      <div className="fixed z-50 bottom-0 flex flex-col gap-8">
        {notifications.map(item => (
          <Notification
            key={item.id}
            info={item.info}
            title={item.title}
            type={item.type}
            onClose={() => removeNotification(item.id)}
          />
        ))}
      </div>
    ));

  return { showNotification, NotificationContainer };
}
