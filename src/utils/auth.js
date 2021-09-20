export const BASE_URL = "https://dev-24749127.okta.com";

// Проверка ответа =========================================================
export const checkRespons = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject(`Ошибка № ${res.status}  Текст ошибки: ${res.statusText}`);
};

// Регистрация пользователя Post запрос=====================================
export const register = ({ email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkRespons);
};
