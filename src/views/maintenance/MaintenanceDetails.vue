<script setup lang="ts">
import { userInfo } from "@/store/user";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import MaintenanceDetails from "@/views/maintenance/MaintenancePersonnel/MaintenanceDetails.vue";
import { useErrorInfo } from "@/store/error";
import { useMaintenance } from "@/store/maintenance";
import moment from "moment";
import AcceptMaintenance from "@/components/Modal/AcceptMaintenance.vue";
const router = useRouter();
const route = useRoute();
const userInformation = computed(() => {
  return userInfo().userData;
});
const maintenance = computed(() => {
  const maint = useMaintenance().plannedMaintenance;
  // if (maint) {
  //   const result = maint.filter(
  //     (maintenance) => maintenance._id === route.params.slug
  //   );
  //   return result[0];
  // }
  return maint;
});
const customError = useErrorInfo();
const roller = ref(false);
onMounted(async () => {
  useMaintenance().getPlannedMaintenance(route.params.slug);
});
const openAccept = ref(false);
const showAcceptModal = () => {
  openAccept.value = !openAccept.value;
};
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
          #{{ maintenance?.maint_log?.maint_id }}
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
        v-if="
          userInformation?.loggedInUser?.role === 'maintenance_personnel' &&
          maintenance?.maint_log?.status === 'pending'
        "
        class="border border-primary px-3 py-2 rounded-md text-primary"
        @click="showAcceptModal"
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
                v-for="(service, index) in maintenance?.maint_log?.services"
                :key="index"
                class="bg-primaryI px-2 py-1 text-primary text-sm rounded-2xl"
                >{{ service }}</span
              >
            </div>
          </div>
          <div class="border-b border-[#F7F9FC] px-4 pt-4">
            <p class="text-sm text-gray5 pb-1">Concerns</p>
            <p class="text-base text-primary9 pb-2">
              {{ maintenance?.maint_log?.concerns }}
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
              {{
                moment(maintenance?.maint_log?.proposedDate).format(
                  "D MMM YYYY"
                )
              }}
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
                :class="[
                  maintenance?.maint_log?.status === 'pending'
                    ? 'bg-primary text-white'
                    : 'bg-primaryI text-primary',
                ]"
                class="flex justify-center font-medium text-md items-center w-10 h-10 rounded-full"
                >1
              </span>
              <p
                class="font-medium text-md"
                :class="[
                  maintenance?.maint_log?.status === 'pending'
                    ? 'text-primary '
                    : 'text-dark',
                ]"
              >
                Pending
              </p>
            </li>
            <li class="h-6 w-20 border-l border-primaryI ml-5"></li>
            <li class="flex gap-4 items-center">
              <span
                :class="[
                  maintenance?.maint_log?.status === 'in-shop'
                    ? 'bg-primary text-white'
                    : 'bg-primaryI text-primary',
                ]"
                class="flex justify-center font-medium text-md items-center w-10 h-10 rounded-full"
                >2
              </span>
              <p
                :class="[
                  maintenance?.maint_log?.status === 'in-shop'
                    ? 'text-primary '
                    : 'text-dark',
                ]"
                class="text-md font-medium"
              >
                In shop
              </p>
            </li>
            <li class="h-6 w-20 border-l border-primaryI ml-5"></li>
            <li class="flex gap-4 items-center">
              <span
                :class="[
                  maintenance?.maint_log?.status === 'in-progress'
                    ? 'bg-primary text-white'
                    : 'bg-primaryI text-primary',
                ]"
                class="flex justify-center font-medium text-md items-center w-10 h-10 rounded-full"
                >3
              </span>
              <p
                class="text-md font-medium"
                :class="[
                  maintenance?.maint_log?.status === 'in-progress'
                    ? 'text-primary '
                    : 'text-dark',
                ]"
              >
                In Progress
              </p>
            </li>
            <li class="h-6 w-20 border-l border-primaryI ml-5"></li>
            <li class="flex gap-4 items-center">
              <span
                :class="[
                  maintenance?.maint_log?.status === 'completed'
                    ? 'bg-primary text-white'
                    : 'bg-primaryI text-primary',
                ]"
                class="flex justify-center font-medium text-md items-center w-10 h-10 rounded-full"
                >4
              </span>
              <p
                :class="[
                  maintenance?.maint_log?.status === 'completed'
                    ? 'text-primary '
                    : 'text-dark',
                ]"
                class="text-md font-medium"
              >
                Completed
              </p>
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
                {{ maintenance?.maint_log?.vehicle?.manufacture_year }}
                {{ maintenance?.maint_log?.vehicle?.vehicle_name }}
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
      <MaintenanceDetails :maintenance="maintenance" />
      <AcceptMaintenance :open="openAccept" :close="showAcceptModal" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
