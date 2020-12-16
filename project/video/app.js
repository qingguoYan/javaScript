const video = document.querySelector(".video");
const btn = document.querySelector(".switch-btn");

btn.addEventListener("click", function () {
  console.log(btn.classList);
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

const preloader = document.querySelector(".preloader");
//load 事件会在所有资源加载完毕后执行，DOMContentLoaded事件会在dom元素加载完毕后执行
window.addEventListener("load", function () {
  console.log("加载完毕");
  preloader.classList.add("hide");
});
