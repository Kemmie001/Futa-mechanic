<template>
  <div class="px-5 md:px-8">
    <div class="flex justify-between py-4">
      <h1 class="">Workbay</h1>
      <div class="flex gap-4 cursor-pointer items-center">
        <button
          v-if="userInformation?.loggedInUser?.role !== 'maintenance_personnel'"
          @click="showPlanMaintenanceModal"
          class="btn-primary py-2 px-5"
        >
          Plan Maintenance
        </button>
      </div>
    </div>
    <div class="md:flex text-[#344054] justify-between items-center">
      <div class="my-4 font-light md:flex gap-5 justify-between">
        <div
          class="border border-[#D0D5DD] rounded-[8px] px-2 py-2 flex items-center gap-2"
        >
          <i class="fa-solid fa-magnifying-glass text-lg"></i>
          <input
            type="search"
            class="outline-none"
            v-model="searchMaint"
            placeholder="Search here"
          />
        </div>
        <button
          class="flex px-2 py-2 mt-4 md:mt-0 items-center border border-[#D0D5DD] rounded-[8px] gap-2"
        >
          <img src="../../assets/icons/filter.png" alt="filter" />
          <p>Filter</p>
        </button>
      </div>
      <button
        class="flex px-2 py-2 items-center border border-[#D0D5DD] rounded-[8px] gap-2"
      >
        <i class="fa-solid fa-calendar-days"></i>
        <p>Select dates</p>
        <i class="fa-solid fa-angle-down ml-2"></i>
      </button>
    </div>
    <div
      v-if="roller"
      class="animate-spin roller flex items-center justify-center"
    ></div>
    <div
      v-if="userInformation?.loggedInUser?.role !== 'maintenance_personnel'"
      class=""
    >
      <div v-if="!maintenanceList && !roller" class="empty-page h-screen my-4">
        <div class="text-center">
          <div class="w-32 mx-auto mb-6"></div>
          <h5 class="font-semibold text-2xl mb-1">
            No planned maintenance yet
          </h5>
          <p class="text-md text-[#828282] font-light lg:w-3/4 mx-auto">
            To start planning, click the 'plan maintenance' button and start
            planning all your maintenance activities
          </p>
        </div>
      </div>
      <div v-else class="product-table py-4">
        <div class="table-container">
          <table class="table-auto w-full">
            <thead class="table__header">
              <tr
                class="product_table__row text-left text-[#344054] bg-[#F9FAFB]"
              >
                <th class="font-medium pl-2 text-sm py-3">Maintenance ID</th>
                <th class="font-medium text-sm py-2 text-left">Concern</th>
                <th class="font-medium text-sm py-2 text-left">
                  Due Date
                </th>
                <th class="font-medium text-sm py-2 text-left">
                  Personnel In-charge
                </th>
                <th class="font-medium text-sm py-2 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              <maintenanceRow
                v-for="(maintenance, index) in maintenanceList"
                :concern="maintenance.concerns"
                :id="maintenance.maint_id"
                :proposed-date="maintenance?.proposedDate"
                :status="maintenance?.status"
                :m="maintenance?._id"
              />
            </tbody>
          </table>
          <!-- <Pagination v-model="page" :rows-number="rows" :rows-per-page="5" /> -->
        </div>
      </div>
      <PlanMaintenance
        :close="showPlanMaintenanceModal"
        :open="openPlanMaintenanceModal"
        :vehicle="vehicleData._id"
      />
    </div>
    <div class="" v-else>
      <!-- {{ allVehicleMaintenanceList }} -->
      <div
        v-if="!allVehicleMaintenanceList && !roller"
        class="empty-page h-screen my-4"
      >
        <div class="text-center">
          <div class="w-32 mx-auto mb-6"></div>
          <h5 class="font-semibold text-2xl mb-1">
            No planned maintenance yet
          </h5>
          <p class="text-md text-[#828282] font-light lg:w-3/4 mx-auto">
            To start planning, click the 'plan maintenance' button and start
            planning all your maintenance activities
          </p>
        </div>
      </div>
      <div v-else class="product-table py-4">
        <div class="table-container">
          <table class="table-auto w-full">
            <thead class="table__header">
              <tr
                class="product_table__row text-left text-[#344054] bg-[#F9FAFB]"
              >
                <th class="font-medium pl-2 text-sm py-3">Maintenance ID</th>
                <th class="font-medium text-sm py-2 text-left">Concern</th>
                <th class="font-medium text-sm py-2 text-left">
                  Due Date
                </th>
                <th class="font-medium text-sm py-2 text-left">
                  Personnel In-charge
                </th>
                <th class="font-medium text-sm py-2 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              <maintenanceRow
                v-for="(maintenance, index) in allVehicleMaintenanceList"
                :concern="maintenance.concerns"
                :id="maintenance.maint_id"
                :proposed-date="maintenance?.proposedDate"
                :status="maintenance?.status"
                :m="maintenance?._id"
              />
            </tbody>
          </table>

          <div
            class="flex md:justify-end cursor-pointer justify-center gap-8 my-8"
          >
            <button :disabled="currentPage == 1" @click="prevPage">
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <div class="flex gap-4 flex-wrap">
              <button
                v-for="(pageNumber, index) in totalPages"
                :key="index"
                :class="{ active: currentPage === pageNumber }"
                @click="setPage(pageNumber)"
              >
                {{ pageNumber }}
              </button>
            </div>
            <button :disabled="currentPage >= totalPages" @click="nextPage">
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
          <!-- <Pagination v-model="page" :rows-number="rows" :rows-per-page="5" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PlanMaintenance from "@/components/Modal/planMaintenance.vue";

