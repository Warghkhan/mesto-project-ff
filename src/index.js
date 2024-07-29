import "./styles/index.css";
import { initialCards } from "./cards.js";
import {
  createCard,
  removeCard,
  likeCard,
  openCardImage,
} from "./components/card.js";
import { openModal, closeModal } from "./components/modal.js";

const cardContainer = document.querySelector(".places__list");

const createCardButton = document.querySelector(".profile__add-button");
const createCardModalWindow = document.querySelector(".popup_type_new-card");

const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditModalWindow = document.querySelector(".popup_type_edit");

const nameCurrent = document.querySelector(".profile__title");
const jobCurrent = document.querySelector(".profile__description");

const profileFormElement = document.querySelector(".profile__form");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");

const newPlaceFormElement = document.querySelector(".new__place__form");
const placeInput = document.querySelector(".popup__input_type_card-name");
const placeLinkInput = document.querySelector(".popup__input_type_url");

function profileFormHandler(evt) {
  evt.preventDefault();
  // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  nameCurrent.textContent = nameInput.value;
  jobCurrent.textContent = jobInput.value;
  closeModal(profileEditModalWindow);
}
profileFormElement.addEventListener("submit", profileFormHandler);

function newPlaceFormHandler(evt) {
  evt.preventDefault();

  const newCard = {
    name: placeInput.value,
    link: placeLinkInput.value,
  };

  cardContainer.prepend(
    createCard(newCard, { removeCard, likeCard, openCardImage })
  );
  newPlaceFormElement.reset();
  closeModal(createCardModalWindow);
}
newPlaceFormElement.addEventListener("submit", newPlaceFormHandler);

function renderCards(cardArray) {
  cardArray.forEach((element) => {
    cardContainer.prepend(
      createCard(element, { removeCard, likeCard, openCardImage })
    );
  });
}
renderCards(initialCards);

createCardButton.addEventListener("click", () => {
  openModal(createCardModalWindow);
});

profileEditButton.addEventListener("click", () => {
  openModal(profileEditModalWindow);
  nameInput.value = nameCurrent.textContent;
  jobInput.value = jobCurrent.textContent;
});

// @todo: @todo: @todo:@todo:@todo:@todo:@todooooooooo: @dodododo: pinkpanther
