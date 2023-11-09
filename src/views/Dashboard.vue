<script setup lang="ts">
import UpcomingMaintenance from "@/components/UpcomingMaintenance.vue";
</script>

<template>
  <div class="flex px-4 flex-col lg:flex-row gap-4">
    <div class="lg:w-7/12">
      <div class="py-5">
        <h2 class="font-bold text-primary9 text-2xl">Welcome Oluwakemi</h2>
        <p class="text-base text-[#475367] py-1">
          It’s a sunny day today, we hope to assist you on your car maintenance
          journey
        </p>
      </div>
      <div class="mt-4 flex flex-wrap gap-4 text-center">
        <div
          class="flex flex-col lg:w-[31%] h-32 items-center gap-4 justify-center px-6 border border-primary2 rounded-md"
        >
          <h2 class="font-bold text-primary5 text-2xl">30 litres</h2>
          <p class="font-medium text-primary">Fuel Consumption</p>
        </div>
        <div
          class="flex flex-col lg:w-[31%] h-32 items-center justify-center px-6 border border-primary2 rounded-md"
        >
          <h2 class="font-bold text-primary5 text-2xl">327km</h2>
          <p class="font-medium text-primary">Travel Distance</p>
        </div>
        <div
          class="flex flex-col lg:w-[31%] h-32 items-center justify-center px-5 border border-primary2 rounded-md"
        >
          <h2 class="font-bold text-primary5 text-2xl">0024</h2>
          <p class="font-medium text-primary">Total Maintenance Performed</p>
        </div>
      </div>
    </div>
    <div class="lg:w-5/12 bg-primaryI py-5 px-2">
      <div class="text-right w-full">
        <button class="btn-primary px-4 py-3">
          Register Driver
        </button>
      </div>
      <UpcomingMaintenance class="my-4" />
    </div>
  </div>
</template>
