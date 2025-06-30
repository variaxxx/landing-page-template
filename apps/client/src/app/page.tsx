"use client";

import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string | null>(null);

  const handleClick = async () => {
    const response = await axios.post(`http://${process.env.NEXT_PUBLIC_API_BASE_URL}/bot/notification`);

    if (response.status === 200) {
      setMessage("Успешно");
    }
  };

  return (
    <div className="min-h-screen flex flex-direction-column align-items-center justify-center gap-3">
      <button className="cursor-pointer bg-color-white" onClick={handleClick}>
        Notification to telegram bot
      </button>

      { message && (
        <span>{ message }</span>
      )}
    </div>
  );
}
