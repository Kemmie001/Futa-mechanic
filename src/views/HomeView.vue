<script setup lang="ts">
import { ref } from "vue";
const heroImage = ref(1);
const showHeroImage = (num: number) => {
  heroImage.value = num;
};
</script>

<template>
  <div class="md:pt-10">
    <div
      class="flex justify-between gap-10 items-center px-8 md:px-0 md:pl-24 py-8 flex-col md:flex-row"
    >
      <div class="md:w-5/12">
        <h1 class="home-heading text-dark">
          Efficient Vehicle Management Made Easy
        </h1>
        <p class="text-sm md:text-md lg:text-lg my-3 md:my-6">
          From preventive maintenance scheduling to repair tracking, this system
          is designed to simplified to allow you experience seamless management
          and enhanced productivity.
        </p>
        <button class="px-6 mt-2 py-4 text-md font-medium btn-primary">
          Create an Account
        </button>
      </div>
      <div class="md:w-6/12 w-full overflow-hidden">
        <!-- <div class="bg-[#E3F1FF] w-[calc(100%-176px)] h-10 float-right"></div> -->
        <transition name="slide-left" mode="out-in">
          <img
            v-if="heroImage === 1"
            class="w-full"
            src="../assets/home-img.png"
            alt=""
          />
          <img
            class="w-full"
            v-else-if="heroImage === 2"
            src="../assets/img/hero2.png"
            alt=""
          />
          <img
            class="w-full"
            v-else-if="heroImage === 3"
            src="../assets/img/hero3.png"
            alt=""
          />
          <img v-else class="w-full" src="../assets/img/hero4.png" alt="" />
        </transition>

        <div
          class="bg-[#E3F1FF] cursor-pointer rounded-md w-[calc(100%-176px)] pl-4 items-center h-24 float-right flex justify-around"
        >
          <div class="" @click="showHeroImage(1)">
            <img
              class="w-16 h-14 rounded-md"
              src="../assets/home-img.png"
              alt=""
            />
          </div>
          <div class="" @click="showHeroImage(2)">
            <img
              class="w-16 h-12 rounded-md"
              src="../assets/img/hero2.png"
              alt=""
            />
          </div>
          <div class="" @click="showHeroImage(3)">
            <img
              class="w-16 h-12 rounded-md"
              src="../assets/img/hero3.png"
              alt=""
            />
          </div>
          <div class="" @click="showHeroImage(4)">
            <img
              class="w-16 h-12 rounded-md"
              src="../assets/img/hero4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="px-8 md:px-24 bg-[#E3F1FF] my-20 py-10 md:py-16">
      <h3
        class="font-bold text-3xl md:text-4xl text-center md:w-10/12 lg:w-8/12 mx-auto"
      >
        Discover How our Vehicle Maintenance Web App Simplifies Your Life
      </h3>
      <div
        class="grid md:grid-cols-2 lg:w-10/12 mx-auto place-items-center gap-y-7 gap-x-4 mt-10"
      >
        <div
          class="bg-white rounded-md text-primary cursor-pointer group hover:bg-primary hover:text-white px-6 py-6"
        >
          <h6 class="font-medium text-2xl py-4">
            Hassle-Free Maintenance Scheduling
          </h6>
          <p class="text-md mb-4">
            Our user-friendly interface allows you to easily schedule vehicle
            maintenance, track service history, and receive reminders for
            upcoming maintenance tasks. Say goodbye to missed appointments and
            unexpected breakdowns.
          </p>
        </div>
        <div
          class="bg-white rounded-md lg:h-full text-primary cursor-pointer group hover:bg-primary hover:text-white px-6 py-6"
        >
          <h6 class="font-medium text-2xl py-4">Cost and Time Savings</h6>
          <p class="text-md mb-4">
            Our advanced analytics and proactive maintenance approach help
            optimize your fleet's performance, ultimately saving you both time
            and money. Minimize downtime, reduce unexpected repairs, and
            maximize the lifespan of your vehicles.
          </p>
        </div>
        <div
          class="bg-white rounded-md text-primary cursor-pointer hover:bg-primary hover:text-white px-6 py-6"
        >
          <h6 class="font-medium text-2xl py-4">
            Simplified Inventory Management
          </h6>
          <p class="text-md mb-4">
            With our inventory management feature, you can efficiently track and
            manage spare parts and supplies. Avoid unnecessary purchases, keep
            inventory levels optimized, and ensure you always have the right
            parts on-hand when needed.
          </p>
        </div>
        <div
          class="bg-white rounded-md text-primary cursor-pointer hover:bg-primary hover:text-white px-6 py-6"
        >
          <h6 class="font-medium text-2xl py-4">
            Enhanced Safety and Compliance
          </h6>
          <p class="text-md mb-4">
            Stay on top of safety regulations and ensure your vehicles are in
            compliance with our built-in safety checks and maintenance logs.
            Maintain a safe working environment for your drivers and ensure your
            fleet meets all industry standards.
          </p>
        </div>
      </div>
      <div
        class="bg-white lg:w-5/12 mx-auto my-7 rounded-md text-primary cursor-pointer hover:bg-primary hover:text-white px-6 py-6"
      >
        <h6 class="font-medium text-2xl py-4">
          Comprehensive Reporting and Analysis
        </h6>
        <p class="text-md mb-4">
          Gain valuable insights into your fleet's maintenance activities with
          our robust reporting tools. Monitor key performance indicators,
          identify trends, and make data-driven decisions to improve the overall
          efficiency of your fleet.
        </p>
      </div>
    </div>
    <div class="px-8 md:px-24 my-20">
      <div class="md:w-10/12 lg:w-8/12 mx-auto text-center">
        <h3 class="font-bold text-3xl md:text-4xl text-[#001633);]">
          Get Access To Diverse Services
        </h3>
        <p class="py-2 text-lg leading-8 md:font-medium">
          We show you loads of service options you get to when you use this
          application
        </p>
      </div>
      <div class="my-6 md:my-16">
        <img
          class="hidden md:block"
          src="../assets/img/services.png"
          alt="services"
        />
        <div class="flex flex-col gap-5 md:hidden">
          <div
            class="bg-[#E3F1FF] rounded-md py-4 text-[#034592] leading-8 flex justify-center items-center"
          >
            <p>Task Scheduling</p>
          </div>
          <div
            class="bg-[#E3F1FF] rounded-md py-4 text-[#034592] leading-8 flex justify-center items-center"
          >
            <p>Repair Requests</p>
          </div>
          <div
            class="bg-[#E3F1FF] rounded-md py-4 text-[#034592] leading-8 flex justify-center items-center"
          >
            <p>GPS Tracking</p>
          </div>
          <div
            class="bg-[#E3F1FF] rounded-md py-4 text-[#034592] leading-8 flex justify-center items-center"
          >
            <p>Inspection Checklist</p>
          </div>
          <div
            class="bg-[#E3F1FF] rounded-md py-4 text-[#034592] leading-8 flex justify-center items-center"
          >
            <p>Customized reporting</p>
          </div>
          <div
            class="bg-[#E3F1FF] rounded-md py-4 text-[#034592] leading-8 flex justify-center items-center"
          >
            <p>Invetory Management</p>
          </div>
          <div
            class="bg-[#E3F1FF] rounded-md py-4 text-[#034592] leading-8 flex justify-center items-center"
          >
            <p>Managing work Orders</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-primary text-white px-8 md:px-24 py-10">
      <div class="md:flex justify-between items-start">
        <div class="md:w-4/12">
          <h5 class="text-2xl font-semibold">
            Take your designs to new dimensions
          </h5>
          <p class="text-sm leading-6 py-1">
            Let us unleash our creativity and expertise to create designs that
            deliver extraordinary results.
          </p>
        </div>
        <button class="bg-white rounded-md text-primary px-5 py-2">
          Send us a message
        </button>
      </div>
      <div
        class="md:flex justify-between items-center py-5 px-4 my-10 bg-[#E3F1FF] rounded-md"
      >
        <div class="text-white flex gap-4 text-sm">
          <span
            class="bg-primary w-6 h-6 rounded-full flex items-center justify-center"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </span>
          <span
            class="bg-primary w-6 h-6 rounded-full flex items-center justify-center"
          >
            <i class="fa-brands fa-x-twitter"></i>
          </span>
          <span
            class="bg-primary w-6 h-6 rounded-full flex items-center justify-center"
          >
            <i class="fa-brands fa-instagram"></i>
          </span>
          <span
            class="bg-primary w-6 h-6 rounded-full flex items-center justify-center"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </span>
        </div>
        <p class="text-sm text-[#1D2739]">© 2023 Rayna. All rights reserved.</p>
        <p class="text-lg text-[#1D2739]">Futa mechanic</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-heading {
  font-size: 52px;
  line-height: 120%;
  font-style: normal;
  font-weight: 700;
  @include sm {
    font-size: 36px;
    line-height: 54px;
  }
  @include md {
    font-size: 48px;
    line-height: 60px;
  }
}
.slide-left-enter-active {
  transition: all 0.4s ease-in;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-left-enter-from {
  opacity: 1;
  transform: translateX(30px);
}

.slide-left-leave-to {
  opacity: 1;
  transform: translateX(-30px);
}
</style>
