import { senyores } from "../datos/senyores.js";

const principal = document.querySelector(".principal");

for (const { nombre, foto, profesion, estado, twitter } of senyores) {
  const senyorElemento = document
    .querySelector(".senyor-molde")
    .cloneNode(true);
  senyorElemento.classList.remove("senyor-molde");
  const nombreElemento = senyorElemento.querySelector(".nombre-senyor");
  nombreElemento.textContent = nombre;
  const imagen = senyorElemento.querySelector(".avatar > img");
  imagen.src = `img/${foto}`;

  principal.append(senyorElemento);

  const senyorProfesion = senyorElemento.querySelector(".profesionSenyor");
  senyorProfesion.textContent = profesion;

  const senyorEstado = senyorElemento.querySelector(".estadoSenyor");
  senyorProfesion.textContent = estado;
}
