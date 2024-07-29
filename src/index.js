import "./styles/index.css";
import { initialCards } from "./cards.js";
import { addCard, removeCard, likeCard } from "./components/card.js";
import { openModal, closeModal } from "./components/modal.js";


const addCardButton = document.querySelector(".profile__add-button");
const addCardModalWindow = document.querySelector(".popup_type_new-card");

const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditModalWindow = document.querySelector(".popup_type_edit");

const nameCurrent = document.querySelector(".profile__title");
const jobCurrent = document.querySelector(".profile__description");

const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");

const newPlaceFormElement = document.querySelector(".new__place__form");
const placeInput = document.querySelector(".popup__input_type_card-name");
const placeLinkInput = document.querySelector(".popup__input_type_url");

function handleFormSubmit(evt) {
  evt.preventDefault();
  // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  nameCurrent.textContent = nameInput.value;
  jobCurrent.textContent = jobInput.value;
  closeModal(evt.target.parentElement.closest(".popup"));
}
formElement.addEventListener("submit", handleFormSubmit);


function newPlaceFormHandler(evt) {
  evt.preventDefault();

  const newCard = {
    name: placeInput.value,
    link: placeLinkInput.value,
  };

  addCard(newCard, {removeCard, likeCard});
  placeInput.value = '';
  placeLinkInput.value = '';
  closeModal(evt.target.parentElement.closest(".popup"));
}
newPlaceFormElement.addEventListener("submit", newPlaceFormHandler);


function renderCards(cardArray) {
  cardArray.forEach((element) => {
    addCard(element, { removeCard, likeCard });
  });
}
renderCards(initialCards);

addCardButton.addEventListener("click", () => {
  openModal(addCardModalWindow);
});

profileEditButton.addEventListener("click", () => {
  openModal(profileEditModalWindow);
  nameInput.value = nameCurrent.textContent;
  jobInput.value = jobCurrent.textContent;
});

// @todo: @todo: @todo:@todo:@todo:@todo:@todooooooooo: @dodododo: pinkpanther
