import { generadorCards } from "./generadorCards.js";

const parentElement = document.querySelector("[data-indicados]");

let podcastsGuardados = JSON.parse(localStorage.getItem("podcasts")) || [];

const mostrarTarjetasGuardadas = () => {
  parentElement.innerHTML = "";

  const guardados = podcastsGuardados.filter(
    (podcast) => podcast.saved === true || podcast.saved === "true"
  );

  guardados.forEach((podcast) => {
    const card = generadorCards(podcast, "../");

    const starElement = card.querySelector("i.fa-star");
    if (starElement) {
      starElement.classList.remove("fa-regular");
      starElement.classList.add("fa-solid");

      starElement.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleGuardarPodcast(podcast.id);
      });
    }

    parentElement.appendChild(card);
  });
};

const toggleGuardarPodcast = (idPodcast) => {
  const index = podcastsGuardados.findIndex((p) => p.id === idPodcast);

  if (index !== -1) {
    podcastsGuardados[index].saved = false;
    localStorage.setItem("podcasts", JSON.stringify(podcastsGuardados));
    mostrarTarjetasGuardadas();
  }
};

mostrarTarjetasGuardadas();
