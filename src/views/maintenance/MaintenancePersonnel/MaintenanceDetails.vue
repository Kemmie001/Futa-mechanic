<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
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
                  class="bg-primaryI px-2 py-1 text-primary text-sm rounded-2xl"
                  >Pump Tyre</span
                >
                <span
                  class="bg-primaryI px-2 py-1 text-primary text-sm rounded-2xl"
                  >Change Battery</span
                >
                <span
                  class="bg-primaryI px-2 py-1 text-primary text-sm rounded-2xl"
                  >Oil Change</span
                >
              </div>
            </div>
            <div class="border-b border-[#F7F9FC] px-4 pt-4">
              <p class="text-sm text-gray5 pb-1">Concerns</p>
              <p class="text-base text-primary9 pb-2">
                Lorem ipsum avec sont tues cest istum Lorem ipsum avec sont tues
                cest istum orem ipsum avec sont tues cest istum tr
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
                Friday, Nov 10, 2023
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
                Isogun Oluwakemi
              </p>
              <p class="text-sm text-gray5 pb-2">
                Vehicle Owner
              </p>
            </div>
            <div class="border-b border-[#F7F9FC] px-4 pt-4">
              <p class="text-primary font-medium text-md pb-1">
                FUTA/STF/3910
              </p>
              <p class="text-sm text-gray5 pb-2">
                Staff ID
              </p>
            </div>
            <div class="border-b border-[#F7F9FC] px-4 pt-4">
              <p class="text-primary font-medium text-md pb-1">
                isogunoluwakemi@gmail.com
              </p>
              <p class="text-sm text-gray5 pb-2">
                Email Address
              </p>
            </div>
            <div class="border-b border-[#F7F9FC] px-4 pt-4">
              <p class="text-primary font-medium text-md pb-1">
                08032675492
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
                2024 Mercedes Benz GLC
              </p>
            </div>
            <div class="border-b border-[#F7F9FC] px-4 pt-4">
              <p class="text-sm text-gray5 pb-1">
                Plate Number
              </p>
              <p class="text-gray9 text-md pb-2">
                AKR-2076540
              </p>
            </div>
            <div class="border-b border-[#F7F9FC] px-4 pt-4">
              <p class="text-sm text-gray5 pb-1">
                Engine Number
              </p>
              <p class="text-gray9 text-md pb-2">
                PJ12345U123456P
              </p>
            </div>
            <div class="border-b border-[#F7F9FC] px-4 pt-4">
              <p class="text-sm text-gray5 pb-1">
                Fuel Type
              </p>
              <p class="text-gray9 text-md pb-2">
                Petrol
              </p>
            </div>
            <div class="border-b border-[#F7F9FC] px-4 pt-4">
              <p class="text-sm text-gray5 pb-1">
                Chassis Number
              </p>
              <p class="text-gray9 text-md pb-2">
                SV30-0169266
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
