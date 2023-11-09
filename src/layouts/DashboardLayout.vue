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
      <div class="">
        <SideBar />
      </div>
      <main class="main" id="app">
        <div
          class="hidden py-3 px-4 w-full md:flex items-center justify-between"
        >
          <div class="search w-7/12">
            <i class="fa-solid fa-magnifying-glass text-primary9"></i>
            <input type="search" placeholder="Search here" />
          </div>
          <div class="flex items-center justify-end gap-4">
            <div
              class="cursor-pointer flex items-center justify-center w-10 h-10 bg-primaryI rounded-full"
              @click="showNotificationModal"
            >
              <i class="fa-regular fa-bell text-primary"></i>
            </div>
            <router-link to="/" class="w-10 h-10 rounded-full">
              <img
                class="object-contain w-10 h-10 rounded-full"
                src="../assets/sellerAvatar.png"
                alt=""
              />
            </router-link>
            <!-- <div class="">
              <NotificationCard
                :open="openNotificationModal"
                :close="showNotificationModal"
                :show-notification-modal="showNotificationModal"
              />
            </div> -->
          </div>
        </div>
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
// import NotificationCard from "@/components/modals/NotificationCard.vue";
import { ref } from "vue";
// import { useRoute } from "vue-router";
import SideBar from "../components/navigations/side/SideBar.vue";
const toggleSidebar = () => {
  const sidebar = document.getElementById("sidebar");
  sidebar?.classList.add("open");
};
const openNotificationModal = ref(false);
const showNotificationModal = () => {
  openNotificationModal.value = !openNotificationModal.value;
};
// const route = useRoute();
</script>

<style lang="scss">
.main {
  width: calc(100% - 220px);
  margin-left: 220px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
}

.search {
  background: #ffffff;
  border: 1px solid #b6d8ff;
  border-radius: 6px;
  color: #001633;
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
