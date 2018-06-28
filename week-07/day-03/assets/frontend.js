'use strict';

const httpRequest = new XMLHttpRequest();
httpRequest.open('GET', `localhost:3000/title`, true);
httpRequest.onload = () => {
  let titles = JSON.parse(httpRequest.responseText);
  let div = document.createElement('div');
  console.log(titles);
  title.forEach(value => {

  });
}
httpRequest.send();
