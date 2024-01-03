import { defineStore } from "pinia";
// import { ProfileDetails, userDetails } from "@/interfaces/profileInfo";

export interface userDetails {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  staffId: string;
  phone: number;
  role: string;
  pic: string;
  vehicle: Array<string>;
  createdAt: string;
  updatedAt: string;
  _v: number;
}
export const regInfo = defineStore("register", {
  state: () => {
    return {
      userData: {} as userDetails,
    };
  },
  actions: {
    updateUserData(data: userDetails) {
      this.userData = data;
    },
  },
});
