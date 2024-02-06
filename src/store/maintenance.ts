import {
  fetchAllMaintenance,
  fetchAllPlannedMaintenance,
} from "@/service/endpoints";
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
  concerns: string;
  createdAt: Date;
  plannedBy: string;
  proposedDate: Date;
  services: string[];
  updatedAt: Date;
  vehicle: string;
}

export const useMaintenance = defineStore("maintenance", {
  state: () => {
    return {
      allMaintenance: [],
      allPlannedMaintenance: {} as AllPlannedMaintenance,
    };
  },
  actions: {
    async getAllMaintenance() {
      console.log(";;;");
      try {
        const { data } = await fetchAllMaintenance();
        this.allMaintenance = data;
        console.log(";;;");
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
    async getAllPlannedMaintenance(info: Object) {
      try {
        const { data } = await fetchAllPlannedMaintenance(info);
        this.allPlannedMaintenance = data;
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
