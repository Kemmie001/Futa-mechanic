<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { userInfo } from "@/store/user";
const vehicleData = computed(() => {
  return userInfo().vehicleData;
});
const roller = ref(false);

onMounted(async () => {
  if (!Object.keys(vehicleData.value).length) {
    roller.value = true;
    await userInfo().fetchUserVehicle();
    roller.value = false;
  }
});
</script>

<template>
  <div class="flex px-8 flex-col md:flex-row gap-10 my-10">
    <div>
      <h1 class="mb-5 font-bold">Vehicle Details</h1>
      <div
        v-if="roller"
        class="animate-spin roller flex items-center justify-center"
      ></div>
      <div>
        <img src="../../assets/img/car.png" alt="car" />
      </div>
    </div>
    <div class="my-10">
      <p class="text-sm font-normal">{{ vehicleData.brand }}</p>
      <h1 class="mb-8 font-bold text-[32px]">2024 Mercedes Benz GLC</h1>
      <div class="mt-4 text-base">
        <span class="flex items-center gap-3 pb-4">
          <p class="text-sm">Colour:</p>
          <p class="text-lg font-semibold">Black</p>
        </span>
        <span class="flex items-center gap-3 pb-4">
          <p class="text-sm">Year Of Manufacture:</p>
          <p class="text-lg font-semibold">2014</p>
        </span>
        <span class="flex items-center gap-3 pb-4">
          <p class="text-sm">Plate Number:</p>
          <p class="text-lg font-semibold">{{ vehicleData.plate_no }}</p>
        </span>
        <span class="flex items-center gap-3 pb-4">
          <p class="text-sm">Engine Number:</p>
          <p class="text-lg font-semibold">{{ vehicleData.engine_no }}</p>
        </span>
        <span class="flex items-center gap-3 pb-4">
          <p class="text-sm">Chassis Number:</p>
          <p class="text-lg font-semibold">SV30-01692</p>
        </span>
        <span class="flex items-center gap-3 pb-4">
          <p class="text-sm">Vehicle Type:</p>
          <p class="text-lg font-semibold">{{ vehicleData.vehicle_type }}</p>
        </span>
        <span class="flex items-center gap-3 pb-4">
          <p class="text-sm">Fuel Type:</p>
          <p class="text-lg font-semibold">Black</p>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
