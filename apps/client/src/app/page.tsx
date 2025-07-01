"use client";

import Notification from "@/components/notification";
import Button from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const handleClick = async () => {
    try {
      const response = await axios.post(`http://${process.env.NEXT_PUBLIC_API_BASE_URL}/bot/notification`);

      if (response.status === 200) {
        // setMessage("Success");
      }
    } catch (e) {
      console.error(e);
    }
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

      <Button onClick={handleClick} className="mt-[32px]">Notification of the TG bot</Button>

      <Notification title="Success" type="success" info="Message sent successfully"></Notification>
    </div>
  );
}
