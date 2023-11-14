import { http, httpBase } from "./http";
export function registerMe(data: object) {
  return httpBase.post("/auth/signup", data);
}
export function logMeIn(data: object) {
  return httpBase.post("/auth/login", data);
}
export const isLoggedIn = () => {
  let user = window.localStorage.getItem("revv-user");
  user = user ? JSON.parse(user) : false;
  return user;
};
export const setUser = (data: any) => {
  const { token, userEmail } = data;
  const thisUser = { userEmail, token };
  window.localStorage.setItem("revv-user", JSON.stringify(thisUser));
  return thisUser;
};
