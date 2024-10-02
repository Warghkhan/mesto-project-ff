export { createCard, removeCard, likeCard };
import {
  deleteOwnerCard,
  putLikeCard,
  deleteLikeCard,
  //updateLikeCard,
} from "./api.js";

const cardTemplate = document.querySelector("#card-template").content;

function createCard(card, { removeCard, likeCard, openCardImage }, userId) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const deleteCardButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const likeCardCount = cardElement.querySelector(".card__like-button-counter");

  cardElement.querySelector(".card__title").textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = `Изображение места: ${card.name}`;

  
  try {
    if (userId == card.owner._id) {
      deleteCardButton.classList.remove("card__delete-button-hidden");
      deleteCardButton.addEventListener("click", () =>
        removeCard(cardElement, card)
      );
    } else {
      deleteCardButton.classList.add("card__delete-button-hidden");
    }

    likeCardCount.textContent = card.likes.length;
    if (card.likes.some((e) => e._id === userId)) {
      cardLikeButton.classList.add("card__like-button_is-active");
    }
  } catch (err) {
    console.log(err);
  }

  cardImage.addEventListener("click", () => openCardImage(cardElement));
  cardLikeButton.addEventListener("click", () => likeCard(cardElement, card));

  return cardElement;
}

function removeCard(cardElement, card) {
  deleteOwnerCard(card);
  cardElement.remove();
}

function likeCard(cardElement, card) {
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const likeCardCount = cardElement.querySelector(".card__like-button-counter");
  //cardLikeButton.classList.toggle("card__like-button_is-active");

  const liking = cardLikeButton.classList.contains(
    "card__like-button_is-active"
  )
    ? deleteLikeCard
    : putLikeCard;

  liking(card)
    .then((likedCard) => {
      console.log("test");
      cardLikeButton.classList.toggle("card__like-button_is-active");
      likeCardCount.textContent = likedCard.likes.length;
    })
    .catch((error) => {
      console.log(error);
    });

  //console.log("put");
}

//updateLikeCard(card).then((data) => console.log(data));
