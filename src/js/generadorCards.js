// funcion para generar nuestras tarjetas de podcasts
// import { podcasts } from "./podcasts";

/*
<li class="tarjeta">
            <img
              class="tarjeta__imagen"
              src="./src/imagenes/Imagens/hipsters-punto-tech/hipsters-punto-tech-techguide.png"
              alt="Hipsters Punto Tech - TechGuide: Storytelling con datos"
            />
            <h3 class="tarjeta__titulo">TechGuide: Storytelling con datos</h3>
            <h4 class="tarjeta__subtitulo">Hipsters Punto Tech</h4>
            <i class="fa-regular fa-star"></i>
          </li>
*/

const generadorCards = (podcast) => {
  const cardElement = document.createElement("li");
  cardElement.classList.add("tarjeta");

  const imgElemnt = document.createElement("img");
  imgElemnt.classList.add("tarjeta__imagen");
  imgElemnt.src = podcast.imagen;
  imgElemnt.alt = podcast.title;

  const titleElement = document.createElement("h3");
  titleElement.classList.add("tarjeta__titulo");
  titleElement.textContent = podcast.title;

  const subtitleElement = document.createElement("h4");
  subtitleElement.classList.add("tarjeta__subtitulo");
  subtitleElement.textContent = podcast.subtitle;

  const startElement = document.createElement("i");
  podcast.saved === "true"
    ? startElement.classList.add("fa-solid", "fa-start")
    : startElement.classList.add("fa-regular", "fa-start");

  cardElement.appendChild(imgElement);
  cardElement.appendChild(titleElement);
  cardElement.appendChild(subtitleElement);
  cardElement.appendChild(starElement);

  return cardElement;
};

/*
<li>
            <a class="tarjeta" href="#">
              <img
                class="tarjeta__imagen"
                src="./src/imagenes/Imagens/reproducidos recientemente/hipter-fuera-de-control.png"
                alt="Hipsters Fuera de Control"
              />
              <h3 class="tarjeta__titulo">Hipsters Punto Tech</h3>
              <div class="tarjeta__player"></div>
              <form class="tarjeta__boton" action=".">
                <button aria-label="Play Podcast">
                  <img
                    src="./src/imagenes/Iconos/boton-play.svg"
                    alt="Icono de Play"
                  />
                </button>
              </form>
            </a>
          </li>
*/
const generadorPlayer = (podcast) => {
  const cardElement = document.createElement("li");

  const anchorElement = document.createElement("a");
  anchorElement.classList.add("tarjeta");
  anchorElement.href = "#";

  const imgElement = document.createElement("img");
  imgElement.classList.add("tarjeta__imagen");
  imgElement.src = podcast.imagen;
  imgElement.alt = podcast.subtitle;

  const subtitleElement = document.createElement("h3");
  subtitleElement.classList.add("tarjeta__titulo");
  subtitleElement.textContent = podcast.subtitle;

  const playerElement = document.createElement("div");
  playerElement.classList.add("tarjeta__player");

  const formElement = document.createElement("form");
  formElement.classList.add("tarjeta__boton");
  formElement.action = ".";

  const buttonELement = document.createElement("button");
  buttonELement.ariaLabel = "Play Podcasts";

  const playIconElement = document.createElement("img");
  playIconElement.src = "./src/imagenes/Iconos/boton-play.svg";
  playIconElement.alt = "Icono de Play";

  buttonELement.appendChild(playIconElement);
  formElement.appendChild(buttonELement);
  anchorElement.appendChild(imgElement);
  anchorElement.appendChild(subtitleElement);
  anchorElement.appendChild(playerElement);
  anchorElement.appendChild(formElement);
  cardElement.appendChild(anchorElement);

  return cardElement;
};

export { generadorPlayer, generadorCards };
