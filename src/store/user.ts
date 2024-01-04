import { getUser, getUserVehicle } from "@/service/endpoints";
import { defineStore } from "pinia";
import { useErrorInfo } from "./error";
// import { ProfileDetails, userDetails } from "@/interfaces/profileInfo";

export interface userDetails {
  daily_logs: Array<string>;
  maint_log: Array<any>;
  nbDailyLog: number;
  nbMaintLog: number;
  nbPlannedMaint: number;
  planned_maint: Array<string>;
  assigned_driver: {
    __v: number;
    _id: string;
    createdAt: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: number;
    pic: string;
    role: string;
    staffId: string;
    updatedAt: string;
    err: string;
  };
  user_vehicle: any;
  loggedInUser: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    staffId: string;
    phone: number;
    role: string;
    pic: string;
    vehicle: string;
    updatedAt: string;
    createdAt: string;
    _v: number;
    driver: any;
  };

  vehicle_assignee: any;
}
export interface userVehicle {
  _id: string;
  brand: string;
  plate_no: string;
  service_mileage: string;
  current_mileage: string;
  daily_mileage: string;
  engine_no: string;
  assigned_to: Array<any>;
  added_by: string;
  current_state: Array<any>;
  vehicle_type: string;
  department: Array<any>;
  maint_logs: Array<any>;
  planned_maint: Array<any>;
  daily_log: Array<any>;
  current_location: string;
  chasis_no: string;
  manufacture_year: string;
  vehicle_name: string;
  fuel_type: string;
  vehicle_color: string;
  vehicle_image: string;
  createdAt: string;
  updatedAt: string;

  __v: 0;
}
export const userInfo = defineStore("profile", {
  state: () => {
    return {
      userData: {} as userDetails,
      vehicleData: {} as userVehicle,
    };
  },
  actions: {
    async fetchUserProfile() {
      try {
        const { data } = await getUser();
        this.userData = data;
        console.log(this.userData);
      } catch (e) {
        const error = e as any;
        console.log(error);
        useErrorInfo().updateErrorMsg(
          error?.response?.data?.err ?? "An error occurred",
          false
        );
      } finally {
      }
    },
    async fetchUserVehicle() {
      try {
        const { data } = await getUserVehicle();
        this.vehicleData = data.userVehicle;
      } catch (e) {
        const error = e as any;
        console.log(error.response);
        useErrorInfo().updateErrorMsg(
          error?.response?.data?.err ?? "An error occurred",
          false
        );
      } finally {
      }
    },
  },
});
