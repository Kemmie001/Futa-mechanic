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
  return httpBase.patch("/auth/recover-password", data);
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
  return http.post("/user/find-user");
}

// Vehicle
export function getUserVehicle() {
  return http.post("/vehicle/user-vehicle");
}
// Plan maintenance
export function planMaintenance(data: object) {
  return http.post("/maint-log/plan-maint", data);
}
// Edit Plan maintenance
export function editPlanMaintenance(data: object) {
  return http.post("/maint-log/edit-planned-maint", data);
}

// fetch all maintenance
export function fetchAllMaintenance() {
  return http.post("/maint-log/all-maint-log");
}
// fetch all plan maintenance
export function fetchAllPlannedMaintenance(data: object) {
  return http.post("/maint-log/all-planned-maint", data);
}
export function fetchPlannedMaintenance(data: string) {
  return http.post(`/maint-log/all-planned-maint/${data}`);
}
export function fetchAllVehiclePlannedMaintenance(data: object) {
  return http.post("/maint-log/all-vehicles-planned-maint", data);
}
export function addFeedback(data: object) {
  return http.patch("/maint-log/maintenance-feedback", data);
}
export function changeStatus(data: object) {
  return http.patch("/maint-log/update-maint-status", data);
}
// Driver
export function fetchAllDriversLog(data: object) {
  return http.post("/drivers-log/all-logs", data);
}
export function addDriversLog(data: object) {
  return http.post("/drivers-log/new-log", data);
}
