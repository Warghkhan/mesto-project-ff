import "./styles/index.css";
import { createCard, removeCard, likeCard } from "./components/card.js";
import { openModal, closeModal } from "./components/modal.js";
import { enableValidation, clearValidation } from "./components/validation.js";
import {
  getInitialCards,
  getUserData,
  changeUserData,
  addNewCard,
  changeUserAvatar,
} from "./components/api.js";

const cardContainer = document.querySelector(".places__list");

const createCardButton = document.querySelector(".profile__add-button");
const createCardModalWindow = document.querySelector(".popup_type_new-card");
const cardImageModalWindow = document.querySelector(".popup_type_image");

const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditModalWindow = document.querySelector(".popup_type_edit");

const changeAvatarButton = document.querySelector(".profile__image-overlay");
const changeAvatarModalWindow = document.querySelector(
  ".popup_type_change-avatar"
);
const changeAvatarFormElement = document.querySelector(".change-avatar__form");
const changeAvatarLinkInput = document.querySelector(
  ".popup__input_type_url_avatar"
);

const profileFormElement = document.querySelector(".profile__form");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");

const newPlaceFormElement = document.querySelector(".new__place__form");
const placeInput = document.querySelector(".popup__input_type_card-name");
const placeLinkInput = document.querySelector(".popup__input_type_url");

const nameCurrent = document.querySelector(".profile__title");
const jobCurrent = document.querySelector(".profile__description");
const imageCurrent = document.querySelector(".profile__image");

let userId;

const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

function startWorking() {
  Promise.all([getUserData(), getInitialCards()])
    .then((data) => {
      const [userData, initialCards] = data;
      imageCurrent.style.backgroundImage = `url(${userData.avatar})`;
      nameCurrent.textContent = userData.name;
      jobCurrent.textContent = userData.about;
      userId = userData._id;
      renderCards(initialCards, userId);
    })
    .catch((err) => {
      console.log(err);
    });

  enableValidation(validationSettings);
}

startWorking();

const savingProcessButtonLabel = (evt) => {
  evt.target.querySelector(".popup__button").textContent = "Сохранение...";
};

const renewSaveButtonLabel = (modalWindow) => {
  modalWindow.querySelector(".popup__button").textContent = "Сохранить";
};

function profileFormHandler(evt) {
  evt.preventDefault();
  savingProcessButtonLabel(evt);
  const userData = {
    name: nameInput.value,
    about: jobInput.value,
  };

  changeUserData(userData)
    .then((data) => {
      nameCurrent.textContent = userData.name;
      jobCurrent.textContent = userData.about;
    })
    .then(() => {
      closeModal(profileEditModalWindow);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renewSaveButtonLabel(profileEditModalWindow);
    });
}
profileFormElement.addEventListener("submit", profileFormHandler);

changeAvatarButton.addEventListener("click", () => {
  clearValidation(
    changeAvatarModalWindow.querySelector(validationSettings.formSelector),
    validationSettings
  );

  openModal(changeAvatarModalWindow);
});

function changeAvatarHandler(evt) {
  evt.preventDefault();
  savingProcessButtonLabel(evt);
  const avatarData = {
    avatar: changeAvatarLinkInput.value,
  };
  changeUserAvatar(avatarData.avatar)
    .then((userData) => {
      imageCurrent.style.backgroundImage = `url(${userData.avatar})`;
    })
    .then(() => {
      closeModal(changeAvatarModalWindow);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renewSaveButtonLabel(changeAvatarModalWindow);
    });
}

changeAvatarFormElement.addEventListener("submit", changeAvatarHandler);

function newPlaceFormHandler(evt) {
  evt.preventDefault();
  savingProcessButtonLabel(evt);
  const newCard = {
    name: placeInput.value,
    link: placeLinkInput.value,
  };

  if (newCard.name !== "" && newCard.link !== "") {
    addNewCard(newCard)
      .then((cardData) => {
        cardContainer.prepend(
          createCard(cardData, { removeCard, likeCard, openCardImage }, userId)
        );
      })
      .then(() => {
        closeModal(createCardModalWindow);
        newPlaceFormElement.reset();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renewSaveButtonLabel(createCardModalWindow);
      });
  }
}
newPlaceFormElement.addEventListener("submit", newPlaceFormHandler);

function renderCards(cardArray) {
  cardArray.forEach((element) => {
    cardContainer.append(
      createCard(element, { removeCard, likeCard, openCardImage }, userId)
    );
  });
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

createCardButton.addEventListener("click", () => {
  clearValidation(
    createCardModalWindow.querySelector(validationSettings.formSelector),
    validationSettings
  );

  openModal(createCardModalWindow);
});

profileEditButton.addEventListener("click", () => {
  openModal(profileEditModalWindow);

  nameInput.value = nameCurrent.textContent;
  jobInput.value = jobCurrent.textContent;

  if (nameInput.value && jobInput.value) {
    clearValidation(
      profileEditModalWindow.querySelector(validationSettings.formSelector),
      validationSettings
    );
  }
});

// @todo: @todo: @todo:@todo:@todo:@todo:@todooooooooo: @dodododo: pinkpanther
