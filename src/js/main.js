// src/js/main.js

import { podcasts, newPodcast, newPodcast2 } from "./podcasts.js";
import { generadorPlayer, generadorCards } from "./generadorCards.js";

// Seleccionar elementos del DOM
const parentElement = document.querySelector("[data-indicados]");
const tarjetas = document.querySelector("[data-tarjetas]");
const btnGuardar = document.querySelector("[data-guardados]");

// Agregar nuevos podcasts
podcasts.unshift(newPodcast);
podcasts.push(newPodcast2);

// FUNCIONES para localStorage
const guardarLocalStorage = () => {
  localStorage.setItem("podcasts", JSON.stringify(podcasts));
};

const cargarLocalStorage = () => {
  const data = localStorage.getItem("podcasts");
  if (data) {
    const datosParseados = JSON.parse(data);
    datosParseados.forEach((podLocal) => {
      const podcastOriginal = podcasts.find((p) => p.id === podLocal.id);
      if (podcastOriginal) {
        podcastOriginal.saved = podLocal.saved;
      }
    });
  }
};

// Función para renderizar una lista de podcasts
const renderizarPodcasts = (lista) => {
  parentElement.innerHTML = "";
  lista.forEach((podcast) => {
    const card = generadorCards(podcast);

    // Agregar evento click a la estrella en cada tarjeta
    const starElement = card.querySelector("i.fa-star");
    if (starElement) {
      starElement.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleGuardarPodcast(podcast.id, starElement);
      });
    }

    parentElement.appendChild(card);
  });
};

// Función para alternar el guardado de un podcast
const toggleGuardarPodcast = (idPodcast, starElement) => {
  const podcast = podcasts.find((p) => p.id === idPodcast);
  if (podcast) {
    podcast.saved = podcast.saved === "true" ? "false" : "true";

    // Cambiar ícono visualmente
    if (podcast.saved === "true") {
      starElement.classList.remove("fa-regular");
      starElement.classList.add("fa-solid");
    } else {
      starElement.classList.remove("fa-solid");
      starElement.classList.add("fa-regular");
    }

    guardarLocalStorage();
  }
};

// Cargar datos antes de pintar
cargarLocalStorage();

// Pintar tarjetas principales
renderizarPodcasts(podcasts);

// Crear players
const players = podcasts.map(({ image, subtitle }) =>
  generadorPlayer({ image, subtitle })
);
tarjetas.append(...players);

// ESTADO DEL BOTÓN para alternar vista
let mostrandoGuardados = false;

// EVENTO - Botón Guardados / Ver Todos
if (btnGuardar) {
  btnGuardar.addEventListener("click", () => {
    mostrandoGuardados = !mostrandoGuardados;

    if (mostrandoGuardados) {
      // Mostrar solo guardados
      const guardados = podcasts.filter((pod) => pod.saved === "true");
      renderizarPodcasts(guardados);
    } else {
      // Mostrar todos
      renderizarPodcasts(podcasts);
    }
  });
}
