const baseUrl =
  "https://www.fastmock.site/mock/56492fc5dc406b4cdfc84222b049f096/mock";
function request({ method = "get", url }) {
  url = baseUrl + url;
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.timeout = 10000;
    xhr.open(method, url, true);
    xhr.send();
    xhr.onload = function () {
      console.log(xhr.status);
      if (xhr.status === 200) {
        console.log(xhr.response);
        resolve(xhr.response);
      } else {
        console.log(
          `Error status:${status},Error statusText:${this.statusText}`
        );
      }
    };
    xhr.onerror = function () {
      reject("网络错误");
    };
  });
}
let currentItem = 0;
let reviews = [];
request({ method: "get", url: "./reviews" }).then((res) => {
  reviews = res;
  showPerson(currentItem);
});
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector(".random-btn");
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem === reviews.length) currentItem = 0;
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) currentItem = reviews.length - 1;
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * (reviews.length - 1));
  showPerson(currentItem);
});

function showPerson(currentItem) {
  const person = reviews[currentItem];
  img.src = person.img;
  author.textContent = person.name;
  job.textContent = person.job;
  info.textContent = person.text;
}

//TODO: 1. 通过请求获得模拟数据 2.首次图片加载的很慢 3.了解浏览器缓存机制
//已经使用XMLHttpRequest对象模拟了异步请求
//图片加载慢解决方案：懒加载、
