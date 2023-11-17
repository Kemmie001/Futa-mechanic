<script lang="ts" setup>
import { ref } from "vue";
import modal from "./index.vue";
import { defineProps } from "vue";
const props = defineProps([
  "open",
  "close",
  "showActionsModal",
  "id",
  "deleteProduct",
]);
const form = ref({
  service: "",
  concern: "",
  mileage: 0,
  date: "",
  time: "",
});
const planMaintenance = () => {};
</script>
<template>
  <modal :open="props.open" :close="props.close" class="overflow-y-hidden">
    <div
      class="delete-modal text-left px-5 py-4"
      :class="showActionsModal === id ? 'show' : ''"
    >
      <div class="">
        <button class="ml-auto flex py-2" @click="close">
          <i class="fa-solid fa-xmark text-2xl"></i>
        </button>
        <h4 class="text-xl font-semibold">Plan Maintenance</h4>
        <form @submit.prevent="planMaintenance" class="mt-6">
          <div class="form-input2">
            <span class="flex gap-1">
              <label for="email">Services</label>
            </span>
            <select
              name="service"
              v-model="form.service"
              id="service"
              class="form-field"
            >
              <option value="oilChange">Oil Change</option>
              <option value="tyreChange">Tyre Change</option>
              <option value="brakePad">Brake Pad Repair</option>
              <option value="batterChange">Battery Change</option>
              <option value="flatTyre">Flat Tyre</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div class="form-input2">
            <span class="flex gap-1">
              <label for="concern">Concern</label>
            </span>
            <input
              class="form-field"
              type="text"
              name="concern"
              v-model="form.concern"
              required
            />
          </div>
          <div class="form-input2">
            <span class="flex gap-1">
              <label for="mileage">Mileage</label>
            </span>
            <input
              class="form-field"
              type="number"
              name="mileage"
              v-model="form.mileage"
              required
            />
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
          <div class="form-input2">
            <span class="flex gap-1">
              <label for="time">Time</label>
            </span>
            <input
              class="form-field"
              type="time"
              name="time"
              placeholder="Select a time"
              v-model="form.time"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full mt-5 py-3 flex btn-primary items-center justify-center gap-2"
          >
            <!-- <div class="animate-spin roller"></div> -->
            Submit
          </button>
        </form>
      </div>
    </div>
  </modal>
</template>
<style lang="scss">
.delete-modal {
  background: #ffffff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  position: fixed;
  width: 90%;
  max-height: 580px;
  overflow-y: scroll;
  cursor: pointer;
  border-radius: 8px;
  display: none;
  &.show {
    display: block;
    margin: 0 auto;
  }
  @include md {
    width: 400px;
  }
}

.modal-overlay::before {
  content: "";
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  /* overflow: aut; */
  z-index: 2;
}
.svg-red {
  filter: invert(38%) sepia(89%) saturate(4462%) hue-rotate(336deg)
    brightness(89%) contrast(105%);
}
</style>
