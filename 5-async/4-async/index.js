async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  try {
    const response = await fetch(url);
    const data = await response.json();
    document.writeln(data.name);
  } catch (error) {
    console.log(error);
  }
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
