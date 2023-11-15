<script setup lang="ts">
import { ref } from "vue";
const heroImage = ref(1);
const showHeroImage = (num: number) => {
  heroImage.value = num;
};
</script>

<template>
  <div class="flex p-4 md:gap-5 items-center">
    <div
      class="register-as-bg h-[100vh] text-white rounded-3xl px-10 hidden md:block md:w-5/12 py-8"
    >
      <div class="">
        <p class="font-bold text-2xl">FUTA</p>
      </div>
    </div>
    <div class="w-full md:w-8/12 py-8 px-5">
      <div class="flex flex-col justify-center items-center">
        <div class="mx-auto text-center lg:w-10/12">
          <h3 class="font-medium text-3xl text-primary">
            What are you registering as?
          </h3>
          <p class="text-md my-2">
            To be able to proceed you need to select what you would be
            registering as
          </p>
        </div>
        <div class="gap-5 my-5 grid md:grid-cols-2 lg:grid-cols-3">
          <router-link
            to="/register/maintenance_personnel"
            class="bg-white box rounded-md px-3 py-4"
          >
            <h6 class="font-medium text-md py-2">Maintenance Personnel</h6>
            <p class="text-sm mb-4">
              Is an individual who is trained and skilled in maintaining and
              repairing vehicles.
            </p>
          </router-link>
          <router-link
            to="/register/driver"
            class="bg-white box rounded-md hover:text-primary px-4 py-4"
          >
            <h6 class="font-medium text-md py-2">Vehicle Driver</h6>
            <p class="text-sm mb-4">
              is an individual who operates a vehicle for transportation
              purposes.
            </p>
          </router-link>
          <router-link
            to="/register/vehicle_asignee"
            class="bg-white box rounded-md hover:text-primary px-4 py-4"
          >
            <h6 class="font-medium text-md py-2">Vehicle Owner</h6>
            <p class="text-sm mb-4">
              is an individual or entity that legally possesses and has
              ownership rights over a particular vehicle.
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  border: 0.884px solid #d2d2d2;
  height: 175px;
  color: #001633;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.box:hover {
  border: 0.884px solid #1671d9;
  background: #e3f1ff;
}
.register-as-bg {
  border-radius: 30px;
  /* background-image: url("../assets/img/register-as-bg.png"); */
  background: url("../assets/img/register-as-bg.png");
  /* mix-blend-mode: overlay; */
  background-size: cover;
}
</style>
