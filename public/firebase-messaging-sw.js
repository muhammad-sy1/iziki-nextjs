/* public/firebase-messaging-sw.js */
/* eslint-disable no-undef */
importScripts(
  "https://www.gstatic.com/firebasejs/10.12.4/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.12.4/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDy0x0COBJsPqeCWNT9fvH6SSU_u3tVzNw",
  authDomain: "izikiz-nextjs.firebaseapp.com",
  projectId: "izdikiz-nextjs",
  messagingSenderId: "820622115217",
  appId: "1:820622115217:web:46b4c04b1a18812f8a5a30",
});

const messaging = firebase.messaging();

// Handle background messages (when tab is closed or not focused)
messaging.onBackgroundMessage((payload) => {
  const { title, body, icon } = payload.notification || {};
  self.registration.showNotification(title || "Notification", {
    body: body || "",
    icon: icon || "/icon-192.png",
    data: payload.data || {},
  });
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = event.notification?.data?.click_action || "/";
  event.waitUntil(
    (async () => {
      const all = await clients.matchAll({
        type: "window",
        includeUncontrolled: true,
      });
      for (const c of all) {
        if ("url" in c && c.url.includes(url)) return c.focus();
      }
      return clients.openWindow(url);
    })()
  );
});