import maintenanceRow from "@/components/maintenance/MaintenanceRow.vue";
import Pagination from "@/components/pagination.vue";
import { computed, onMounted, ref } from "vue";
import { useErrorInfo } from "@/store/error";
import { useMaintenance } from "@/store/maintenance";
import { userInfo } from "@/store/user";
const searchMaint = ref("");
const currentPage = ref(1);
const itemsPerPage = ref(10);
const totalPages = computed(() => {
  if (allVehicleMaintenanceList.value.length === 0) {
    return 1;
  } else {
    return Math.ceil(
      allVehicleMaintenanceList.value.length / itemsPerPage.value
    );
  }
});
const setPage = (pageNumber: number) => {
  currentPage.value = pageNumber;
};
const nextPage = () => {
  currentPage.value++;
};
const prevPage = () => {
  currentPage.value--;
};
const openPlanMaintenanceModal = ref(false);
const showPlanMaintenanceModal = () => {
  console.log("hey");
  openPlanMaintenanceModal.value = !openPlanMaintenanceModal.value;
};
const maintenanceList = computed(() => {
  const maint = useMaintenance().allPlannedMaintenance.allPlannedMaint;
  if (maint) {
    return maint.filter((maintenance) =>
      maintenance.concerns[0]
        .toLowerCase()
        .includes(searchMaint.value.toLowerCase())
    );
  } else {
    return maint;
  }
});
const allVehicleMaintenanceList = computed(() => {
  const index = currentPage.value * itemsPerPage.value - itemsPerPage.value;
  const maint = useMaintenance()?.allVehiclePlannedMaintenance?.allVehiclesPlannedMaint.slice(
    index,
    index + itemsPerPage.value
  );
  if (maint) {
    return maint.filter((maintenance) =>
      maintenance.concerns
        .toLowerCase()
        .includes(searchMaint.value.toLowerCase())
    );
  } else {
    return maint;
  }
});
const userInformation = computed(() => {
  return userInfo().userData;
});
const vehicleData = computed(() => {
  return userInfo().vehicleData;
});

const customError = useErrorInfo();
const roller = ref(false);
onMounted(async () => {
  if (!userInformation.value) {
    roller.value = true;
    await userInfo().fetchUserProfile();
    roller.value = false;
  }
});
</script>

<style lang="scss">
.active {
  color: black;
  /* border-bottom: 1px solid #cc8f56; */
  .num {
    background: #cc8f56;
    color: #fff;
  }
}
.table__header {
  font-weight: normal;
  font-size: 14px;
}

tbody > .product_table__row {
  border-bottom: 1px solid #dfdfdf;
  background-color: #fff;
}

.table__row--last {
  border-bottom: 0;
}
</style>
