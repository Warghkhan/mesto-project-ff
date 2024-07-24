import './styles/index.css';

// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const addCardButton = document.querySelector(".profile__add-button");
const cardContainer = document.querySelector(".places__list");
const cardImage = cardElement.querySelector(".card__image");
// @todo: Функция создания карточки
function addCard(card, removeCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
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

// @todo: @todo: @todo:@todo:@todo:@todo:@todooooooooo: @dodododo: pinkpanther
