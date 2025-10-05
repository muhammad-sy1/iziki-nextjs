// lib/firebaseClient.ts
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  onMessage,
  Messaging,
} from "firebase/messaging";

let app: FirebaseApp;
if (!getApps().length) {
  console.log("ProjectId:", process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);

  app = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: "izikiz-nextjs",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  });
} else {
  app = getApp();
}

export function initMessaging(): Messaging | null {
  if (typeof window === "undefined") return null;
  try {
    return getMessaging(app);
  } catch {
    return null;
  }
}

export async function getFcmToken(): Promise<string | null> {
  const messaging = initMessaging();
  if (!messaging) return null;

  try {
    const token = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
    });
    console.log(token);
    return token;
  } catch (err) {
    console.error("FCM getToken error:", err);
    return null;
  }
}

export function onForegroundMessage(callback: (payload: any) => void): void {
  const messaging = initMessaging();
  if (messaging) {
    onMessage(messaging, (payload) => callback(payload));
  }
}
