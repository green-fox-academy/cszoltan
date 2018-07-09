const http = new XMLHttpRequest();
const host = 'http://localhost:3000';

let makeRequest = (type, api, callback) => {
  http.open(type, `${host}${api}`, true);
  http.onload = () => {
    let result = JSON.parse(http.responseText);
    callback(result);
  }
  http.send();
};

let voteRequest = (result) => {
  let container = document.querySelector(`#id-${result.id}`);
  let page = document.querySelector('.page');
  container.querySelector('.votes').querySelector('.score').innerHTML = result.score;
  if (checkSiblings(container)) {
    page.innerHTML = '';
    makeRequest('get', '/api/posts', renderPage);
  } 
};

let checkSiblings = (element) => {
  let elementScore = parseInt(element.querySelector('.votes').querySelector('.score').innerHTML);
  if (element.previousSibling) {
    let aboveScore = parseInt(element.previousSibling.querySelector('.votes').querySelector('.score').innerHTML);
    if (aboveScore < elementScore) {
      return true;
    }
  }
  if (element.nextSibling) {
    let belowScore = parseInt(element.nextSibling.querySelector('.votes').querySelector('.score').innerHTML);
    if (belowScore > elementScore) {
      return true;
    }
  }
  return false;
}

let sortPosts = (data) => {
  let myArray = data.post;
  for (let i = 0; i < myArray.length - 1; i++) {
    for (let j = i + 1; j < myArray.length; j++) {
      if (myArray[i].score < myArray[j].score) {
        let temp = myArray[j];
        myArray[j] = myArray[i];
        myArray[i] = temp;
      }
    }
  }
  return myArray;
};

let deletePost = (result) => {
  document.querySelector('.page').innerHTML = '';
  makeRequest('get', '/api/posts', renderPage);
};

let renderPage = (result) => {
  let posts = sortPosts(result);
  posts.forEach(post => {
    let page = document.querySelector('.page');
    let container = document.createElement('div');
    container.classList.add('container');
    container.setAttribute('id', `id-${post.id}`);
    let voteDiv = document.createElement('div');
    voteDiv.classList.add('votes');
    let upVote = document.createElement('img');
    upVote.setAttribute('src', 'assets/img/up.png');
    upVote.classList.add('upvote');
    upVote.addEventListener('click', () => {
      makeRequest('PUT', `/api/posts/${post.id}/upvote`, voteRequest);
    });
    voteDiv.appendChild(upVote);
    let scoreDiv = document.createElement('div');
    scoreDiv.classList.add('score');
    scoreDiv.innerHTML = post.score;
    voteDiv.appendChild(scoreDiv);
    let downVote = document.createElement('img');
    downVote.setAttribute('src', 'assets/img/up.png');
    downVote.classList.add('downvote');
    downVote.addEventListener('click', () => {
      makeRequest('PUT', `/api/posts/${post.id}/downvote`, voteRequest);
    });
    voteDiv.appendChild(downVote);
    container.appendChild(voteDiv);
    let postDiv = document.createElement('div');
    postDiv.classList.add('post');
    let titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.innerHTML = `<h3>${post.title}</h3>`;
    postDiv.appendChild(titleDiv);
    let contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
    let stringEnd = post.content.indexOf(' ', 30);
    if (stringEnd === -1) {
      stringEnd = post.content.length;
    }
    contentDiv.innerHTML = `${post.content.slice(0, stringEnd)} ${post.content.length > stringEnd ? '...' : ''}`;
    postDiv.appendChild(contentDiv);
    container.appendChild(postDiv);
    /*let deleteDiv = document.createElement('div');
    deleteDiv.classList.add('delete');
    deleteDiv.innerHTML = 'DELETE';
    deleteDiv.addEventListener('click', () => {
      makeRequest('delete', `/api/posts/${post.id}`, deletePost);
    });
    container.appendChild(deleteDiv);*/
    page.appendChild(container);
  });
}
makeRequest('GET', '/api/posts', renderPage);
