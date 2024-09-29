export const setToken = (token) => {
  localStorage.setItem("R-TOKEN", token);
};

export const getToken = () => {
  return localStorage.getItem("R-TOKEN") || "";
};

export const setLanguage = (token) => {
  localStorage.setItem("R-Language", token);
};

export const getLanguage = () => {
  return localStorage.getItem("R-Language") || "";
};
