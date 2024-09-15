export const setToken = (token) => {
  localStorage.setItem("R-TONKEN", token);
};

export const getToken = () => {
  return localStorage.getItem("R-TONKEN") || "";
};
