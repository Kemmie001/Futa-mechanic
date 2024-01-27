<script setup lang="ts">
import { recoverPassword } from "@/service/endpoints";
import { useErrorInfo } from "@/store/error";
import { ref } from "vue";
import { useRouter } from "vue-router";

const recoveryData = ref({
  email: "",
});
const router = useRouter();
const roller = ref(false);
const customError = useErrorInfo();
const forgotPasswordForm = async () => {
  try {
    roller.value = true;
    const { data } = await recoverPassword(recoveryData.value);
    router.push("/verify-recovery-code");
  } catch (e) {
    const error = e as any;
    console.log(error);
    customError.updateErrorMsg(
      error?.response?.data?.err ?? "An error occurred",
      false
    );
  } finally {
    roller.value = false;
  }
};
</script>

<template>
  <div class="flex p-4 md:gap-10 lg:gap-14 items-center">
    <div
      class="auth-bg h-screen text-white rounded-3xl px-10 hidden md:block md:w-6/12 lg:w-5/12 py-8 relative"
    >
      <div class="">
        <p class="font-bold text-2xl">FUTA</p>
      </div>
      <h6 class="auth-header mt-16">
        Get ready to revolutionizes how you track, schedule, and log maintenance
        tasks.
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
              src="../../assets/img/user.png"
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
    <div class="w-full md:w-6/12 py-8 px-8">
      <div class="mb-4 w-full md:w-9/12 mx-auto">
        <h6 class="text-dark text-2xl mb-4 font-semibold">Forgot Password</h6>
        <span class="flex gap-2">
          <p class="text-[#645D5D]">
            Kindly provide us with the email address that is linked to your
            account, and we will send you a link to reset your password
          </p>
        </span>
      </div>
      <form
        @submit.prevent="forgotPasswordForm"
        class="md:w-9/12 w-full my-5 mx-auto"
      >
        <div class="form-input2">
          <span class="flex gap-1">
            <label for="email">Email address</label>
          </span>
          <input
            class="form-field"
            type="text"
            name="email"
            v-model="recoveryData.email"
            required
          />
        </div>
        <button
          :disabled="roller"
          type="submit"
          class="w-full mt-8 py-3 flex btn-primary items-center justify-center gap-2"
          :class="[roller ? 'opacity-75' : '']"
        >
          <div v-if="roller" class="animate-spin roller"></div>
          Didn’t get it? Resend
        </button>
      </form>
      <div class="flex gap-2 text-sm justify-center items-center my-8">
        <p class="text-neutral">Wrong email?</p>
        <router-link to="/auth/signin" class="text-dark underline"
          >Change it</router-link
        >
      </div>
      <div
        class="text-sm absolute bottom-4 md:left-[50%] translate-x-[40%] flex gap-10 font-light"
      >
        <router-link to="/" class="text-[#5693CC]">Terms of Use</router-link>
        <router-link to="/" class="text-[#5693CC]">Privacy Policy</router-link>
      </div>
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
  background-image: url("../../assets/img/auth-bg.png");
  background-size: cover;
}
</style>
