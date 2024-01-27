import { http, httpBase } from "./http";
export function registerMe(data: object) {
  return httpBase.post("/auth/signup", data);
}
export function logMeIn(data: object) {
  return httpBase.post("/auth/login", data);
}
export function recoverPassword(data: object) {
  return httpBase.post("/auth/password-recovery-code", data);
}
export function recoverPasswordCode(data: object) {
  return httpBase.post("/auth/recovery-code-verify", data);
}
export function resetNewPassword(data: object) {
  return httpBase.post("/auth/recover-password", data);
}

export const isLoggedIn = () => {
  let user = window.localStorage.getItem("futaToken");
  // user = user ? JSON.parse(user) : false;
  return user;
};
export const setUser = (data: any) => {
  const { token, userEmail } = data;
  const thisUser = { userEmail, token };
  window.localStorage.setItem("revv-user", JSON.stringify(thisUser));
  return thisUser;
};

export function getUser() {
  return http.get("/user/find-user");
}

// Vehicle
export function getUserVehicle() {
  return http.get("/vehicle/user-vehicle");
}
