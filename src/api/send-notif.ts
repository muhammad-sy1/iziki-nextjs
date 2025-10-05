// pages/api/send-notif.ts
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";

if (!admin.apps.length) {
  const serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY_JSON as string
  );
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { token, title, body } = req.body;

  if (!token) {
    return res.status(400).json({ error: "Token is required" });
  }

  try {
    const message = {
      token,
      notification: { title: title || "Hello", body: body || "Test message" },
    };

    const response = await admin.messaging().send(message);
    return res.status(200).json({ success: true, id: response });
  } catch (error: any) {
    console.error("Error sending message:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
