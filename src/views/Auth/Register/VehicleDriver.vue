<script setup lang="ts">
import { ref } from "vue";

const signUpData = ref({
  firstName: "",
  lastName: "",
  email: "",
  phoneNo: "",
  password: "",
  staffID: "",
  MakeCustomWear: false,
});
</script>

<template>
  <div class="flex p-4 md:gap-10 lg:gap-14]">
    <div
      class="auth-bg h-[100vh text-white rounded-3xl px-10 hidden md:block md:w-6/12 lg:w-5/12 py-8 relative"
    >
      <div class="">
        <p class="font-bold text-2xl">FUTA</p>
      </div>
      <h6 class="auth-header mt-16">
        Are you wanting to stay connected with your vehicle ?
      </h6>
      <p class="py-2 text-lg">
        Start managing your maintenance needs with our user-friendly app.
      </p>
      <div
        class="absolute bg-[#B6D8FF] text-primary bottom-10 right-0 rounded-xl mx-10 px-4 py-4"
      >
        <p class="mb-4">
          I find it very easy to monitor and get all maintenance issues relating
          to my vehicle sorted without having to stress myself.
        </p>
        <div class="flex gap-2 items-center my-1">
          <div class="">
            <img
              class="w-12 h-12 rounded-full border border-primary"
              src="../../../assets/img/user.png"
              alt=""
            />
          </div>
          <div class="">
            <p class="font-medium text-lg">Prof Dahunsi</p>
            <p class="text-sm">Director of CESRA</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full md:w-6/12 py-8 px-8 md:px-20">
      <div class="mb-4">
        <h6 class="text-dark text-3xl mb-2 font-semibold">Create Account</h6>
        <span class="flex gap-2">
          <p class="text-[#645D5D]">Already have an account?</p>
          <router-link to="/login/vehicle-driver" class="text-primary"
            >Login</router-link
          >
        </span>
      </div>
      <form class="mt-8">
        <div class="form-input2">
          <span class="flex gap-1">
            <label for="first-name">First name</label>
          </span>
          <input
            class="form-field"
            type="text"
            name="first-name"
            v-model="signUpData.firstName"
            required
          />
        </div>
        <div class="form-input2">
          <span class="flex gap-1">
            <label for="last-name">Last Name</label>
          </span>
          <input
            class="form-field"
            type="text"
            name="last-name"
            v-model="signUpData.lastName"
            required
          />
        </div>
        <div class="form-input2">
          <span class="flex gap-1">
            <label for="email">Email address</label>
          </span>
          <input
            class="form-field"
            type="text"
            name="email"
            v-model="signUpData.email"
            required
          />
        </div>
        <div class="form-input2">
          <span class="flex gap-1">
            <label for="phone">Phone Number</label>
          </span>
          <input
            class="form-field"
            type="text"
            name="phone"
            v-model="signUpData.phoneNo"
            required
          />
        </div>
        <div class="form-input2">
          <span class="flex gap-1">
            <label for="staff-id">Staff ID</label>
          </span>
          <input
            class="form-field"
            type="text"
            name="staff-id"
            v-model="signUpData.staffID"
            required
          />
        </div>
        <div class="form-input2">
          <span class="flex gap-1">
            <label for="password">Password</label>
          </span>
          <input
            class="form-field"
            type="text"
            name="password"
            v-model="signUpData.password"
            required
          />
        </div>
        <p class="text-sm text-gray5">Must be at least 8 characters</p>
        <button class="btn-primary w-full mt-8 py-4">Create account</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth-header {
  font-weight: 700;
  font-style: normal;
  font-size: 36px;
  /* letter-spacing: 100%; */
  color: #fff;
  @include xl {
    font-size: 42px;
  }
}
.auth-bg {
  background-image: url("../../../assets/img/auth-bg.png");
  background-size: cover;
}
</style>
