import { useEffect } from "react";
import { TELEGRAM_INVITE_URL } from "@/lib/constants";

const Telegram = () => {
  useEffect(() => {
    window.location.href = TELEGRAM_INVITE_URL;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirigiendo a Telegram...</p>
      </div>
    </div>
  );
};

export default Telegram;
