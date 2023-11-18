<script setup lang="ts">
import { logList } from "../../composables/log.ts";
import DriverLog from "../../components/driver/DriverLog";
</script>

<template>
  <div class="px-5 px-8">
    <h2 class="mt-8 text-3xl font-semibold">Driver’s Log</h2>
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
              v-for="(log, index) in logList"
              :dateStr="log.date"
              :fuelLevel="log.fuelLevel"
              :startingOdometer="log.startingOdometer"
              :endingOdometer="log.endingOdometer"
              :id="log.id"
              :fuelUsed="log.fuelUsed"
            />
          </tbody>
        </table>
        <Pagination v-model="page" :rows-number="rows" :rows-per-page="5" />
      </div>
      <div class="px-4 md:w-5/12 rounded-md bg-primaryI py-5">
        <h2 class="text-black text-lg font-semibold">Active Driver</h2>
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
            <p class="text-gray5 text-sm">Babatunde Abolaji</p>
          </span>
          <span class="flex flex-col gap-2 pb-2 mb-5">
            <p class="font-medium text-sm">Staff ID</p>
            <p class="text-gray5 text-sm">FUTA/DRV/1010</p>
          </span>
          <span class="flex flex-col gap-2 pb-2 mb-5">
            <p class="font-medium text-sm">Email Address</p>
            <p class="text-gray5 text-sm">babatundeabolaji@gmail.com</p>
          </span>
          <span class="flex flex-col gap-2 pb-2 mb-5">
            <p class="font-medium text-sm">Phone Number</p>
            <p class="text-gray5 text-sm">08050438765</p>
          </span>
          <span class="flex flex-col gap-2 pb-2 mb-5">
            <p class="font-medium text-sm">Driver’s License Number</p>
            <p class="text-gray5 text-sm">AKR101010AB22</p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
