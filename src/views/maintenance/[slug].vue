<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
</script>

<template>
  <div class="px-5">
    <div class="flex gap-3 my-8 text-gray5">
      <button
        @click="router.go(-1)"
        class="bg-primaryI rounded-sm w-7 h-7 flex justify-center items-center text-primary"
      >
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <p class="">Go Back</p>
      <span class="flex gap-1">
        <p>Maintenance</p>
        /
        <p class="text-primary">Info Page</p>
      </span>
    </div>
    <div class="flex justify-between items-center">
      <span class="flex flex-col">
        <h3 class="text-primary9 font-bold text-2xl">
          {{ route.params.slug }}
        </h3>
        <p class="text-base text-gray6">Maintenance ID</p>
      </span>
      <button class="border border-primary px-3 py-2 rounded-md text-primary">
        Export
      </button>
    </div>
    <div class="md:flex gap-2">
      <div class="w-full md:w-6/12 mt-4">
        <div class="border border-[#E4E7EC] rounded-md">
          <div class="border-b border-[#F7F9FC] px-4 pt-4">
            <p class="text-sm text-gray5">Services</p>
            <div class="flex flex-wrap gap-4 my-2">
              <span
                class="bg-primaryI px-2 py-1 text-primary text-sm rounded-2xl"
                >Pump Tyre</span
              >
              <span
                class="bg-primaryI px-2 py-1 text-primary text-sm rounded-2xl"
                >Change Battery</span
              >
              <span
                class="bg-primaryI px-2 py-1 text-primary text-sm rounded-2xl"
                >Oil Change</span
              >
            </div>
          </div>
          <div class="border-b border-[#F7F9FC] px-4 pt-4">
            <p class="text-sm text-gray5 pb-1">Concerns</p>
            <p class="text-base text-primary9 pb-2">
              Lorem ipsum avec sont tues cest istum Lorem ipsum avec sont tues
              cest istum orem ipsum avec sont tues cest istum tr
            </p>
          </div>
          <div class="border-b border-[#F7F9FC] px-4 pt-4">
            <p class="text-sm text-gray5">Mileage (kilometer)</p>
            <p class="text-base text-primary9 pb-2">
              1200 km
            </p>
          </div>
          <div class="border-b border-[#F7F9FC] px-4 pt-4">
            <p class="text-sm text-gray5 pb-1">Maintenance Date</p>
            <p class="text-base text-primary9 pb-2">
              Friday, Nov 10, 2023
            </p>
          </div>
          <div class="border-b border-[#F7F9FC] px-4 pt-4">
            <p class="text-sm text-gray5 pb-1">Maintenance Time</p>
            <p class="text-base text-primary9 pb-2">
              12:00 pm
            </p>
          </div>
          <div class="border-b border-[#F7F9FC] px-4 pt-4">
            <p class="text-sm text-gray5 pb-1">Personnel In-Charge</p>
            <p class="text-base text-primary9 pb-2">
              Nil
            </p>
          </div>
        </div>
        <div class="border border-[#E4E7EC] rounded-md">
          <p class="text-sm text-gray5 pb-1">Status</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
