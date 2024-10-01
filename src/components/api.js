const configurations = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-23",
  headers: {
    authorization: "c140e5d4-4727-4b15-93c2-f75226697a2f",
    "Content-Type": "application/json",
  },
};

const getResponseData = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

export const getUserData = () => {
  return fetch(`${configurations.baseUrl}/users/me`, {
    headers: configurations.headers,
  }).then((res) => getResponseData(res));
};

export const getInitialCards = () => {
  return fetch(`${configurations.baseUrl}/cards`, {
    headers: configurations.headers,
  }).then((res) => getResponseData(res));
};

export const changeUserData = (userData) => {
  return fetch(`${configurations.baseUrl}/users/me`, {
    method: "PATCH",
    headers: configurations.headers,
    body: JSON.stringify({
      name: userData.name,
      about: userData.about,
    }),
  }).then((res) => getResponseData(res));
};

export const addNewCard = (cardData) => {
  return fetch(`${configurations.baseUrl}/cards`, {
    method: "POST",
    headers: configurations.headers,
    body: JSON.stringify({
      name: cardData.name,
      link: cardData.link,
    }),
  }).then((res) => getResponseData(res));
};

export const deleteOwnerCard = (cardData) => {
  return fetch(`${configurations.baseUrl}/cards/${cardData._id}`, {
    method: "DELETE",
    headers: configurations.headers,
  }).then((res) => getResponseData(res));
};

export const putLikeCard = (cardData) => {
  console.log(cardData);
  return fetch(`${configurations.baseUrl}/cards/likes/${cardData._id}`, {
    method: "PUT",
    headers: configurations.headers,
  }).then((res) => getResponseData(res));

  //console.log(cardData);
};

export const deleteLikeCard = (cardData) => {
  return fetch(`${configurations.baseUrl}/cards/likes/${cardData._id}`, {
    method: "DELETE",
    headers: configurations.headers,
  }).then((res) => getResponseData(res));
};

/*
export const updateLikeCard = (cardData) => {
  return fetch(`${configurations.baseUrl}/cards/likes/${cardData._id}`, {
    //method: "GET",
    headers: configurations.headers,
  }).then((res) => getResponseData(res));
}
  */
