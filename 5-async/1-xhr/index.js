function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  // <-- start
  // TODO 21: 通过XMLHttpRequest实现异步请求
  xhr.onreadystatechange = function onchange() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      successCallback(xhr.responseText);
    } else if (xhr.readyState === 4 && (xhr.status < 200 || xhr.status >= 400)) {
      errorCallback('error msg');
    }
  };
  xhr.open('get', url, true);
  xhr.send();
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(
  URL,
  result => {
    document.writeln(JSON.parse(result).name);
  },
  error => {
    console.error(error);
  }
);
