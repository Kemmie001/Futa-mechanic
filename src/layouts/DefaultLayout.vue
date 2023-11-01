<template>
  <div class="">
    <div
      class="flex md:hidden justify-between px-5 py-4 items-center mobile-header w-full"
    >
      <button class="p-2" @click="toggleSidebar" data-testid="navToggleTest">
        <img class="w-full" src="../assets/icons/menu.svg" alt="" />
      </button>
      <div class="w-20">
        <img class="w-full" src="../assets/Karpah.svg" alt="" />
      </div>
      <div class="">
        <img class="w-full" src="../assets/icons/notification.svg" alt="" />
      </div>
    </div>
    <div class="flex">
      <TopNav />
      <main class="main" id="app">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopNav from "@/components/navigations/top/TopNav.vue";
import { ref } from "vue";
// import { useRoute } from "vue-router";
const toggleSidebar = () => {
  const sidebar = document.getElementById("sidebar");
  sidebar?.classList.add("open");
};
// const route = useRoute();
</script>

<style lang="scss">
.main {
  padding-top: 60px;
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding-top: 10px;
  }
}

.search {
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  color: #b3b3b3;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.4rem;

  input {
    outline: none;
  }

  input::placeholder {
    color: #b3b3b3;
    font-weight: 400;
    font-size: 16px;
  }
}
</style>
