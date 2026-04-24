import { Check, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { OfferItem } from "@/data/offers";
import { buildOfferWhatsAppLink } from "@/lib/whatsapp";

type OfferCardProps = {
  offer: OfferItem;
};

export function OfferCard({ offer }: OfferCardProps) {
  return (
    <Card className="offer-card group overflow-hidden border-border/70 bg-card">
      <div className="image-zoom relative aspect-[4/3] overflow-hidden">
        <img
          src={offer.image}
          alt={offer.alt}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover"
        />
        <span className="badge-shine absolute left-4 top-4">{offer.badge}</span>
      </div>
      <CardContent className="space-y-5 p-5">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-2xl text-foreground">{offer.name}</h3>
            <span className="menu-chip">{offer.category}</span>
          </div>
          <p className="text-sm leading-6 text-muted-foreground">{offer.description}</p>
        </div>

        <div className="space-y-3 rounded-lg border border-border/70 bg-surface/80 p-4">
          <p className="text-sm font-semibold text-foreground">Incluye</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {offer.includes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 size-4 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Precio</p>
            <p className="mt-1 font-display text-2xl text-foreground">{offer.price}</p>
          </div>
          <Button asChild variant="hero" className="shrink-0">
            <a
              href={buildOfferWhatsAppLink(offer.name)}
              target="_blank"
              rel="noreferrer"
              aria-label={`Pedir ${offer.name} por WhatsApp`}
            >
              <MessageCircle />
              Pedir este combo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
