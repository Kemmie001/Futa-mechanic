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
  <div class="my-10 px-8">
    <h1 class="mb-5 font-bold">Vehicle Details</h1>
    <div
      v-if="roller"
      class="animate-spin roller flex items-center justify-center"
    ></div>
    <div
      v-if="Object.keys(vehicleData).length"
      class="flex flex-col md:flex-row gap-10 my-10"
    >
      <div>
        <div class="w-[350px]">
          <img
            :src="vehicleData?.vehicle_image"
            :alt="vehicleData?.vehicle_name"
          />
        </div>
      </div>
      <div class="capitalize">
        <p class="text-sm font-normal">{{ vehicleData?.brand }}</p>
        <h1 class="mb-8 font-bold text-[32px]">
          {{ vehicleData?.vehicle_name }}
        </h1>
        <div class="mt-4 text-base">
          <span class="flex items-center gap-3 pb-4">
            <p class="text-sm">Colour:</p>
            <p class="text-lg font-semibold">
              {{ vehicleData?.vehicle_color }}
            </p>
          </span>
          <span class="flex items-center gap-3 pb-4">
            <p class="text-sm">Year Of Manufacture:</p>
            <p class="text-lg font-semibold">
              {{ vehicleData?.manufacture_year }}
            </p>
          </span>
          <span class="flex items-center gap-3 pb-4">
            <p class="text-sm">Plate Number:</p>
            <p class="text-lg font-semibold">{{ vehicleData?.plate_no }}</p>
          </span>
          <span class="flex items-center gap-3 pb-4">
            <p class="text-sm">Engine Number:</p>
            <p class="text-lg font-semibold">{{ vehicleData?.engine_no }}</p>
          </span>
          <span class="flex items-center gap-3 pb-4">
            <p class="text-sm">Chassis Number:</p>
            <p class="text-lg font-semibold">{{ vehicleData?.chasis_no }}</p>
          </span>
          <span class="flex items-center gap-3 pb-4">
            <p class="text-sm">Vehicle Type:</p>
            <p class="text-lg font-semibold">{{ vehicleData?.vehicle_type }}</p>
          </span>
          <span class="flex items-center gap-3 pb-4">
            <p class="text-sm">Fuel Type:</p>
            <p class="text-lg font-semibold">{{ vehicleData?.fuel_type }}</p>
          </span>
        </div>
      </div>
    </div>
    <div class="py-10 text-center text-lg" v-else>
      No vehicle has been assigned to you yet
    </div>
  </div>
</template>

<style lang="css" scoped></style>
