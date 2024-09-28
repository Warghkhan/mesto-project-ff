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

export const getUserData = async () => {
  return fetch(`${configurations.baseUrl}/users/me`, {
    headers: configurations.headers,
  }).then((res) => getResponseData(res));
};

export const getInitialCards = async () => {
  return fetch(`${configurations.baseUrl}/cards`, {
    headers: configurations.headers,
  }).then((res) => getResponseData(res));
};

