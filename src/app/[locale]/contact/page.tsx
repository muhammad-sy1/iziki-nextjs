"use client";

// pages/index.tsx
import { useEffect, useState } from "react";
import { getFcmToken, onForegroundMessage } from "@/lib/firebaseClient";

export default function Home() {
  const [token, setToken] = useState<string | null>(null);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const requestPermission = async () => {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        const t = await getFcmToken();
        setToken(t);
      } else {
        console.log("Permission not granted for notifications");
      }
    };

    requestPermission();

    onForegroundMessage((payload) => {
      setMessages((prev) => [...prev, payload]);
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Firebase Push Notifications (Next.js + TS)</h1>
      <p>
        <strong>Token:</strong>
      </p>
      <textarea
        value={token || ""}
        readOnly
        style={{ width: "100%", height: "100px" }}
      />

      <h2>Messages:</h2>
      <ul>
        {messages.map((m, i) => (
          <li key={i}>{JSON.stringify(m)}</li>
        ))}
      </ul>
    </div>
  );
}
