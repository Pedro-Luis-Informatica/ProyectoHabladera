const generadorCards = (podcast) => {
  const cardElement = document.createElement("li");
  cardElement.classList.add("tarjeta");

  const imgElemnt = document.createElement("img");
  imgElemnt.classList.add("tarjeta__imagen");
  imgElemnt.src = podcast.image;
  imgElemnt.alt = podcast.title;

  const titleElement = document.createElement("h3");
  titleElement.classList.add("tarjeta__titulo");
  titleElement.textContent = podcast.title;

  const subtitleElement = document.createElement("h4");
  subtitleElement.classList.add("tarjeta__subtitulo");
  subtitleElement.textContent = podcast.subtitle;

  const startElement = document.createElement("i");
  podcast.saved === "true"
    ? startElement.classList.add("fa-solid", "fa-star")
    : startElement.classList.add("fa-regular", "fa-star");

  cardElement.appendChild(imgElemnt);
  cardElement.appendChild(titleElement);
  cardElement.appendChild(subtitleElement);
  cardElement.appendChild(startElement);

  return cardElement;
};

const generadorPlayer = (podcast) => {
  const cardElement = document.createElement("li");

  const anchorElement = document.createElement("a");
  anchorElement.classList.add("tarjeta");
  anchorElement.href = "#";

  const imgElement = document.createElement("img");
  imgElement.classList.add("tarjeta__imagen");
  imgElement.src = podcast.image;
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
  buttonELement.setAttribute("aria-label", "Play Podcasts");

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
