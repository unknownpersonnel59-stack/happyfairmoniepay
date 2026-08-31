import { useEffect } from "react";

interface LiveChatProps {
  onBack?: () => void;
  user?: { name: string; email: string };
  balance?: number;
  transactions?: any[];
}

const WHATSAPP_SUPPORT_URL = "https://wa.me/2348083681314";

const LiveChat: React.FC<LiveChatProps> = () => {
  useEffect(() => {
    window.location.href = WHATSAPP_SUPPORT_URL;
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <p className="text-muted-foreground">Redirecting to Whatsapp Support…</p>
        <a
          href={WHATSAPP_SUPPORT_URL}
          className="mt-2 inline-block text-sm text-primary underline"
        >
          Click here if you are not redirected
        </a>
      </div>
    </div>
  );
};

export default LiveChat;

  
