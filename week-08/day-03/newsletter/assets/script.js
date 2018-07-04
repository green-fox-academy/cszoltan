'use strict';

let form = document.querySelector('.my-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let fields = event.target.elements;
  const http = new XMLHttpRequest();
  http.open('POST', 'http://localhost:3000/signup');
  http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  http.send(JSON.stringify({ username: fields.username.value, email: fields.email.value }));
  http.onload = () => {
    const response = JSON.parse(http.responseText);
    console.log(response);
    let container = document.querySelector('.response');
    container.innerHTML = response.message;
  }
});
