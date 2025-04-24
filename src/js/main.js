import { podcasts, newPodcast, newPodcast2 } from "./podcasts.js";
import { generadorPlayer, generadorCards } from "./generadorCards.js";

const parentElement = document.querySelector("[data-indicados]");
const tarjetas = document.querySelector("[data-tarjetas]");
const btnGuardar = document.querySelector("[data-guardados]");

console.log(podcasts);
