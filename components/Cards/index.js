// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios
  .get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then((response) => {

    // const something = ['bootstrap', 'javascript', 'jquery', 'node', 'technology']

    let cardInfo = response.data.articles;
    console.log(response.data.articles);
    // console.log(cardInfo);
    Object.values(cardInfo.javascript).forEach((item) => {
      cards.appendChild(
        cardCreator(item.headline, item.authorPhoto, item.authorName)
      );
    });
    Object.values(cardInfo.bootstrap).forEach((item) => {
      cards.appendChild(
        cardCreator(item.headline, item.authorPhoto, item.authorName)
      );
    });
    Object.values(cardInfo.jquery).forEach((item) => {
      cards.appendChild(
        cardCreator(item.headline, item.authorPhoto, item.authorName)
      );
    });
    Object.values(cardInfo.node).forEach((item) => {
      cards.appendChild(
        cardCreator(item.headline, item.authorPhoto, item.authorName)
      );
    });
    Object.values(cardInfo.technology).forEach((item) => {
      cards.appendChild(
        cardCreator(item.headline, item.authorPhoto, item.authorName)
      );
    });
  })
  .catch((error) => {
    console.log('you have an error', error);
  });
const cards = document.querySelector('.cards-container');

//cardHeadline, authorPhoto, authorName

function cardCreator(headline, authorPhoto, authorName) {
  const card = document.createElement('div'),
    cardHeadline = document.createElement('div'),
    cardAuthorContain = document.createElement('div'),
    cardImgContain = document.createElement('div'),
    cardImage = document.createElement('img'),
    cardAuthor = document.createElement('span');


  card.classList.add('card');
  cardHeadline.classList.add('headline');
  cardAuthorContain.classList.add('author');
  cardImgContain.classList.add('img-container');

  card.appendChild(cardHeadline);
  card.appendChild(cardAuthorContain);
  cardAuthorContain.appendChild(cardImgContain);
  cardImgContain.appendChild(cardImage);
  cardAuthorContain.appendChild(cardAuthor);

  cardHeadline.textContent = headline;
  cardImage.setAttribute('img', authorPhoto);
  cardImage.src = authorPhoto;
  cardAuthor.textContent = authorName;

  return card;
};
