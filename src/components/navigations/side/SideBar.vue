<template>
  <div class="" id="sidebar" data-testid="sidebarOpenTest">
    <transition name="slide" appear>
      <aside
        class="aside flex flex-col justify-between gap-4 px-2 py-8 h-screen bg-primary text-white"
      >
        <ul class="flex flex-col gap-4 text-white">
          <div class="md:mb-6 w-full flex justify-between items-center">
            <div class="md:pl-3">
              <h3 class="text-2xl">FUTA</h3>
            </div>
            <div class="" @click="closeSidebar">
              <img
                class="w-full md:hidden"
                src="../../../assets/icons/close.svg"
                alt=""
              />
            </div>
          </div>
          <div class="md:hidden">
            <div class="search my-4">
              <span class="w-5">
                <img
                  class="w-full"
                  src="../../../assets/icons/search.svg"
                  alt=""
                />
              </span>
              <input type="search" placeholder="Search here" />
            </div>
          </div>
          <router-link to="/dashboard"
            ><i class="fa-solid fa-house"></i>Dashboard
          </router-link>
          <router-link to="/maintenance"
            ><i class="fa-solid fa-screwdriver-wrench"></i> Workbay
          </router-link>
          <router-link to="/driver"
            ><i class="fa-solid fa-user-gear"></i> Vehicle Log
          </router-link>
          <router-link to="/vehicle"
            ><i class="fa-solid fa-car"></i> Vehicle
          </router-link>
          <router-link to="/"
            ><i class="fa-solid fa-location-crosshairs"></i> GPS
            Tracker</router-link
          >
          <router-link to="/reports"
            ><i class="fa-solid fa-file-lines"></i> Reports
          </router-link>
        </ul>
        <nav>
          <div class="flex w-full -mb-3 mt-5 text-white dark:text-white">
            <div class="flex relative flex flex-col w-full gap-2">
              <router-link to="/"
                ><i class="fa-solid fa-gear"></i>Feedback
              </router-link>
              <router-link to="/"
                ><i class="fa-solid fa-headset"></i>Help Center
              </router-link>
              <p @click="signOut" class="cursor-pointer">
                <i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out
              </p>
            </div>
          </div>
        </nav>
      </aside>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { watch } from "vue";
import { regInfo } from "@/store/register";

const closeSidebar = () => {
  document.querySelector<HTMLElement>("#sidebar")?.classList.remove("open");
};
const route = useRoute();
const router = useRouter();
watch(route, () => {
  document.querySelector<HTMLElement>("#sidebar")?.classList.remove("open");
});
const signOut = () => {
  localStorage.removeItem("futaToken");
  router.push({ name: "login" });
};
// const regInformation = regInfo().userData;
</script>

<style scoped lang="scss">
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
#sidebar {
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  width: 220px;
  @media (max-width: 768px) {
    display: none;
    width: 100% !important;
    &.open {
      display: block;
    }
  }
}
a,
p {
  padding: 8px 14px;
  color: #fff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  gap: 8px;
  align-items: center;
}
a:hover {
  color: #1671d9;
  background: #fff;
  border-radius: 8px;
}
.router-link-exact-active,
a.router-link-active {
  color: #1671d9;
  background: #fff;
  border-radius: 8px;
}
</style>
