import {
  fetchAllMaintenance,
  fetchAllPlannedMaintenance,
  fetchAllVehiclePlannedMaintenance,
  fetchPlannedMaintenance,
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
  status: string;
}
export interface Allvehicleplannedmaintenance {
  nbHit: number;
  allVehiclesPlannedMaint: AllVehiclesPlannedMaint[];
}

export interface AllVehiclesPlannedMaint {
  personnelFeedback: PersonnelFeedback;
  _id: string;
  maint_id: string;
  vehicle: string;
  services: string[];
  concerns: string;
  plannedBy: string;
  proposedDate: Date;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  plannersFeedback?: PlannersFeedback;
}

export interface PersonnelFeedback {
  repair_done: string[];
  images: any[];
  issues?: string;
  completion_date?: string;
}

export interface PlannersFeedback {
  rating: string;
  feedback: string;
}

export const useMaintenance = defineStore("maintenance", {
  state: () => {
    return {
      allVehiclePlannedMaintenance: {} as Allvehicleplannedmaintenance,
      allMaintenance: [],
      allPlannedMaintenance: {} as AllPlannedMaintenance,
      plannedMaintenance: {} as any,
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
    async getPlannedMaintenance(info: any) {
      try {
        const { data } = await fetchPlannedMaintenance(info);
        this.plannedMaintenance = data;
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
    async getAllVehiclesPlannedMaintenance(info: Object) {
      try {
        const { data } = await fetchAllVehiclePlannedMaintenance(info);
        this.allVehiclePlannedMaintenance = data;
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
