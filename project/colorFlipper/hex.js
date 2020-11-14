const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("hex-button");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
  let colorType = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = getRandom();
    colorType += colors[randomNumber];
  }
  document.querySelector(".main").style.background = colorType;
  color.textContent = colorType;
});

function getRandom() {
  return Math.floor(Math.random() * colors.length);
}

const ul = document.getElementById("ul");
console.log(ul);
ul.addEventListener("click", function (e) {
  console.log(e);
});
