<script setup lang="ts">
import ReportCard from "../../components/reports/ReportCard.vue";
import { userInfo } from "@/store/user";
import { computed, onMounted, ref } from "vue";

const roller = ref(false);
const userInformation = computed(() => {
  return userInfo().userData;
});
onMounted(async () => {
  if (!Object.keys(userInformation.value).length) {
    roller.value = true;
    await userInfo().fetchUserProfile();
    roller.value = false;
  }
});
const openReportModal = ref(false);
const showReportModal = () => {
  openReportModal.value = !openReportModal.value;
};
</script>

<template>
  <div class="px-5">
    <div class="flex mt-8 justify-between items-center">
      <p></p>
      <button
        v-if="userInformation?.loggedInUser?.role === 'driver'"
        @click="showReportModal"
        class="btn-primary py-3 px-5"
      >
        Create Report
      </button>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-5">
      <ReportCard />
      <ReportCard />
      <ReportCard />
      <ReportCard />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
