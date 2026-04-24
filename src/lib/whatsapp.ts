import { brand } from "@/data/offers";

export function buildWhatsAppLink(message?: string) {
  const defaultMessage =
    "Hola, Panadería y Pastelería Don Manuel C.A. Quiero hacer un pedido o consultar las ofertas disponibles.";

  const text = encodeURIComponent(message || defaultMessage);

  return `https://wa.me/${brand.whatsappNumber}?text=${text}`;
}

export function buildOfferWhatsAppLink(offerName: string) {
  return buildWhatsAppLink(
    `Hola, Panadería Don Manuel. Quiero consultar el ${offerName}. ¿Está disponible hoy?`
  );
}

export function buildComboWhatsAppLink(comboName: string) {
  return buildOfferWhatsAppLink(comboName);
}

export function buildLocationWhatsAppLink() {
  return buildWhatsAppLink(
    "Hola, Panadería Don Manuel. Quiero consultar la dirección para visitarlos."
  );
}
