import './styles/index.css';
import { initialCards } from './cards';
import currentAvatarImage from './images/avatar.jpg';

// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const addCardButton = document.querySelector(".profile__add-button");
const cardContainer = document.querySelector(".places__list");
const cardElement = cardTemplate.querySelector(".card");
const cardImage = cardElement.querySelector(".card__image");
// @todo: Функция создания карточки
const avatarImage = new URL ('./images/avatar.jpg', import.meta.url);
const avatar = {
  name: "123",
  link: currentAvatarImage
}
const avatarCircle = document.querySelector(".profile__image");


function addCard(card,  removeCard ) {
  cardElement.cloneNode(true);
  const deleteCardButton = cardElement.querySelector(".card__delete-button");
  deleteCardButton.addEventListener("click", () => removeCard(cardElement));
  cardElement.querySelector(".card__title").textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = `Изображение места: ${card.name}`;
  cardContainer.append(cardElement);
}

// @todo: Функция удаления карточки
function removeCard(cardElement) {
  cardElement.remove();
}
// @todo: Вывести карточки на страницу
function renderCards(cardArray) {
  cardArray.forEach((element) => {
    addCard(element, removeCard);
  });
}
renderCards(initialCards);

function changeAvatar (avatar) {
  avatarCircle.style.backgroundImage = avatar.link;
}

changeAvatar(avatar);



// @todo: @todo: @todo:@todo:@todo:@todo:@todooooooooo: @dodododo: pinkpanther
