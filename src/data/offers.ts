import breadImage from "@/assets/don-manuel-bread.jpg";
import cakesImage from "@/assets/don-manuel-cakes.jpg";
import charcuterieImage from "@/assets/don-manuel-charcuterie.jpg";
import coffeeImage from "@/assets/don-manuel-coffee.jpg";
import heroImage from "@/assets/don-manuel-hero.jpg";
import pastriesImage from "@/assets/don-manuel-pastries.jpg";

export const brand = {
  name: "Panadería y Pastelería Don Manuel C.A.",
  shortName: "Don Manuel",
  tagline: "Panadería · Pastelería · Charcutería",
  whatsappDisplay: "0424.592.44.87",
  whatsappNumber: "584245924487",
  instagram: "https://www.instagram.com/panaderia_donmanuel.c.a",
  location: "Agregar dirección exacta",
  hours: "Agregar horario de atención",
};

export type FavoriteItem = {
  name: string;
  description: string;
  image: string;
  alt: string;
};

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

export const rotatingWords = [
  "Pan caliente",
  "Dulces frescos",
  "Charcutería",
  "Combos familiares",
];

export const tickerItems = [
  "Pan caliente",
  "Cachitos",
  "Café",
  "Tortas",
  "Dulces",
  "Quesos",
  "Jamones",
  "Embutidos",
  "Combos del día",
];

export const favorites: FavoriteItem[] = [
  {
    name: "Cachitos",
    description: "Recién salidos del horno, dorados y perfectos para comenzar el día.",
    image: coffeeImage,
    alt: "Café y cachitos servidos en una mesa cálida de panadería",
  },
  {
    name: "Pan recién horneado",
    description: "Panes de todos los días con textura suave, corteza dorada y aroma casero.",
    image: breadImage,
    alt: "Selección de panes frescos sobre una bandeja de madera",
  },
  {
    name: "Dulces variados",
    description: "Pequeños antojos y postres para compartir o acompañar la tarde.",
    image: pastriesImage,
    alt: "Vitrina con dulces variados y repostería premium",
  },
  {
    name: "Tortas",
    description: "Opciones clásicas y especiales para celebraciones o gusto del día.",
    image: cakesImage,
    alt: "Variedad de tortas y porciones decoradas en exhibición",
  },
  {
    name: "Café",
    description: "Aroma intenso y acompañantes frescos para una pausa práctica y sabrosa.",
    image: coffeeImage,
    alt: "Taza de café caliente con pasteles recién hechos",
  },
  {
    name: "Charcutería",
    description: "Selecciones para desayunos, reuniones y meriendas con sabor casero.",
    image: charcuterieImage,
    alt: "Tabla con quesos, jamones y charcutería en mostrador",
  },
  {
    name: "Quesos y jamones",
    description: "Ingredientes ideales para resolver la mesa diaria o preparar algo especial.",
    image: charcuterieImage,
    alt: "Quesos y jamones frescos exhibidos en una panadería gourmet",
  },
  {
    name: "Embutidos",
    description: "Variedad lista para llevar, combinar y disfrutar en casa o en reuniones.",
    image: heroImage,
    alt: "Mesa con embutidos, panes y opciones para compartir",
  },
];

export const offerCategories = [
  "Todos",
  "Panadería",
  "Pastelería",
  "Charcutería",
  "Embutidos",
  "Desayunos",
  "Especiales",
] as const;

export type OfferFilter = (typeof offerCategories)[number];

export const offers: OfferItem[] = [
  {
    name: "Combo Desayuno Don Manuel",
    category: "Desayunos",
    badge: "Más pedido",
    description: "Cachitos, café y opción dulce para comenzar el día.",
    includes: ["Cachitos", "Café", "Dulce del día"],
    price: "Consultar precio",
    image: coffeeImage,
    alt: "Combo de desayuno con café, cachitos y dulce del día",
  },
  {
    name: "Combo Pan Familiar",
    category: "Panadería",
    badge: "Familiar",
    description: "Selección de panes frescos para la mesa de la casa.",
    includes: ["Pan francés", "Pan dulce", "Pan campesino"],
    price: "Consultar precio",
    image: breadImage,
    alt: "Selección de panes familiares recién horneados",
  },
  {
    name: "Combo Charcutero",
    category: "Charcutería",
    badge: "Oferta del día",
    description: "Queso, jamón, embutidos y pan para compartir o preparar sándwiches.",
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
    description: "Dulces variados, galletas o porciones de torta para acompañar con café.",
    includes: ["Dulces variados", "Galletas", "Porciones de torta"],
    price: "Consultar precio",
    image: pastriesImage,
    alt: "Combo dulce con postres variados y porciones de torta",
  },
  {
    name: "Combo Embutidos",
    category: "Embutidos",
    badge: "Nuevo",
    description: "Selección de embutidos para desayunos, reuniones o compras de la semana.",
    includes: ["Embutidos seleccionados"],
    price: "Consultar precio",
    image: heroImage,
    alt: "Selección de embutidos y panes listos para llevar",
  },
  {
    name: "Combo Reunión",
    category: "Especiales",
    badge: "Especial",
    description: "Pan, charcutería, dulces y opciones saladas para compartir.",
    includes: ["Pan", "Charcutería", "Dulces", "Opciones saladas"],
    price: "Consultar precio",
    image: heroImage,
    alt: "Mesa surtida con pan, dulces y charcutería para compartir",
  },
];

export const quickMenu = [
  {
    category: "Panadería",
    items: ["Pan francés", "Pan campesino", "Pan dulce", "Cachitos", "Golfeados"],
  },
  {
    category: "Pastelería",
    items: ["Porciones de torta", "Dulces surtidos", "Galletas", "Milhojas", "Tartaletas"],
  },
  {
    category: "Charcutería",
    items: ["Quesos", "Jamones", "Tablas para compartir", "Sándwiches", "Opciones saladas"],
  },
  {
    category: "Café y desayunos",
    items: ["Café negro", "Café con leche", "Desayunos rápidos", "Combos matutinos", "Meriendas"],
  },
  {
    category: "Embutidos",
    items: ["Mortadela", "Jamón", "Salchichón", "Chorizos", "Selecciones del día"],
  },
  {
    category: "Dulces y tortas",
    items: ["Tortas completas", "Quesillos", "Brownies", "Ponqués", "Postres del día"],
  },
];

export const values = ["Frescura diaria", "Variedad para todos", "Atención cercana"];

export const steps = [
  "Elige tu producto o combo",
  "Escríbenos por WhatsApp",
  "Confirma disponibilidad y retira tu pedido",
];

export const gallery = [
  {
    image: heroImage,
    alt: "Mesa principal de Don Manuel con panes, dulces, café y charcutería",
  },
  {
    image: breadImage,
    alt: "Panes frescos recién horneados listos para la venta",
  },
  {
    image: pastriesImage,
    alt: "Dulces y tortas variadas en exhibición",
  },
  {
    image: charcuterieImage,
    alt: "Selección de charcutería con quesos y jamones",
  },
  {
    image: coffeeImage,
    alt: "Café servido con panadería fresca en ambiente cálido",
  },
  {
    image: cakesImage,
    alt: "Tortas y porciones dulces listas para compartir",
  },
];

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Favoritos", href: "#favoritos" },
  { label: "Combos", href: "#combos" },
  { label: "Charcutería", href: "#menu" },
  { label: "Menú", href: "#menu" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "WhatsApp", href: "#whatsapp" },
];
