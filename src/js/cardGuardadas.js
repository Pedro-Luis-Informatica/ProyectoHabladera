import { generadorCards } from "./generadorCards.js";

const parentElement = document.querySelector("[data-indicados]");

// Leer los podcasts desde localStorage
let podcastsGuardados = JSON.parse(localStorage.getItem("podcasts")) || [];

// Mostrar solo los guardados
const mostrarTarjetasGuardadas = () => {
  parentElement.innerHTML = ""; // Limpiar primero

  const guardados = podcastsGuardados.filter(
    (podcast) => podcast.saved === "true"
  );

  guardados.forEach((podcast) => {
    const card = generadorCards(podcast);

    // Agregar evento a la estrella dentro de cada tarjeta
    const starElement = card.querySelector("i.fa-star");
    if (starElement) {
      starElement.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleGuardarPodcast(podcast.id); // Ahora usamos id
      });
    }

    parentElement.appendChild(card);
  });
};

// Función para cambiar el estado guardado/no guardado
const toggleGuardarPodcast = (idPodcast) => {
  const index = podcastsGuardados.findIndex((p) => p.id === idPodcast);

  if (index !== -1) {
    podcastsGuardados[index].saved = "false";
    localStorage.setItem("podcasts", JSON.stringify(podcastsGuardados));
    mostrarTarjetasGuardadas();
  }
};

// Ejecutar al cargar
mostrarTarjetasGuardadas();
