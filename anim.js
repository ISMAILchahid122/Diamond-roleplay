let box = document.getElementById("box");
let pos = 0;

function anima() {
  if (pos < 300) {
    pos++;
    box.style.left = pos + "px";
    requestAnimationFrame(anima);
  }
}

document.querySelector("button").addEventListener("click", anima);