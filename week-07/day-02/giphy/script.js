function requestGiphy() {
  let search = document.querySelector('.searchField').value;
  let offset = Math.floor(Math.random() * 200);
  let container = document.querySelector('.container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=IkcPjpJcZnx6Z86E1YMoEiSNIca7U9FP&q=${search}&limit=15&offset=${offset}&rating=R&lang=en`, true);
  httpRequest.onload = () => {
    let giphyResponse = JSON.parse(httpRequest.responseText);
    giphyResponse.data.forEach(value => {
      let div = document.createElement('div');
      div.classList.add('image-content');
      let image = document.createElement('img');
      image.setAttribute('src', value.images.fixed_height_still.url);
      image.onclick = () => {
        if (image.classList.contains('move')) {
          image.setAttribute('src', value.images.fixed_height_still.url);
          image.classList.remove('move');
        } else {
          image.setAttribute('src', value.images.fixed_height.url);
          image.classList.add('move');
        }
      }
      div.appendChild(image);
      document.querySelector('.container').appendChild(div);
    });
  }
  httpRequest.send();
}

document.querySelector('.execute').onclick = () => requestGiphy();
