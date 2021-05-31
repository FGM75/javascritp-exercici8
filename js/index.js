import { senyores } from "../datos/senyores.js";

const principal = document.querySelector(".principal");

for (const { nombre, foto, profesion, estado, twitter, marcado } of senyores) {
  const senyorElemento = document
    .querySelector(".senyor-molde")
    .cloneNode(true);
  senyorElemento.classList.remove("senyor-molde");
  const nombreElemento = senyorElemento.querySelector(".nombre-senyor");
  nombreElemento.textContent = nombre;
  const imagen = senyorElemento.querySelector(".avatar > img");
  imagen.src = `img/${foto}`;

  const senyorProfesion = senyorElemento.querySelector(".profesionSenyor");
  senyorProfesion.textContent = profesion;

  const senyorEstado = senyorElemento.querySelector(".estadoSenyor");
  senyorEstado.textContent = estado;

  const twitterSenyor = senyorElemento.querySelector(".twitterSenyor");
  twitterSenyor.textContent = twitter;

  const validados = senyorElemento.querySelector(".icono");
  if (marcado) {
    validados.classList.add("iconocheck");
    imagen.classList.add("imagenVueltas");
  }
  const primeraLetra = senyorElemento.querySelector(".inicial");

  principal.append(senyorElemento);
}
