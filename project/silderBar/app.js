const toggle = document.querySelector(".siderbar-toggle");
const aside = document.querySelector(".aside-container");
const closeBtn = document.querySelector(".close-button");

toggle.addEventListener("click", function () {
  //   if (!aside.classList.contains("show-aside")) {
  //     aside.classList.add("hidden-aside");
  //   } else {
  //     aside.classList.remove("hidden-aside");
  //   }
  aside.classList.toggle("hidden-aside");
});

closeBtn.addEventListener("click", function () {
  aside.classList.add("hidden-aside");
});
