"use client";

import { useToasts } from "@/components/toasts-container";
import Button from "@/ui/button";
import axios from "axios";
import { useState } from "react";

export default function WelcomeMenu() {
  const { showToast, ToastsContainer } = useToasts();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isLocked, setLock] = useState<boolean>(false);

  const handleClick = async () => {
    if (isLoading || isLocked)
      return;

    setLoading(true);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bot/notification`);

      if (response.status === 200) {
        showToast({
          info: "Message sent successfully",
          title: "Success",
          type: "success",
        });
      }

      setLock(true);
      setTimeout(() => setLock(false), 3000);
    } catch (e) {
      console.error(e);
      showToast({
        info: "Something went wrong",
        title: "Error",
        type: "error",
      });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold font-rubik text-[96px]/[80px] select-none">
        Landing
        <br></br>
        Page
        <br></br>
        Template
      </h1>

      <Button onClick={handleClick} className="mt-32 w-256" disabled={isLocked}>
        {isLoading
          ? (
              <svg className="h-16 animate-spin relative" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10"></circle>
                <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )
          : "Notification to bot"}
      </Button>
      <ToastsContainer />
    </div>
  );
}
