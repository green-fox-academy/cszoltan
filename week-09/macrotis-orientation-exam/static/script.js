'use strict';

let get = new XMLHttpRequest();
get.open('GET', 'http://localhost:3000/attractions', true);
get.onload = () => {
  let result = JSON.parse(get.responseText);
  result.data.forEach(attraction => {
    let tr = document.createElement('tr');
    tr.innerHTML = `<td>${attraction.attr_name}</td><td>${attraction.city}</td><td>${attraction.price}</td><td>${attraction.longitude}</td><td>${attraction.lattitude}</td><td>${attraction.category}</td><td>${attraction.duration}</td><td>${attraction.recommended_age}</td>`;
    let td = document.createElement('td');
    let edit = document.createElement('button');
    edit.innerHTML = 'Edit';
    edit.addEventListener('click', (event) => {
      document.querySelector('#attr_id').value = `${attraction.id}`;
      document.querySelector('#name').value = `${attraction.attr_name}`;
      document.querySelector('#city').value = `${attraction.city}`;
      document.querySelector('#price').value = `${attraction.price}`;
      document.querySelector('#longitude').value = `${attraction.longitude}`;
      document.querySelector('#lattitude').value = `${attraction.lattitude}`;
      document.querySelector('#category').value = `${attraction.category}`;
      document.querySelector('#duration').value = `${attraction.duration}`;
      document.querySelector('#recommendedAge').value = `${attraction.recommended_age}`;
    });
    td.appendChild(edit);
    tr.appendChild(td);
    document.querySelector('tbody').appendChild(tr);
  });
}
get.send();

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  let post = new XMLHttpRequest();
  post.open('POST', 'http://localhost:3000/add', true);
  post.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  let formInputs = event.target.elements;
  if (formInputs.attr_id.value.length === 0) {
    post.send(JSON.stringify({name: formInputs.name.value, city: formInputs.city.value, price: formInputs.price.value, longitude: formInputs.longitude.value, lattitude: formInputs.lattitude.value, category: formInputs.category.value, duration: formInputs.duration.value, recommendedAge: formInputs.recommendedAge.value}));
  } else {
    post.send(JSON.stringify({id: formInputs.attr_id.value, name: formInputs.name.value, city: formInputs.city.value, price: formInputs.price.value, longitude: formInputs.longitude.value, lattitude: formInputs.lattitude.value, category: formInputs.category.value, duration: formInputs.duration.value, recommendedAge: formInputs.recommendedAge.value}));
  }
  post.onload = () => {
    location.reload();
  }
});
