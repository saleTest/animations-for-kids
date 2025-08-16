"use client";

import { useState } from "react";

export const useToastNotification = () => {
  const [message, setMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 5000); // nestane nakon 3 sekunde
  };

  const Toast = () =>
    message ? (
      <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
        {message}
      </div>
    ) : null;

  return { showToast, Toast };
};
