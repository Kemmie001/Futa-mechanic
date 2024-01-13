<template>
  <div class="px-5 md:px-8">
    <div class="flex justify-between py-4">
      <h1 class="">Workbay</h1>
      <div class="flex gap-4 cursor-pointer items-center">
        <button @click="showPlanMaintenanceModal" class="btn-primary py-2 px-5">
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
          <input type="search" class="outline-none" placeholder="Search here" />
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
    <div v-if="!productList" class="empty-page h-screen my-4">
      <div class="text-center">
        <div class="w-32 mx-auto mb-6">
          <!-- <img
            class="w-full"
            src="../../assets/icons/empty-product-page-icon.svg"
            alt=""
          /> -->
        </div>
        <h5 class="font-semibold text-2xl mb-1">No product listed</h5>
        <p class="text-md text-[#828282] font-light lg:w-3/4 mx-auto">
          To start selling, click the 'Add New Product' button and start
          creating your first product listing
        </p>
      </div>
    </div>
    <div class="product-table py-4">
      <div class="table-container">
        <table class="table-auto w-full">
          <thead class="table__header">
            <tr
              class="product_table__row text-left text-[#344054] bg-[#F9FAFB]"
            >
              <th class="font-medium pl-2 text-sm py-3">Maintenance ID</th>
              <th class="font-medium text-sm py-2 text-left">Concern</th>
              <th class="font-medium text-sm py-2 text-left">
                Mileage (kilometer)
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
              :milage="maintenance.milage"
              :status="maintenance.status"
              :personnel="maintenance.personnel"
              :concern="maintenance.concern"
              :id="maintenance.id"
            />
          </tbody>
        </table>
        <Pagination v-model="page" :rows-number="rows" :rows-per-page="5" />
      </div>
    </div>
    <PlanMaintenance
      :close="showPlanMaintenanceModal"
      :open="openPlanMaintenanceModal"
    />
  </div>
</template>

<script setup lang="ts">
import PlanMaintenance from "@/components/Modal/planMaintenance.vue";
import { maintenanceList } from "../../composables/maintenances";
import maintenanceRow from "@/components/maintenance/MaintenanceRow.vue";
import Pagination from "@/components/pagination.vue";
import { ref } from "vue";
const productList: any[] = [];
const page = ref(1);
const rows = ref(0);
const openPlanMaintenanceModal = ref(false);
const showPlanMaintenanceModal = () => {
  console.log("hey");
  openPlanMaintenanceModal.value = !openPlanMaintenanceModal.value;
};
</script>

<style lang="scss">
.active {
  color: #cc8f56;
  border-bottom: 1px solid #cc8f56;
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
