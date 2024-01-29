<script setup lang="ts">
import { userInfo } from "@/store/user";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import MaintenanceDetails from "@/views/maintenance/MaintenancePersonnel/MaintenanceDetails.vue";
import { useErrorInfo } from "@/store/error";
import { useMaintenance } from "@/store/maintenance";
import moment from "moment";
const router = useRouter();
const route = useRoute();
const userInformation = computed(() => {
  return userInfo().userData;
});
const maintenance = computed(() => {
  const maint = useMaintenance().allPlannedMaintenance.allPlannedMaint;
  if (maint) {
    const result = maint.filter(
      (maintenance) => maintenance._id === route.params.slug
    );
    return result[0];
  }
});
const customError = useErrorInfo();
const roller = ref(false);
onMounted(async () => {
  if (!Object.keys(userInformation.value).length) {
    await userInfo().fetchUserProfile();
  }
  if (!maintenance.value) {
    roller.value = true;
    await useMaintenance().getAllPlannedMaintenance({
      vehicle: userInformation.value.user_vehicle._id,
      start_date: "",
      end_date: "",
    });
    roller.value = false;
  }
});
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
      <span class="flex gap-2">
        <p>Maintenance</p>
        /
        <p class="text-primary">Info Page</p>
      </span>
    </div>
    <div class="flex justify-between items-center">
      <span class="flex flex-col">
        <h3 class="text-primary9 font-semibold text-2xl">
          #{{ route.params.slug }}
        </h3>
        <p class="text-lg text-gray6 font-light">Maintenance ID</p>
      </span>
      <button
        v-if="userInformation?.loggedInUser?.role !== 'maintenance_personnel'"
        class="border border-primary px-3 py-2 rounded-md text-primary"
      >
        Export
      </button>
      <button
        v-else
        class="border border-primary px-3 py-2 rounded-md text-primary"
      >
        Accept work
      </button>
    </div>
    <div
      v-if="userInformation?.loggedInUser?.role !== 'maintenance_personnel'"
      class="md:flex gap-2 mt-5"
    >
      <div v-if="maintenance" class="w-full md:w-6/12 mt-4">
        <div class="border border-[#E4E7EC] rounded-md">
          <div class="border-b border-[#F7F9FC] px-4 pt-4">
            <p class="text-sm text-gray5">Services</p>
            <div class="flex flex-wrap gap-4 my-2">
              <span
                v-for="(service, index) in maintenance?.services"
                :key="index"
                class="bg-primaryI px-2 py-1 text-primary text-sm rounded-2xl"
                >{{ service }}</span
              >
            </div>
          </div>
          <div class="border-b border-[#F7F9FC] px-4 pt-4">
            <p class="text-sm text-gray5 pb-1">Concerns</p>
            <p class="text-base text-primary9 pb-2">
              {{ maintenance?.concerns[0] }}
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
              {{ moment(maintenance?.proposedTime).format("D MMM YYYY") }}
            </p>
          </div>
          <!-- <div class="border-b border-[#F7F9FC] px-4 pt-4">
            <p class="text-sm text-gray5 pb-1">Maintenance Time</p>
            <p class="text-base text-primary9 pb-2">
              12:00 pm
            </p>
          </div> -->
          <div class="border-b border-[#F7F9FC] px-4 pt-4">
            <p class="text-sm text-gray5 pb-1">Personnel In-Charge</p>
            <p class="text-base text-primary9 pb-2">
              Seun Ogun
            </p>
          </div>
        </div>
        <div class="border border-[#E4E7EC] rounded-md mt-5 p-4">
          <p class="text-sm text-gray5 pb-1">Status</p>
          <ul class="flex flex-col my-5">
            <li class="flex gap-4 items-center">
              <span
                class="flex justify-center bg-primary text-white font-medium text-md items-center w-10 h-10 rounded-full"
                >1
              </span>
              <p class="text-primary font-medium text-md">Pending</p>
            </li>
            <li class="h-6 w-20 border-l border-primaryI ml-5"></li>
            <li class="flex gap-4 items-center">
              <span
                class="flex justify-center bg-primaryI text-primary font-medium text-md items-center w-10 h-10 rounded-full"
                >2
              </span>
              <p class="text-dark text-md font-medium">In shop</p>
            </li>
            <li class="h-6 w-20 border-l border-primaryI ml-5"></li>
            <li class="flex gap-4 items-center">
              <span
                class="flex justify-center bg-primaryI text-primary font-medium text-md items-center w-10 h-10 rounded-full"
                >3
              </span>
              <p class="text-dark text-md font-medium">In Progress</p>
            </li>
            <li class="h-6 w-20 border-l border-primaryI ml-5"></li>
            <li class="flex gap-4 items-center">
              <span
                class="flex justify-center bg-primaryI text-primary font-medium text-md items-center w-10 h-10 rounded-full"
                >4
              </span>
              <p class="text-dark text-md font-medium">Completed</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full md:w-6/12 mt-4">
        <div class="border border-[#E4E7EC] rounded-md p-4">
          <h3 class="text-primary9 font-semibold text-xl">
            Personnel Feedback
          </h3>
          <ul class="flex flex-col gap-8 mt-5">
            <li class="flex flex-col gap-2">
              <p class="text-md font-medium text-[#101928]">Vehicle Type:</p>
              <p class="text-sm text-gray5 font-normal">
                {{ userInformation.user_vehicle.vehicle_name }}
              </p>
            </li>
            <li class="flex flex-col gap-2">
              <p class="tex-md font-medium text-[#101928]">Repair done:</p>
              <p class="text-sm text-gray5 font-normal">
                The vehicles oil was changed
              </p>
            </li>
            <li class="flex flex-col gap-2">
              <p class="text-md font-medium text-[#101928]">Report:</p>
              <p class="text-sm text-gray5 font-normal">
                I filtered out the engine oil and replaced with Total Engine oil
              </p>
            </li>
            <li class="flex flex-col gap-2">
              <p class="text-md font-medium text-[#101928]">Day Completed:</p>
              <p class="text-sm text-gray5 font-normal">
                20-01-2024
              </p>
            </li>
            <li class="flex flex-col gap-3">
              <p class="text-md font-medium text-[#101928]">Image Report:</p>
              <div
                class="rounded-md bg-primaryI h-[150px] w-full flex justify-center items-center"
              >
                <img src="../../assets/img/oil.jpg" alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else class="md:flex gap-2 mt-5">
      <MaintenanceDetails />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
