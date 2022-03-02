const baseUrl = 'http://localhost:3000';
export default function request({ method = 'get', url }) {
  url = baseUrl + url;
  console.log(url);
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.withCredentials = true;
    xhr.timeout = 10000;
    xhr.open(method, url, true);
    if (method === 'post')
      xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8');
    xhr.send();
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log(xhr);
        resolve(xhr.response);
      } else {
        console.log(`Error statusText:${this.statusText}`);
      }
    };
    xhr.onerror = function () {
      reject('网络错误');
    };
  });
}
