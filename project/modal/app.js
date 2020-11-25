const openBtn = document.querySelector(".btn-container");
const hiddenBtn = document.querySelector(".close-button");
const modal = document.querySelector(".modal-overlay");

openBtn.addEventListener("click", function () {
  modal.classList.add("show-modal");
});

hiddenBtn.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});
