import "./styles/index.css";
import { initialCards } from "./cards.js";
import { addCard, removeCard, likeCard } from "./card.js";
import { openModal, closeModal} from "./modal.js";

// @todo: DOM узлы
const addCardButton = document.querySelector(".profile__add-button");
const addCardModalWindow = document.querySelector(".popup_type_new-card");

const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditModalWindow = document.querySelector(".popup_type_edit");

const popupCloseButton = document.querySelector(".popup__close");

// Находим форму в DOM

/*const formElement = document.querySelector("");
// Находим поля формы в DOM
const nameInput = document.querySelector("");
const jobInput = document.querySelector("");
*/


/*
function handleFormSubmit(evt) {
  evt.preventDefault(); 
  // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value

  // Выберите элементы, куда должны быть вставлены значения полей

  // Вставьте новые значения с помощью textContent
}
formElement.addEventListener('submit', handleFormSubmit); 
*/

// @todo: Вывести карточки на страницу
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
});

popupCloseButton.addEventListener("click", function() {
  console.log("try close");
});



// @todo: @todo: @todo:@todo:@todo:@todo:@todooooooooo: @dodododo: pinkpanther
