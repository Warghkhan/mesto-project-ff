import { openModal, closeModal } from "./modal.js";

export { createCard, removeCard, likeCard, openCardImage };

const cardTemplate = document.querySelector("#card-template").content;

const cardImageModalWindow = document.querySelector(".popup_type_image");
const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
const cardImage = cardElement.querySelector(".card__image");
const deleteCardButton = cardElement.querySelector(".card__delete-button");
const cardLikeButton = cardElement.querySelector(".card__like-button");

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

function openCardImage(cardElement) {
  openModal(cardImageModalWindow);
  const cardImageModalWindowImageContent =
    cardImageModalWindow.querySelector(".popup__image");
  cardImageModalWindowImageContent.src =
    cardElement.querySelector(".card__image").src;
  cardImageModalWindowImageContent.alt =
    cardElement.querySelector(".card__image").alt;

  const cardImageModalWindowCaptionContent =
    cardImageModalWindow.querySelector(".popup__caption");
  cardImageModalWindowCaptionContent.textContent =
    cardElement.querySelector(".card__title").textContent;
}
