<template>
  <transition name="slide-down">
    <div
      v-if="props.errorMsg | Store.errorMsg.length"
      class="fixed left-1/2 top-20 rounded-md -translate-x-1/2 z-[10] px-4 py-2 shadow-md"
      :class="[
        Store.errorSuccess
          ? 'text-green-700 bg-[#D1F1CC] border-l-4 border border-[#A4E299] border-l-[#A4E299]'
          : 'text-red-700 bg-[#FBE9E9] border-l-4 border border-l-[#DC4437] border-[#F4B7B5]',
      ]"
    >
      <p class="text-red-700 m-0">{{ errorMsg }}</p>
      <p v-if="Store.errorSuccess" class="text-[#0E5C00] my-1 font-medium">
        Success
      </p>
      <p v-else class="text-[#590C07] my-1 font-medium">
        Request failed
      </p>
      <p
        class="m-0"
        :class="[Store.errorSuccess ? 'text-green-700' : 'text-red-700']"
      >
        {{ Store.errorMsg }}
      </p>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { useErrorInfo } from "@/store/error";

const Store = useErrorInfo();
const props = defineProps(["errorMsg"]);
</script>
<style lang="scss" scoped>
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: opacity 1s, transform 1s;
}
</style>
