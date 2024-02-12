<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
import moment from "moment";
const currentPage = ref("feedback-page");
const switchPage = (page: string) => {
  currentPage.value = page;
};
const form = ref({
  service: "",
  report: "",
  date: "",
});
const pict = ref("");
const image = ref(null);
const selectImage = (input: any) => {
  let files = input.target.files;
  pict.value = files[0];
  if (files && files[0]) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      image.value = e.target.result;
    };
    reader.readAsDataURL(files[0]);
  }
};
const props = defineProps(["maintenance"]);
</script>

<template>
  <div class="w-full">
    <div class="mt-5">
      <div class="flex gap-5">
        <button
          @click="switchPage('info-page')"
          class="text-sm rounded-md px-5 py-4"
          :class="[
            currentPage === 'info-page'
              ? 'bg-primaryI text-primary font-medium '
              : 'border border-[#D0D5DD]  text-gray5 ',
          ]"
        >
          Information Page
        </button>
        <button
          @click="switchPage('feedback-page')"
          class="text-sm px-5 rounded-md py-4"
          :class="[
            currentPage === 'feedback-page'
              ? 'bg-primaryI text-primary font-medium '
              : 'border border-[#D0D5DD]  text-gray5 ',
          ]"
        >
          Personnel Feedback
        </button>
      </div>
      <div v-if="currentPage === 'feedback-page'" class="md:flex gap-2 mt-5">
        <div class="w-full md:w-6/12 mt-4">
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
                {{ maintenance?.maint_log?.vehicle?.service_mileage }} km
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
            <div class="border-b border-[#F7F9FC] px-4 pt-4">
              <p class="text-sm text-gray5 pb-1">Maintenance Time</p>
              <p class="text-base text-primary9 pb-2">
                12:00 pm
              </p>
            </div>
            <div class="border-b border-[#F7F9FC] px-4 pt-4">
              <p class="text-sm text-gray5 pb-1">Personnel In-Charge</p>
              <p class="text-base text-primary9 pb-2">
                Nil
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
            <form class="mt-6">
              <div class="form-input2">
                <span class="flex gap-1">
                  <label for="email">Service done</label>
                </span>
                <input
                  class="form-field"
                  type="number"
                  name="mileage"
                  v-model="form.service"
                  required
                />
              </div>
              <div class="form-input2">
                <span class="flex gap-1">
                  <label for="concern">Service Report</label>
                </span>
                <textarea
                  class="form-field"
                  v-model="form.report"
                  required
                ></textarea>
              </div>
              <div class="form-input2">
                <span class="flex gap-1">
                  <label for="date">Date</label>
                </span>
                <input
                  class="form-field"
                  type="date"
                  name="date"
                  placeholder="Pick a date"
                  v-model="form.date"
                  required
                />
              </div>
              <label>Image Report</label>
              <label
                htmlFor="image"
                class="flex gap-2 mt-1 text-dark rounded-md h-32 bg-primaryI justify-center items-center flex-col"
              >
                <input
                  class="hidden"
                  type="file"
                  :multiple="false"
                  required
                  @change="selectImage"
                  name="image"
                  id="image"
                />
                <img v-if="image" class="h-32 w-full" :src="image" alt="" />
                <div v-else class="text-center">
                  <i class="fa-solid fa-upload"></i>
                  <p class="text-sm">Upload Image</p>
                </div>
              </label>
              <button
                type="submit"
                class="w-full mt-5 py-3 flex btn-primary items-center justify-center gap-2"
              >
                <!-- <div class="animate-spin roller"></div> -->
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
      <div v-else class="md:flex gap-2 mt-5">
        <div class="w-full md:w-6/12 mt-4">
          <div class="border border-[#E4E7EC] w-full rounded-md">
            <div class="border-b border-[#F7F9FC] px-4 pt-4">
              <p class="text-primary font-medium text-md pb-1">
                {{ maintenance?.maint_log?.plannedBy?.lastName }}
                {{ maintenance?.maint_log?.plannedBy?.firstName }}
              </p>
              <p class="text-sm text-gray5 pb-2">
                {{ maintenance?.maint_log?.plannedBy?.role }}
              </p>
            </div>
            <div class="border-b border-[#F7F9FC] px-4 pt-4">
              <p class="text-primary font-medium text-md pb-1">
                {{ maintenance?.maint_log?.plannedBy?.staffId }}
              </p>
              <p class="text-sm text-gray5 pb-2">
                Staff ID
              </p>
            </div>
            <div class="border-b border-[#F7F9FC] px-4 pt-4">
              <p class="text-primary font-medium text-md pb-1">
                {{ maintenance?.maint_log?.plannedBy?.email }}
              </p>
              <p class="text-sm text-gray5 pb-2">
                Email Address
              </p>
            </div>
            <div class="border-b border-[#F7F9FC] px-4 pt-4">
              <p class="text-primary font-medium text-md pb-1">
                0{{ maintenance?.maint_log?.plannedBy?.phone }}
              </p>
              <p class="text-sm text-gray5 pb-2">
                Phone Number
              </p>
            </div>
            <div class="border-b border-[#F7F9FC] px-4 pt-4">
              <p class="text-primary font-medium text-md pb-1">
                Abolaji Babatunde - vehicle driver
              </p>
              <p class="text-sm text-gray5 pb-2">
                Maintenance plan created by
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 mt-4">
          <div class="border border-[#E4E7EC] w-full rounded-md">
            <div class="border-b border-[#F7F9FC] px-4 pt-4">
              <p class="text-sm text-gray5 pb-1">
                Vehicle Brand
              </p>
              <p class="text-gray9 text-md pb-2">
                {{ maintenance?.maint_log?.vehicle?.manufacture_year }}
                {{ maintenance?.maint_log?.vehicle?.vehicle_name }}
              </p>
            </div>
            <div class="border-b border-[#F7F9FC] px-4 pt-4">
              <p class="text-sm text-gray5 pb-1">
                Plate Number
              </p>
              <p class="text-gray9 text-md pb-2">
                {{ maintenance?.maint_log?.vehicle?.plate_no }}
              </p>
            </div>
            <div class="border-b border-[#F7F9FC] px-4 pt-4">
              <p class="text-sm text-gray5 pb-1">
                Engine Number
              </p>
              <p class="text-gray9 text-md pb-2">
                {{ maintenance?.maint_log?.vehicle?.engine_no }}
              </p>
            </div>
            <div class="border-b border-[#F7F9FC] px-4 pt-4">
              <p class="text-sm text-gray5 pb-1">
                Fuel Type
              </p>
              <p class="text-gray9 text-md pb-2">
                {{ maintenance?.maint_log?.vehicle?.fuel_type }}
              </p>
            </div>
            <div class="border-b border-[#F7F9FC] px-4 pt-4">
              <p class="text-sm text-gray5 pb-1">
                Chassis Number
              </p>
              <p class="text-gray9 text-md pb-2">
                {{ maintenance?.maint_log?.vehicle?.chasis_no }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
