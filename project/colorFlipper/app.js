const colors = ["#177d91", "#899091", "#add8de", "#d41555"];
const btn = document.getElementById("simple-button");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
  const randomNumber = getRandom();
  document.querySelector(".main").style.background = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandom() {
  return Math.floor(Math.random() * colors.length);
}
