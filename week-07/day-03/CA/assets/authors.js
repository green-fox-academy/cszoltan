const http = new XMLHttpRequest();
const host = 'http://localhost:3000';

getData(`/api/authors/full`, createRows);

function getData(apiRoute, callback) {//apiRoute = '/api/authors/full', callback = createRows
  http.open('GET', `${host}${apiRoute}`, true);
  http.onload = () => {
    const result = JSON.parse(http.responseText);
    console.log(result.author);
    callback(result.author);//createRows(result.author);
  };
  http.send();
}

function createRows(data) {//data = result.author
  const tbody = document.querySelector('#authors');
  tbody.innerHTML = '';
  data.forEach((author) => {
    let tr = document.createElement('tr');
    if (author.aut_name) {
      let td_author = document.createElement('td');
      td_author.innerText = author.aut_name;
      tr.appendChild(td_author);
      document.querySelector('th#author').setAttribute('style', '');
    } else {
      document.querySelector('th#author').setAttribute('style', 'display:none;');
    }
    if (author.country) {
      let td_country = document.createElement('td');
      td_country.innerText = author.country;
      tr.appendChild(td_country);
      document.querySelector('th#country').setAttribute('style', '');
    } else {
      document.querySelector('th#country').setAttribute('style', 'display:none;');
    }
    if (author.home_city) {
      let td_home_city = document.createElement('td');
      td_home_city.innerText = author.home_city;
      tr.appendChild(td_home_city);
      document.querySelector('th#home_city').setAttribute('style', '');
    } else {
      document.querySelector('th#home_city').setAttribute('style', 'display:none;');
    }
    tbody.appendChild(tr);
  });
}



function consoleResponse(response) {
  console.log(response);
}

function getCategory(e) {
  const category = e.target.dataset.category;
  if (category === '*') {
    getData(`/api/authors/full`, consoleResponse);
    getData(`/api/authors/full`, createRows);
    document.querySelectorAll('.title').forEach(element => {
      element.innerHTML = 'All authors with full data';
    });
  } else if (category === 'countries' || category === 'cities') {
    getData(`/api/authors/${category}`, consoleResponse);
    getData(`/api/authors/${category}`, createRows);
    document.querySelectorAll('.title').forEach(element => {
      element.innerHTML = `Unique author ${category}`;
    });
  } else {
    getData(`/api/authors/full?country=${category}`, consoleResponse);
    getData(`/api/authors/full?country=${category}`, createRows);
    document.querySelectorAll('.title').forEach(element => {
      element.innerHTML = `${category} authors with full data`;
    });
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', getCategory);
});

