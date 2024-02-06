<script setup lang="ts">
import VehicleLogModaal from "@/components/Modal/vehicleLogModaal.vue";
import { logList } from "../../composables/log";
import DriverLog from "@/components/driver/DriverLog.vue";
import { useDriverLog } from "@/store/drivers_log";
import { userInfo } from "@/store/user";
import { computed, onMounted, ref } from "vue";

const roller = ref(false);
const userInformation = computed(() => {
  return userInfo().userData;
});
const vehicleLogs = computed(() => {
  return useDriverLog().allDriversLog;
});
onMounted(async () => {
  if (!Object.keys(userInformation.value).length) {
    roller.value = true;
    await userInfo().fetchUserProfile();
    roller.value = false;
  }
  if (!Object.keys(vehicleLogs.value).length) {
    useDriverLog().getAllDriversLog({
      start_date: "",
      end_date: "",
    });
  }
});
const openVehicleLogModal = ref(false);
const showVehicleLogModal = () => {
  openVehicleLogModal.value = !openVehicleLogModal.value;
};
// const vehicleData = computed(() => {
//   return userInformation.value?.user_vehicle;
// });
</script>

<template>
  <div class="px-5 md:px-8">
    <div class="flex mt-8 justify-between items-center">
      <h2 class="text-3xl font-semibold">Vehicle Log</h2>
      <button @click="showVehicleLogModal" class="btn-primary py-3 px-5">
        Vehicle Log
      </button>
    </div>
    <div class="flex flex-col md:flex-row gap-4 my-10">
      <div
        class="table-container md:w-7/12 border border-[#C6DDF7] py-2 rounded-md"
      >
        <div class="mt-4 mb-6 font-light md:flex gap-5 px-5">
          <div
            class="border border-[#D0D5DD] rounded-[8px] px-2 py-2 flex items-center gap-2"
          >
            <i class="fa-solid fa-magnifying-glass text-md"></i>
            <input
              type="search"
              class="outline-none"
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
        <table class="table-auto w-full">
          <thead class="table__header">
            <tr
              class="product_table__row text-left text-[#344054] bg-[#F9FAFB]"
            >
              <th class="font-medium pl-2 text-sm py-3">Date</th>
              <th class="font-medium text-sm py-2 text-left">
                Starting Odometer
              </th>
              <th class="font-medium text-sm py-2 text-left">
                Ending Odometer
              </th>
              <th class="font-medium text-sm py-2 text-left">
                Fuel level
              </th>
              <th class="font-medium text-sm py-2 text-left">Fuel Used</th>
            </tr>
          </thead>
          <tbody>
            <DriverLog
              v-for="(log, index) in vehicleLogs?.dailyLogs"
              :dateStr="log.createdAt"
              :fuelLevel="log.endingFuelLevel"
              :startingOdometer="log.startingMileage"
              :endingOdometer="log.endingMileage"
              :id="log._id"
              :fuelUsed="log.startingFuelLevel"
            />
          </tbody>
        </table>
        <!-- <Pagination v-model="page" :rows-number="rows" :rows-per-page="5" /> -->
      </div>
      <div
        v-if="userInformation?.loggedInUser?.role === 'vehicle_assignee'"
        class="px-4 md:w-5/12 rounded-md bg-primaryI py-5"
      >
        <h2 class="text-black text-lg font-semibold">Active Driver</h2>
        <div
          class="md:-mt-10 flex items-center justify-center h-full text-center text-sm"
          v-if="userInformation?.assigned_driver?.err"
        >
          <p>No vehicle driver has been assigned to you yet</p>
        </div>
        <div v-else>
          <div class="mx-auto my-5">
            <img
              class="w-28 h-28 object-contain mx-auto rounded-full"
              src="../../assets/sellerAvatar.png"
              alt="driver"
            />
          </div>
          <div class="mt-5 text-base">
            <span class="flex flex-col gap-2 pb-2 mb-5">
              <p class="font-medium text-sm">Driver’s Name</p>
              <p class="text-gray5 text-sm">
                {{ userInformation?.assigned_driver?.lastName }}
                {{ userInformation?.assigned_driver?.firstName }}
              </p>
            </span>
            <span class="flex flex-col gap-2 pb-2 mb-5">
              <p class="font-medium text-sm">Staff ID</p>
              <p class="text-gray5 text-sm">
                {{ userInformation?.assigned_driver.staffId }}
              </p>
            </span>
            <span class="flex flex-col gap-2 pb-2 mb-5">
              <p class="font-medium text-sm">Email Address</p>
              <p class="text-gray5 text-sm">
                {{ userInformation?.assigned_driver?.email }}
              </p>
            </span>
            <span class="flex flex-col gap-2 pb-2 mb-5">
              <p class="font-medium text-sm">Phone Number</p>
              <p class="text-gray5 text-sm">
                {{ userInformation?.assigned_driver?.phone }}
              </p>
            </span>
            <span class="flex flex-col gap-2 pb-2 mb-5">
              <p class="font-medium text-sm">Driver’s License Number</p>
              <!--  <p class="text-gray5 text-sm">
                {{userInformation?.assigned_driver?.}}
              </p>  -->
            </span>
          </div>
        </div>
      </div>
      <div
        v-if="userInformation?.loggedInUser?.role === 'driver'"
        class="px-4 md:w-5/12 rounded-md bg-primaryI py-5"
      >
        <h2 class="text-black text-lg font-semibold">Vehicle Owner</h2>
        <div
          class="md:-mt-10 flex items-center justify-center h-full text-center text-sm"
          v-if="userInformation?.vehicle_assignee?.err"
        >
          <p>No vehicle owner has been assigned to you yet</p>
        </div>
        <div v-else class="">
          <div class="mx-auto my-5">
            <img
              class="w-28 h-28 object-contain mx-auto rounded-full"
              src="../../assets/sellerAvatar.png"
              alt="driver"
            />
          </div>
          <div class="mt-5 text-base">
            <span class="flex flex-col gap-2 pb-2 mb-5">
              <p class="font-medium text-sm">Owner’s Name</p>
              <p class="text-gray5 text-sm">
                {{ userInformation?.vehicle_assignee?.lastName }}
                {{ userInformation?.vehicle_assignee?.firsttName }}
              </p>
            </span>
            <span class="flex flex-col gap-2 pb-2 mb-5">
              <p class="font-medium text-sm">Position</p>
              <p class="text-gray5 text-sm">Director</p>
            </span>
            <span class="flex flex-col gap-2 pb-2 mb-5">
              <p class="font-medium text-sm">Staff ID</p>
              <p class="text-gray5 text-sm">
                {{ userInformation?.vehicle_assignee?.staffId }}
              </p>
            </span>
            <span class="flex flex-col gap-2 pb-2 mb-5">
              <p class="font-medium text-sm">Email Address</p>
              <p class="text-gray5 text-sm">babatundeabolaji@gmail.com</p>
            </span>
            <span class="flex flex-col gap-2 pb-2 mb-5">
              <p class="font-medium text-sm">Phone Number</p>
              <p class="text-gray5 text-sm">08050438765</p>
            </span>
          </div>
        </div>
      </div>
    </div>
    <VehicleLogModaal
      :close="showVehicleLogModal"
      :open="openVehicleLogModal"
      :vehicle="userInformation?.user_vehicle?._id"
    />
  </div>
</template>

<style lang="scss" scoped></style>
