// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const addCardButton = document.querySelector(".profile__add-button");
const cardContainer = document.querySelector(".places__list");
// @todo: Функция создания карточки
function addCard(card, removeCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteCardButton = cardElement.querySelector(".card__delete-button");
  deleteCardButton.addEventListener("click", () => removeCard(cardElement));
  cardElement.querySelector(".card__title").textContent = card.name;
  cardElement.querySelector(".card__image").src = card.link;
  cardElement.querySelector(
    ".card__image"
  ).alt = `Изображение места: ${card.name}`;
  cardContainer.append(cardElement);
  console.log(`${card.name} card added`);
}
/*
addCardButton.addEventListener("click", function () {
  console.log("add card button clicked");
});
*/
// @todo: Функция удаления карточки
function removeCard(cardElement) {
  console.log(`card was deleted`);
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
