import { Menu, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { brand, navItems } from "@/data/offers";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <div className="dm-container flex min-h-20 items-center justify-between gap-4">
        <a href="#inicio" className="flex min-w-0 flex-col">
          <span className="font-display text-2xl text-foreground">Don Manuel</span>
          <span className="text-xs text-muted-foreground sm:text-sm">{brand.tagline}</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="hero">
            <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
              <MessageCircle />
              Pedir por WhatsApp
            </a>
          </Button>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Abrir navegación"
          className="mobile-menu-button lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <Menu className="size-5" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-border/60 bg-background/95 lg:hidden">
          <nav className="dm-container flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link py-1"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild variant="hero" className="mt-2 w-full">
              <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
                <MessageCircle />
                Pedir por WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
