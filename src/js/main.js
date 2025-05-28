import { podcasts, newPodcast, newPodcast2 } from "./podcasts.js";
import { generadorPlayer, generadorCards } from "./generadorCards.js";

const parentElement = document.querySelector("[data-indicados]");
const tarjetas = document.querySelector("[data-tarjetas]");
const btnGuardar = document.querySelector("[data-guardados]");

let maxId = Math.max(...podcasts.map((p) => p.id || 0));
newPodcast.id = ++maxId;
newPodcast2.id = ++maxId;

podcasts.unshift(newPodcast);
podcasts.push(newPodcast2);

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

const renderizarPodcasts = (lista) => {
  parentElement.innerHTML = "";
  lista.forEach((podcast) => {
    const card = generadorCards(podcast);

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

const toggleGuardarPodcast = (idPodcast, starElement) => {
  const podcast = podcasts.find((p) => p.id === idPodcast);
  if (podcast) {
    podcast.saved = !(podcast.saved === "true" || podcast.saved === true);

    if (podcast.saved === true || podcast.saved === "true") {
      starElement.classList.remove("fa-regular");
      starElement.classList.add("fa-solid");
    } else {
      starElement.classList.remove("fa-solid");
      starElement.classList.add("fa-regular");
    }

    guardarLocalStorage();
  }
};

cargarLocalStorage();

renderizarPodcasts(podcasts);

const players = podcasts.map(({ image, subtitle }) =>
  generadorPlayer({ image, subtitle })
);
tarjetas.append(...players);

let mostrandoGuardados = false;

if (btnGuardar) {
  btnGuardar.addEventListener("click", () => {
    mostrandoGuardados = !mostrandoGuardados;

    if (mostrandoGuardados) {
      const guardados = podcasts.filter(
        (pod) => pod.saved === true || pod.saved === "true"
      );
      renderizarPodcasts(guardados);
    } else {
      renderizarPodcasts(podcasts);
    }
  });
}
