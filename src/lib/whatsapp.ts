import { siteConfig } from "@/data/siteConfig";

export function buildWhatsAppLink(message?: string) {
  const text = encodeURIComponent(message || siteConfig.defaultWhatsAppMessage);

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export function buildComboWhatsAppLink(comboName: string) {
  const message = `Hola, Panadería Don Manuel. Quiero consultar el ${comboName}. ¿Está disponible hoy?`;

  return buildWhatsAppLink(message);
}

export function buildLocationWhatsAppLink() {
  return buildWhatsAppLink(
    "Hola, Panadería Don Manuel. Quiero consultar la dirección para visitarlos."
  );
}
