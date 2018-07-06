const http = new XMLHttpRequest();
const host = 'http://localhost:3000';

let voteRequest = (result) => {
  let container = document.querySelector(`#id-${result.id}`);
  let scoreDiv = container.firstChild;
  scoreDiv.innerHTML = result.score;
};

let makeRequest = (type, api, callback) => {
  http.open(type, `${host}${api}`, true);
  http.onload = () => {
    let result = JSON.parse(http.responseText);
    callback(result);
  }
  http.send();
}

let renderPage = (result) => {
  result.post.forEach(post => {
    let container = document.createElement('div');
    let scoreDiv = document.createElement('div');
    scoreDiv.innerHTML = post.score;
    container.appendChild(scoreDiv);
    container.classList.add('container');
    container.setAttribute('id', `id-${post.id}`);
    let buttonDiv = document.createElement('div');
    let downVote = document.createElement('button');
    downVote.innerHTML = 'Downvote';
    downVote.addEventListener('click', () => {
      makeRequest('PUT', `/api/posts/${post.id}/downvote`, voteRequest);
    });
    buttonDiv.appendChild(downVote);
    let upVote = document.createElement('button');
    upVote.innerHTML = 'Upvote';
    upVote.addEventListener('click', () => {
      makeRequest('PUT', `/api/posts/${post.id}/upvote`, voteRequest);
    });
    buttonDiv.appendChild(upVote);
    container.appendChild(buttonDiv);
    let postDiv = document.createElement('div');
    let titleDiv = document.createElement('div');
    titleDiv.innerHTML = `${post.title}`;
    postDiv.appendChild(titleDiv);
    let contentDiv = document.createElement('div');
    let stringEnd = post.content.indexOf(' ', 30);
    if (stringEnd === -1) {
      stringEnd = post.content.length;
    }
    contentDiv.innerHTML = `${post.content.slice(0, stringEnd)} ${post.content.length > stringEnd ? '...' : ''}`;
    postDiv.appendChild(contentDiv);
    container.appendChild(postDiv);
    document.body.appendChild(container);
  });
}

makeRequest('GET', '/api/posts', renderPage);
