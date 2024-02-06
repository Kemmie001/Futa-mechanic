import { fetchAllDriversLog } from "@/service/endpoints";
import { defineStore } from "pinia";
import { useErrorInfo } from "./error";
// import { ProfileDetails, userDetails } from "@/interfaces/profileInfo";

export interface AllVehicleLogs {
  nbHit: number;
  dailyLogs: DailyLog[];
  assignedDriver: AssignedDriver;
}

export interface AssignedDriver {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  staffId: string;
  phone: number;
  role: string;
  pic: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  vehicle: string;
}

export interface DailyLog {
  _id: string;
  vehicle: string;
  currentLocation?: string;
  startingMileage: string;
  endingMileage: string;
  startingFuelLevel: string;
  endingFuelLevel: string;
  addedBy: string;
  logTime: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export const useDriverLog = defineStore("driver_log", {
  state: () => {
    return {
      allDriversLog: {} as AllVehicleLogs,
    };
  },
  actions: {
    async getAllDriversLog(info: object) {
      try {
        const { data } = await fetchAllDriversLog(info);
        this.allDriversLog = data;
        console.log("ll ", this.allDriversLog);
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
  },
});
