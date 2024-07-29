import { openModal, closeModal } from "./modal.js";

export { addCard, removeCard, likeCard };

const cardTemplate = document.querySelector("#card-template").content;
const cardContainer = document.querySelector(".places__list");
const cardImageModalWindow = document.querySelector(".popup_type_image");

function addCard(card, { removeCard, likeCard }) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const deleteCardButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");

  deleteCardButton.addEventListener("click", () => removeCard(cardElement));
  cardElement.querySelector(".card__title").textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = `Изображение места: ${card.name}`;
  cardContainer.prepend(cardElement);

  cardImage.addEventListener("click", function (e) {
    openModal(cardImageModalWindow);
    const cardImageModalWindowImageContent =
      cardImageModalWindow.querySelector(".popup__image");
    cardImageModalWindowImageContent.src = cardImage.src;
    cardImageModalWindowImageContent.alt = cardImage.alt;

    const cardImageModalWindowCaptionContent =
      cardImageModalWindow.querySelector(".popup__caption");
    cardImageModalWindowCaptionContent.textContent = card.name;

    console.log("card is opened");
  });

  cardLikeButton.addEventListener("click", () => likeCard(cardElement));
}

function removeCard(cardElement) {
  cardElement.remove();
}

function likeCard(cardElement) {
  cardElement
    .querySelector(".card__like-button")
    .classList.toggle("card__like-button_is-active");
}
