// anim.js
function moveBox() {
  const box = document.getElementById("box");
  let pos = 0;
  const id = setInterval(frame, 10);
  function frame() {
    if (pos >= 350) {
      clearInterval(id);
    } else {
      pos++;
      box.style.left = pos + "px";
    }
  }
}