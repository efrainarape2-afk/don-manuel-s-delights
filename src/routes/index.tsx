import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight, Clock3, Instagram, MapPin, MessageCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { FavoriteCard } from "@/components/don-manuel/favorite-card";
import { MenuCategory } from "@/components/don-manuel/menu-category";
import { OfferCard } from "@/components/don-manuel/offer-card";
import { Reveal } from "@/components/don-manuel/reveal";
import { SectionHeading } from "@/components/don-manuel/section-heading";
import { StickyHeader } from "@/components/don-manuel/sticky-header";
import { WhatsAppFab } from "@/components/don-manuel/whatsapp-fab";
import { Button } from "@/components/ui/button";
import {
  brand,
  favorites,
  gallery,
  offerCategories,
  offers,
  quickMenu,
  rotatingWords,
  steps,
  tickerItems,
  values,
  type OfferFilter,
} from "@/data/offers";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Panadería y Pastelería Don Manuel C.A. | Pan, dulces, charcutería y combos",
      },
      {
        name: "description",
        content:
          "Panadería y Pastelería Don Manuel C.A. ofrece pan recién hecho, pastelería, charcutería, embutidos, café y combos especiales. Haz tu pedido por WhatsApp.",
      },
      {
        property: "og:title",
        content: "Panadería y Pastelería Don Manuel C.A. | Pan, dulces, charcutería y combos",
      },
      {
        property: "og:description",
        content:
          "Pan recién hecho, dulces de casa, café, charcutería y combos especiales para tu mesa venezolana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          name: brand.name,
          telephone: brand.whatsappDisplay,
          sameAs: [brand.instagram],
          servesCuisine: "Panadería y pastelería venezolana",
          description:
            "Panadería, pastelería, charcutería, embutidos, café y combos especiales disponibles por WhatsApp.",
          areaServed: "Venezuela",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [activeCategory, setActiveCategory] = useState<OfferFilter>("Todos");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % rotatingWords.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

  const filteredOffers = useMemo(() => {
    if (activeCategory === "Todos") return offers;
    return offers.filter((offer) => offer.category === activeCategory);
  }, [activeCategory]);

  const featuredOffer = useMemo(
    () => filteredOffers.find((offer) => offer.featured) ?? filteredOffers[0],
    [filteredOffers],
  );

  const regularOffers = useMemo(
    () => filteredOffers.filter((offer) => offer.name !== featuredOffer?.name),
    [featuredOffer, filteredOffers],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <StickyHeader />

      <main>
        <section id="inicio" className="hero-section">
          <div className="dm-container grid items-center gap-10 pb-14 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-36">
            <Reveal className="space-y-7">
              <div className="space-y-4">
                <p className="section-eyebrow">Panadería · Pastelería · Charcutería</p>
                <h1 className="font-display text-balance text-5xl leading-tight md:text-6xl lg:text-7xl">
                  Pan recién hecho, dulces de casa y charcutería para compartir
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                  En Panadería y Pastelería Don Manuel C.A. encuentras panadería diaria,
                  pastelería, café, charcutería, embutidos y combos especiales para tu mesa.
                </p>
              </div>

              <div className="flex min-h-14 items-center gap-3 rounded-lg border border-border/70 bg-card/80 px-4 py-3 shadow-soft backdrop-blur-sm md:max-w-max">
                <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Hoy</span>
                <span className="font-display text-2xl text-primary transition-all duration-500">
                  {rotatingWords[wordIndex]}
                </span>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="lg">
                  <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
                    <MessageCircle />
                    Pedir por WhatsApp
                  </a>
                </Button>
                <Button asChild variant="warm" size="lg">
                  <a href="#combos">
                    Ver combos de hoy
                    <ChevronRight />
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Consulta disponibilidad del día por WhatsApp.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="hero-image-shell group">
                <img
                  src={gallery[0].image}
                  alt={gallery[0].alt}
                  width={1920}
                  height={1080}
                  className="hero-image"
                />
                <div className="hero-image-badge">
                  <span className="font-display text-xl">Hecho con sazón casera</span>
                  <p className="text-sm text-muted-foreground">Pan, dulces, café y opciones para compartir cada día.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section aria-label="Productos destacados en movimiento" className="ticker-wrap">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span key={`${item}-${index}`} className="ticker-item">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="favoritos" className="section-space">
          <div className="dm-container">
            <Reveal>
              <SectionHeading
                eyebrow="Preferidos del día"
                title="Los favoritos de Don Manuel"
                description="Una selección pensada para antojos diarios, desayunos prácticos y compras que resuelven la mesa con sabor.
                "
              />
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {favorites.map((item, index) => (
                <Reveal key={item.name} delay={index * 70}>
                  <FavoriteCard item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="combos" className="section-space section-band">
          <div className="dm-container">
            <Reveal>
              <SectionHeading
                eyebrow="Pedidos rápidos"
                title="Combos y ofertas del día"
                description="Una vitrina pensada para vender: combos visibles, filtros rápidos y llamadas a la acción directas para cerrar pedidos por WhatsApp."
              />
            </Reveal>

            <Reveal delay={80}>
              <div className="offers-shell">
                <div className="offers-toolbar">
                  <div>
                    <p className="section-eyebrow">Filtra y resuelve rápido</p>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                      Explora por categoría y encuentra la mejor opción del día para desayunos, meriendas o reuniones.
                    </p>
                  </div>
                  <div className="filter-rail" role="tablist" aria-label="Filtrar combos por categoría">
                    {offerCategories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        role="tab"
                        aria-selected={activeCategory === category}
                        className={activeCategory === category ? "filter-chip is-active" : "filter-chip"}
                        onClick={() => setActiveCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {featuredOffer ? (
                  <Reveal delay={120}>
                    <div className="featured-offer-stage">
                      <div className="featured-offer-copy">
                        <p className="section-eyebrow">Oferta del día</p>
                        <h3 className="font-display text-3xl md:text-5xl">{featuredOffer.name}</h3>
                        <p className="text-base leading-7 text-muted-foreground md:text-lg">
                          {featuredOffer.description}
                        </p>
                        <div className="featured-offer-stats">
                          <div className="featured-stat">
                            <span className="featured-stat-label">Categoría</span>
                            <span className="featured-stat-value">{featuredOffer.category}</span>
                          </div>
                          <div className="featured-stat">
                            <span className="featured-stat-label">Precio</span>
                            <span className="featured-stat-value">{featuredOffer.price}</span>
                          </div>
                          <div className="featured-stat">
                            <span className="featured-stat-label">Incluye</span>
                            <span className="featured-stat-value">{featuredOffer.includes.length} productos</span>
                          </div>
                        </div>
                      </div>
                      <OfferCard offer={featuredOffer} featured />
                    </div>
                  </Reveal>
                ) : null}

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {regularOffers.map((offer, index) => (
                    <Reveal key={offer.name} delay={index * 80}>
                      <OfferCard offer={offer} />
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="menu" className="section-space">
          <div className="dm-container">
            <Reveal>
              <SectionHeading
                eyebrow="Selección visible"
                title="Menú rápido"
                description="Todo lo esencial de Don Manuel presentado como una carta visual cálida, fácil de recorrer y lista para consultar por WhatsApp."
              />
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {quickMenu.map((group, index) => (
                <Reveal key={group.category} delay={index * 60}>
                  <MenuCategory category={group.category} items={group.items} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space section-band-soft">
          <div className="dm-container grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <div className="space-y-5">
                <SectionHeading
                  eyebrow="Experiencia de marca"
                  title="Hecho para acompañar tu mesa todos los días"
                  description="En Panadería y Pastelería Don Manuel C.A. trabajamos cada día para ofrecer productos frescos, sabrosos y pensados para la mesa venezolana. Desde el pan de todos los días hasta dulces, café, charcutería y combos especiales, queremos ser ese lugar práctico y confiable al que siempre puedes volver."
                />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {values.map((value) => (
                  <div key={value} className="value-card">
                    <span className="value-dot" />
                    <p className="font-display text-2xl">{value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="whatsapp" className="section-space">
          <div className="dm-container">
            <Reveal>
              <SectionHeading
                eyebrow="Pedido directo"
                title="Pide fácil por WhatsApp"
                description="Sin formularios ni vueltas: revisa, pregunta y confirma tu pedido directo con el equipo de Don Manuel."
                align="center"
              />
            </Reveal>
            <div className="grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
                <Reveal key={step} delay={index * 80}>
                  <div className="step-card">
                    <div className="step-index">0{index + 1}</div>
                    <p className="font-display text-2xl text-foreground">{step}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space section-band">
          <div className="dm-container">
            <Reveal>
              <SectionHeading
                eyebrow="Galería fresca"
                title="Mira lo nuevo del día"
                description="Imágenes listas para reemplazar por fotos reales del negocio, manteniendo una presentación premium desde el primer momento."
                action={
                  <Button asChild variant="warm">
                    <a href={brand.instagram} target="_blank" rel="noreferrer">
                      <Instagram />
                      Ver Instagram
                    </a>
                  </Button>
                }
              />
            </Reveal>
            <div className="gallery-grid">
              {gallery.map((item, index) => (
                <Reveal key={item.alt} delay={index * 60}>
                  <div className="gallery-card image-zoom">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="ubicacion" className="section-space">
          <div className="dm-container">
            <Reveal>
              <div className="location-panel">
                <div className="space-y-4">
                  <p className="section-eyebrow">Visítanos</p>
                  <h2 className="font-display text-4xl md:text-5xl">Visítanos</h2>
                  <p className="text-lg leading-8 text-muted-foreground">
                    Acércate a Don Manuel para resolver desayunos, meriendas, reuniones o compras del día con el sabor de siempre.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="info-card">
                    <MapPin className="size-5 text-primary" />
                    <div>
                      <p className="info-label">Dirección</p>
                      <p className="info-value">{brand.location}</p>
                    </div>
                  </div>
                  <div className="info-card">
                    <Clock3 className="size-5 text-primary" />
                    <div>
                      <p className="info-label">Horario</p>
                      <p className="info-value">{brand.hours}</p>
                    </div>
                  </div>
                  <div className="info-card">
                    <MessageCircle className="size-5 text-primary" />
                    <div>
                      <p className="info-label">WhatsApp</p>
                      <p className="info-value">{brand.whatsappDisplay}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="warm" size="lg">
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer">
                      <MapPin />
                      Cómo llegar
                    </a>
                  </Button>
                  <Button asChild variant="hero" size="lg">
                    <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
                      <MessageCircle />
                      Pedir por WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer-shell">
        <div className="dm-container grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-4">
            <div>
              <p className="font-display text-3xl">Don Manuel</p>
              <p className="text-sm text-muted-foreground">{brand.tagline}</p>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Panadería y Pastelería Don Manuel C.A. acompaña la mesa venezolana con pan fresco,
              dulces, café, charcutería y combos listos para pedir por WhatsApp.
            </p>
          </div>

          <div className="space-y-3">
            <p className="footer-title">Contacto</p>
            <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer" className="footer-link">
              {brand.whatsappDisplay}
            </a>
            <a href={brand.instagram} target="_blank" rel="noreferrer" className="footer-link">
              Instagram
            </a>
          </div>

          <div className="space-y-3">
            <p className="footer-title">Navegación</p>
            {offerCategories.slice(0, 4).map((item) => (
              <a key={item} href={item === "Todos" ? "#inicio" : `#${item === "Charcutería" ? "menu" : "combos"}`} className="footer-link">
                {item === "Todos" ? "Inicio" : item}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <WhatsAppFab />
    </div>
  );
}
