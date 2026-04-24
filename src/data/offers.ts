import breadImage from "@/assets/don-manuel-bread.jpg";
import cakesImage from "@/assets/don-manuel-cakes.jpg";
import charcuterieImage from "@/assets/don-manuel-charcuterie.jpg";
import coffeeImage from "@/assets/don-manuel-coffee.jpg";
import pastriesImage from "@/assets/don-manuel-pastries.jpg";

export type OfferCategory =
  | "Panadería"
  | "Pastelería"
  | "Charcutería"
  | "Embutidos"
  | "Desayunos"
  | "Especiales";

export type OfferItem = {
  name: string;
  category: OfferCategory;
  badge: string;
  description: string;
  includes: string[];
  price: string;
  image: string;
  alt: string;
  featured?: boolean;
};

export const offerCategories: Array<OfferCategory | "Todos"> = [
  "Todos",
  "Panadería",
  "Pastelería",
  "Charcutería",
  "Embutidos",
  "Desayunos",
  "Especiales",
];

export const offers: OfferItem[] = [
  {
    name: "Combo Desayuno Don Manuel",
    category: "Desayunos",
    badge: "Más pedido",
    description:
      "Una opción práctica para comenzar el día con panadería fresca y café.",
    includes: ["Cachitos", "Café", "Dulce del día"],
    price: "Consultar precio",
    image: coffeeImage,
    alt: "Combo de desayuno con café, cachitos y dulce del día",
    featured: true,
  },
  {
    name: "Combo Pan Familiar",
    category: "Panadería",
    badge: "Familiar",
    description:
      "Selección de panes frescos para acompañar la mesa de la casa.",
    includes: ["Pan francés", "Pan dulce", "Pan campesino"],
    price: "Consultar precio",
    image: breadImage,
    alt: "Selección de panes frescos para combo familiar",
    featured: false,
  },
  {
    name: "Combo Charcutero",
    category: "Charcutería",
    badge: "Oferta del día",
    description:
      "Queso, jamón, embutidos y pan para compartir o preparar en casa.",
    includes: ["Queso", "Jamón", "Embutidos", "Pan"],
    price: "Consultar precio",
    image: charcuterieImage,
    alt: "Combo charcutero con queso, jamón, embutidos y pan",
    featured: true,
  },
  {
    name: "Combo Merienda Dulce",
    category: "Pastelería",
    badge: "Dulce",
    description:
      "Dulces variados, galletas o porciones de torta para acompañar con café.",
    includes: ["Dulces variados", "Galletas", "Porciones de torta"],
    price: "Consultar precio",
    image: pastriesImage,
    alt: "Combo de merienda dulce con postres variados",
    featured: false,
  },
  {
    name: "Combo Embutidos",
    category: "Embutidos",
    badge: "Nuevo",
    description:
      "Selección de embutidos para desayunos, reuniones o compras de la semana.",
    includes: ["Embutidos seleccionados", "Opciones para compartir"],
    price: "Consultar precio",
    image: charcuterieImage,
    alt: "Selección de embutidos para combo semanal",
    featured: false,
  },
  {
    name: "Combo Reunión",
    category: "Especiales",
    badge: "Especial",
    description:
      "Pan, charcutería, dulces y opciones saladas para compartir.",
    includes: ["Pan", "Charcutería", "Dulces", "Opciones saladas"],
    price: "Consultar precio",
    image: cakesImage,
    alt: "Combo especial para reunión con pan, dulces y charcutería",
    featured: false,
  },
];
