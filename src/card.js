export { addCard, removeCard, likeCard};

const cardTemplate = document.querySelector("#card-template").content;
const cardContainer = document.querySelector(".places__list");

function addCard(card, { removeCard, likeCard }) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const deleteCardButton = cardElement.querySelector(".card__delete-button");
  deleteCardButton.addEventListener("click", () => removeCard(cardElement));
  cardElement.querySelector(".card__title").textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = `Изображение места: ${card.name}`;
  cardContainer.append(cardElement);
}

function removeCard(cardElement) {
  cardElement.remove();
}

function likeCard(cardElement) {
  
}
