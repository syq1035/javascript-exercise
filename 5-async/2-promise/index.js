function fetchData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    // <-- start
    // TODO 22: 通过Promise实现异步请求
    xhr.onreadystatechange = function onchange() {
      if (xhr.readyState === 4 && (xhr.status >= 200 || xhr.status < 300)) {
        resolve(xhr.responseText);
      } else if (xhr.readyState === 4 && (xhr.status < 200 || xhr.status >= 300)) {
        reject(xhr.error);
      }
    };
    xhr.open('get', url, true);
    xhr.send();
    // end -->
  });
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(JSON.parse(result).name);
  })
  .catch(error => {
    console.error(error);
  });
