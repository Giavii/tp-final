"use strict";
const btn1 = document.getElementById("button1") as HTMLButtonElement;
const p1 = document.getElementById("para1") as HTMLParagraphElement;
btn1.addEventListener("click", tapado);

function tapado(): void {
    if (p1.classList.contains("oculto")) {
      p1.classList.remove("oculto");
      btn1.textContent = "Ver Menos";
    } else {
      p1.classList.add("oculto");
      btn1.textContent = "Ver Más";
    }
  }  