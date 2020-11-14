const baseUrl =
  "https://www.fastmock.site/mock/56492fc5dc406b4cdfc84222b049f096/mock";
export default function request({ method = "get", url }) {
  url = baseUrl + url;
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.timeout = 10000;
    xhr.open(method, url, true);
    if (method === "post")
      xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");
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
