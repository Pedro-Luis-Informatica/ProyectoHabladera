const getBasePath = () => {
  const path = window.location.pathname;
  return path.includes("paginas") || path.includes("pages") ? "./" : "../";
};

const resolveImagePath = (image, customBasePath) => {
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }
  const basePath =
    customBasePath !== undefined ? customBasePath : getBasePath();
  return `${basePath}${image.startsWith("../") ? image.substring(3) : image}`;
};

const generadorCards = ({ image, title, subtitle, saved }, customBasePath) => {
  const card = document.createElement("li");
  card.className = "tarjeta";

  const imagePath = resolveImagePath(image, customBasePath);
  card.innerHTML = `
    <img class="tarjeta__imagen" src="${imagePath}" alt="${title}">
    <h3 class="tarjeta__titulo">${title}</h3>
    <h4 class="tarjeta__subtitulo">${subtitle}</h4>
    <i class="${
      saved === "true" || saved === true ? "fa-solid" : "fa-regular"
    } fa-star"></i>
  `;
  return card;
};

const generadorPlayer = ({ image, subtitle }) => {
  const card = document.createElement("li");
  const imagePath = resolveImagePath(image);
  const basePath = getBasePath();

  card.innerHTML = `
    <a href="#" class="tarjeta">
      <img class="tarjeta__imagen" src="${imagePath}" alt="${subtitle}">
      <h3 class="tarjeta__titulo">${subtitle}</h3>
      <div class="tarjeta__player"></div>
      <form class="tarjeta__boton" action=".">
        <button aria-label="Play Podcasts">
          <img src="${basePath}src/imagenes/Iconos/boton-play.svg" alt="Icono de Play">
        </button>
      </form>
    </a>
  `;
  return card;
};

export { generadorPlayer, generadorCards };
