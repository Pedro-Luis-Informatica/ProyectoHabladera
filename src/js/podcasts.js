// crear el arreglo de objetos
const podcasts = [
  {
    id: 1,
    title: "TechGuide: Storytelling con datos",
    subtitle: "Hipters Punto Tech",
    image:
      "./src/imagenes/Imagens/hipsters-punto-tech/hipsters-punto-tech-techguide.png",
    saved: false,
    category: "Data Science",
  },
  {
    id: 2,
    title: "Fundamentos de Ciberseguridad",
    subtitle: "Hipters Punto Tech",
    image:
      "./src/imagenes/Imagens/hipsters-punto-tech/hipsters-punto-tech-ciberseguridad-1.png",
    saved: false,
    category: "Ciberseguridad",
  },
  {
    id: 3,
    title: "Caso Farfetch: Front-End",
    subtitle: "Hipster Punto Tech",
    saved: "true",
    category: "Front-End",
    image:
      "./src/imagenes/Imagens/indicados-para-ti/Caso-Farfetch-Front-End.png",
  },
  {
    id: 4,
    title: "Inteligencia Artificial Aplicada",
    subtitle: "Hipster Punto Tech",
    saved: "false",
    category: "IA",
    image:
      "./src/imagenes/Imagens/indicados-para-ti/Inteligencia-Artificial-Aplicada.png",
  },
  {
    id: 5,
    title: "UX vs UI",
    category: "UX",
    subtitle: "Layers Punto Tech",
    saved: "true",
    image: "./src/imagenes/Imagens/indicados-para-ti/ux-vs-ui.png",
  },
  {
    id: 6,
    title: "Actualizaciones Figma",
    subtitle: "Layers Punto Tech",
    saved: "false",
    category: "UX",
    image:
      "./src/imagenes/Imagens/indicados-para-ti/Actualizaciones-Figma-2023.png",
  },
  {
    id: 7,
    title: "Desarrollador Java en Granada",
    subtitle: "Dev Sin Fronteras",
    saved: "true",
    category: "Back-End",
    image: "./src/imagenes/Imagens/dev-sin-fronteras/dev-sin-fronteras-99.png",
  },
  {
    id: 8,
    title: "Líder de QA en la Ciudad de Guatemala",
    subtitle: "Dev Sin Fronteras",
    saved: "false",
    category: "QA",
    image: "./src/imagenes/Imagens/dev-sin-fronteras/dev-sin-fronteras-94.png",
  },
];

const newPodcast = {
  title: "Nuevo Podcast",
  subtitle: "Descripción del nuevo podcast",
  image: "https://example.com/new-podcast.jpg",
  saved: "false",
};

const newPodcast2 = {
  title: "Nuevo Podcast 2",
  subtitle: "Descripción del nuevo podcast",
  image: "https://example.com/new-podcast.jpg",
  saved: "false",
};

export { podcasts, newPodcast, newPodcast2 };
