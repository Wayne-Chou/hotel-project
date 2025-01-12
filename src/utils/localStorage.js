export const setToken = (token) => {
  localStorage.setItem("R-TOKEN", token);
};

export const getToken = () => {
  const user = localStorage.getItem('user')

  return user ? JSON.parse(user).token : ''
};

export const setLanguage = (token) => {
  localStorage.setItem("R-Language", token);
};

export const getLanguage = () => {
  return localStorage.getItem("R-Language") || "";
};
