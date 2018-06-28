const http = new XMLHttpRequest();
const host = 'http://localhost:3000';

function createRows(data) {
  const tbody = document.querySelector('#books');
  tbody.innerHTML = '';

  data.forEach((book) => {
    let tr = document.createElement('tr');
    if (book.aut_name) {
      let td_author = document.createElement('td');
      td_author.innerText = book.aut_name;
      tr.appendChild(td_author);
      document.querySelector('th#author').setAttribute('style', '');
    } else {
      document.querySelector('th#author').setAttribute('style', 'display:none;');
    }
    if (book.book_name) {
      let td_title = document.createElement('td');
      td_title.innerText = book.book_name;
      tr.appendChild(td_title);
      document.querySelector('th#title').setAttribute('style', '');
    } else {
      document.querySelector('th#title').setAttribute('style', 'display:none;');
    }
    if (book.cate_descrip) {
      let td_category = document.createElement('td');
      td_category.innerText = book.cate_descrip;
      tr.appendChild(td_category);
      document.querySelector('th#category').setAttribute('style', '');
    } else {
      document.querySelector('th#category').setAttribute('style', 'display:none;');
    }
    if (book.pub_name) {
      let td_publisher = document.createElement('td');
      td_publisher.innerText = book.pub_name;
      tr.appendChild(td_publisher);
      document.querySelector('th#publisher').setAttribute('style', '');
    } else {
      document.querySelector('th#publisher').setAttribute('style', 'display:none;');
    }
    if (book.book_price) {
      let td_price = document.createElement('td');
      td_price.innerText = book.book_price;
      tr.appendChild(td_price);
      document.querySelector('th#price').setAttribute('style', '');
    } else {
      document.querySelector('th#price').setAttribute('style', 'display:none;');
    }
    tbody.appendChild(tr);
  });
}

function getData(apiRoute, callback) {
  http.open('GET', `${host}${apiRoute}`, true);
  http.onload = () => {
    const result = JSON.parse(http.responseText);
    callback(result.books);
  };

  http.send();
}

function consoleResponse(response) {
  console.log(response);
}

function getCategory(e) {
  const category = e.target.dataset.category;
  if (category === '*') {
    getData(`/api/books/full`, consoleResponse);
    getData(`/api/books/full`, createRows);
    document.querySelectorAll('.title').forEach(element => {
      element.innerHTML = 'All books with full data';
    });
  } else if (category === 'titles') {
    getData(`/api/books/titles`, consoleResponse);
    getData(`/api/books/titles`, createRows);
    document.querySelectorAll('.title').forEach(element => {
      element.innerHTML = `All Book ${category}`;
    });
  } else if (category === 'categories') {
    getData(`/api/books/categories`, consoleResponse);
    getData(`/api/books/categories`, createRows);
    document.querySelectorAll('.title').forEach(element => {
      element.innerHTML = `All Book ${category}`;
    });
  } else {
    getData(`/api/books/full?category=${category}`, consoleResponse);
    getData(`/api/books/full?category=${category}`, createRows);
    document.querySelectorAll('.title').forEach(element => {
      element.innerHTML = `${category} Books with full data`;
    });
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', getCategory);
});

getData(`/api/books/full`, createRows);
