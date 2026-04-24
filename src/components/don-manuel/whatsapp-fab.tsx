import { MessageCircleMore } from "lucide-react";

import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFab() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Pedir por WhatsApp"
      className="whatsapp-fab"
    >
      <MessageCircleMore className="size-5" />
      <span className="hidden md:inline">Pedir por WhatsApp</span>
    </a>
  );
}
