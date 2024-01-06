<script lang="ts" setup>
import { ref } from "vue";
import modal from "./index.vue";
import { defineProps } from "vue";
const props = defineProps(["open", "close", "showActionsModal", "id"]);
const form = ref({
  log: "morningLog",
  startOdometer: "",
  endOdometer: "",
  fuelLevel: 0,
  fuelUsed: "",
});
const vehicleLog = () => {};
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
        <h4 class="text-xl font-semibold">Vehicle Log</h4>
        <form @submit.prevent="vehicleLog" class="mt-6">
          <div class="form-input2">
            <span class="flex gap-1">
              <label for="logTime">Log Time</label>
            </span>
            <select
              name="logTimee"
              v-model="form.log"
              id="service"
              class="form-field"
            >
              <option value="morningLog">Morning Log</option>
              <option value="eveningLog">Evening Log</option>
            </select>
          </div>
          <div v-if="form.log === 'morningLog'" class="">
            <div class="form-input2">
              <span class="flex gap-1">
                <label for="sOdometer">Starting Odometer</label>
              </span>
              <input
                class="form-field"
                type="number"
                name="sOdometer"
                v-model="form.startOdometer"
                required
              />
            </div>
            <div class="form-input2">
              <span class="flex gap-1">
                <label for="fLevel">Fuel Level</label>
              </span>
              <input
                class="form-field"
                type="number"
                name="fLevel"
                v-model="form.fuelLevel"
                required
              />
            </div>
          </div>
          <div v-else class="">
            <div class="form-input2">
              <span class="flex gap-1">
                <label for="eOdometer">Ending Odometer</label>
              </span>
              <input
                class="form-field"
                type="number"
                name="eOdometer"
                v-model="form.endOdometer"
                required
              />
            </div>
            <div class="form-input2">
              <span class="flex gap-1">
                <label for="fUsed">Fuel Used</label>
              </span>
              <input
                class="form-field"
                type="number"
                name="fUsed"
                v-model="form.fuelUsed"
                required
              />
            </div>
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
