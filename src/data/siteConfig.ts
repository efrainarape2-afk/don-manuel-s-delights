export const siteConfig = {
  businessName: "Panadería y Pastelería Don Manuel C.A.",
  shortName: "Don Manuel",
  tagline: "Panadería · Pastelería · Charcutería",

  // Cuando tengas el logo real, súbelo a:
  // public/logo/logo-don-manuel.png
  // y cambia este valor a "/logo/logo-don-manuel.png"
  // Si queda vacío, la web debe mostrar el texto “Don Manuel”.
  logoPath: "",

  heroTitle: "Pan recién hecho, dulces de casa y charcutería para compartir",

  heroDescription:
    "En Panadería y Pastelería Don Manuel C.A. encuentras panadería diaria, pastelería, café, charcutería, embutidos y combos especiales con una atención cercana y directa por WhatsApp.",

  whatsappDisplay: "0424.592.44.87",
  whatsappNumber: "584245924487",

  instagram: "https://www.instagram.com/panaderia_donmanuel.c.a",

  location: "Urbanización Terepaima, en la avenida, Cabudare, Lara, Venezuela",
  hours: "Horario próximamente",
  mapsUrl: "https://www.google.com/maps?q=10.022582,-69.272360",

  // Reemplazar con tu dominio real cuando esté configurado en Cloudflare Pages.
  siteUrl: "https://donmanuel.pages.dev",

  defaultWhatsAppMessage:
    "Hola, Panadería y Pastelería Don Manuel C.A. Quiero hacer un pedido o consultar las ofertas disponibles.",

  seo: {
    title:
      "Panadería y Pastelería Don Manuel C.A. | Pan, dulces, charcutería y combos",
    description:
      "Panadería y Pastelería Don Manuel C.A. ofrece pan recién hecho, pastelería, charcutería, embutidos, café y combos especiales. Haz tu pedido por WhatsApp.",
    ogTitle: "Don Manuel | Panadería, pastelería, charcutería y combos",
    ogDescription:
      "Pan recién hecho, dulces de casa, café, charcutería y combos especiales para pedir directo por WhatsApp.",
    ogImage: "/images/og-don-manuel.jpg",
  },
};

export const brand = {
  name: siteConfig.businessName,
  shortName: siteConfig.shortName,
  tagline: siteConfig.tagline,
  logoPath: siteConfig.logoPath,
  whatsappDisplay: siteConfig.whatsappDisplay,
  whatsappNumber: siteConfig.whatsappNumber,
  instagram: siteConfig.instagram,
  location: siteConfig.location,
  hours: siteConfig.hours,
  mapsUrl: siteConfig.mapsUrl,
};

export function absoluteUrl(path: string) {
  if (!path) return siteConfig.siteUrl;
  if (/^https?:\/\//i.test(path)) return path;

  return `${siteConfig.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
