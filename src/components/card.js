import axios from "axios";

const Card = (article) => {
    // TASK 5
    // ---------------------
    // Implement this function, which should return the markup you see below.
    // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
    // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
    // The text inside elements will be set using their `textContent` property (NOT `innerText`).
    // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
    //
    // <div class="card">
    //   <div class="headline">{ headline }</div>
    //   <div class="author">
    //     <div class="img-container">
    //       <img src={ authorPhoto }>
    //     </div>
    //     <span>By { authorName }</span>
    //   </div>
    // </div>

    //vars
    const card = document.createElement("div");
    const cardHeadline = document.createElement("div");
    const cardAuthor = document.createElement("div");
    const cardAuthorImgContainer = document.createElement("div");
    const cardAuthorImg = document.createElement("img");
    const cardSpan = document.createElement("span");

    //structure
    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);
    cardAuthor.appendChild(cardAuthorImgContainer);
    cardAuthorImgContainer.appendChild(cardAuthorImg);
    cardAuthor.appendChild(cardSpan);

    //classes
    card.classList.add("card");
    cardHeadline.classList.add("headline");
    cardAuthor.classList.add("author");
    cardAuthor.classList.add("author");
    cardAuthorImgContainer.classList.add("img-container");

    //content
    cardHeadline.innerHTML = article.headline;
    cardAuthorImg.src = article.authorPhoto;
    cardSpan.innerHTML = `By ${article.authorName}`;

    //return
    return card;
};

const cardAppender = (selector) => {
    // TASK 6
    // ---------------------
    // Implement this function that takes a css selector as its only argument.
    // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it with console.log!!).
    // However, the articles do not come organized in a single, neat array. Inspect the response closely!
    // Create a card from each and every article object in the response, using the Card component.
    // Append each card to the element in the DOM that matches the selector passed to the function.
    //
    axios
        .get(`http://localhost:5000/api/articles`)
        .then((res) => {
            const injector = document.querySelector(selector);
            let objectOfArticles = res.data.articles;
            console.log(objectOfArticles);
            objectOfArticles.javascript.forEach((article) => {
                injector.appendChild(
                    Card({
                        headline: article.headline,
                        authorPhoto: article.authorPhoto,
                        authorName: article.authorName,
                    })
                );
            });
            objectOfArticles.bootstrap.forEach((article) => {
                injector.appendChild(
                    Card({
                        headline: article.headline,
                        authorPhoto: article.authorPhoto,
                        authorName: article.authorName,
                    })
                );
            });
            objectOfArticles.technology.forEach((article) => {
                injector.appendChild(
                    Card({
                        headline: article.headline,
                        authorPhoto: article.authorPhoto,
                        authorName: article.authorName,
                    })
                );
            });
            objectOfArticles.jquery.forEach((article) => {
                injector.appendChild(
                    Card({
                        headline: article.headline,
                        authorPhoto: article.authorPhoto,
                        authorName: article.authorName,
                    })
                );
            });
            objectOfArticles.node.forEach((article) => {
                injector.appendChild(
                    Card({
                        headline: article.headline,
                        authorPhoto: article.authorPhoto,
                        authorName: article.authorName,
                    })
                );
            });
        })
        .catch((err) => console.error(err));
};

export { Card, cardAppender };
//     document.querySelector(selector).appendChild(
//       Card({
//         headline: article.headline,
//         authorPhoto: article.authorPhoto,
//         authorName: article.authorName,
//       })
//     );

//  document.querySelector(selector).appendChild(Card({headline: article.headline, authorPhoto: article.authorPhoto, authorName: article.authorName,}));