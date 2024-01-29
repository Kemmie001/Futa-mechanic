import { fetchAllDriversLog } from "@/service/endpoints";
import { defineStore } from "pinia";
import { useErrorInfo } from "./error";
// import { ProfileDetails, userDetails } from "@/interfaces/profileInfo";

export interface AllPlannedMaintenance {
  allPlannedMaint: AllPlannedMaint[];
  nbHit: number;
}

export interface AllPlannedMaint {
  __v: number;
  _id: string;
  concerns: string[];
  createdAt: Date;
  plannedBy: string;
  proposedTime: Date;
  services: string[];
  updatedAt: Date;
  vehicle: string;
}

export const useDriverLog = defineStore("driver_log", {
  state: () => {
    return {
      allDriversLog: [],
    };
  },
  actions: {
    async getAllDriversLog(info: object) {
      try {
        const { data } = await fetchAllDriversLog(info);
        this.allDriversLog = data;
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
