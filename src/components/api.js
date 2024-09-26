const configurations = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-23",
  headers: {
    authorization: "c140e5d4-4727-4b15-93c2-f75226697a2f",
    "Content-Type": "application/json",
  },
};

export const getResData = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getUserInfo = async () => {
  return fetch(`${configurations.baseUrl}/users/me`, {
    headers: configurations.headers,
  }).then((res) => getResData(res));
};

export const getInitialCards = () => {
  return fetch(`${configurations.baseUrl}/cards`, {
    headers: configurations.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      
      return Promise.reject(`Ошибка: ${res.status}`);
    })
};

export const getInitialInfo = async () => {
  return Promise.all([getUserInfo(), getInitialCards()]);
};
