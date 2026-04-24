import { brand } from "@/data/offers";

export const defaultWhatsAppMessage =
  "Hola, Panadería y Pastelería Don Manuel C.A. Quiero hacer un pedido o consultar las ofertas disponibles.";

export function buildWhatsAppLink(message = defaultWhatsAppMessage) {
  return `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildOfferWhatsAppLink(offerName: string) {
  return buildWhatsAppLink(
    `Hola, Panadería Don Manuel. Quiero consultar el ${offerName}. ¿Está disponible hoy?`,
  );
}
