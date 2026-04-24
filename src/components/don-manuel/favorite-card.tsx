import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { FavoriteItem } from "@/data/offers";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type FavoriteCardProps = {
  item: FavoriteItem;
};

export function FavoriteCard({ item }: FavoriteCardProps) {
  return (
    <Card className="product-card group overflow-hidden border-border/60 bg-card/95 backdrop-blur-sm">
      <div className="image-zoom aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover"
        />
      </div>
      <CardContent className="space-y-4 p-5">
        <div className="space-y-2">
          <h3 className="font-display text-2xl text-foreground">{item.name}</h3>
          <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
        </div>
        <Button asChild variant="warm" className="commercial-button w-full justify-between">
          <a
            href={buildWhatsAppLink(`Hola, Panadería Don Manuel. Quiero consultar por ${item.name}.`)}
            target="_blank"
            rel="noreferrer"
            aria-label={`Consultar ${item.name} por WhatsApp`}
          >
            Consultar
            <ArrowUpRight />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
