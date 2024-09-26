export { createCard, removeCard, likeCard };

const cardTemplate = document.querySelector("#card-template").content;

function createCard(card, { removeCard, likeCard, openCardImage }) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const deleteCardButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");

  deleteCardButton.addEventListener("click", () => removeCard(cardElement));
  cardElement.querySelector(".card__title").textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = `Изображение места: ${card.name}`;

  cardImage.addEventListener("click", () => openCardImage(cardElement));

  cardLikeButton.addEventListener("click", () => likeCard(cardElement));

  return cardElement;
}

function removeCard(cardElement) {
  cardElement.remove();
}

function likeCard(cardElement) {
  cardElement
    .querySelector(".card__like-button")
    .classList.toggle("card__like-button_is-active");
}

