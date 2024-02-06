<script lang="ts" setup>
import { ref } from "vue";
import modal from "./index.vue";
import { defineProps } from "vue";
import { addDriversLog } from "@/service/endpoints";
import { useErrorInfo } from "@/store/error";
import { useDriverLog } from "@/store/drivers_log";
const props = defineProps([
  "open",
  "close",
  "showActionsModal",
  "vehicle",
  "id",
]);
const form = ref({
  vehicle_id: "",
  logTime: "morning",
  startingMileage: "",
  endingMilage: "",
  startingFuelLevel: "",
  endingFuelLevel: "",
});
const roller = ref(false);
const customError = useErrorInfo();
const vehicleLog = async () => {
  try {
    roller.value = true;
    form.value.vehicle_id = props.vehicle;
    // console.log(props.vehicle);
    const { data } = await addDriversLog(form.value);
    customError.updateErrorMsg(data.msg, true);

    form.value.logTime = "";
    form.value.startingMileage = "";
    form.value.endingMilage = "";
    form.value.endingFuelLevel = "";
    form.value.startingFuelLevel = "";
  } catch (e) {
    const error = e as any;
    console.log(error);
    customError.updateErrorMsg(
      error?.response?.data?.err ?? "An error occurred",
      false
    );
  } finally {
    roller.value = false;
    useDriverLog().getAllDriversLog({
      start_date: "",
      end_date: "",
    });
    props.close();
  }
};
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
              v-model="form.logTime"
              id="service"
              class="form-field"
            >
              <option value="morning">Morning Log</option>
              <option value="evening">Evening Log</option>
            </select>
          </div>
          <div v-if="form.logTime === 'morning'" class="">
            <div class="form-input2">
              <span class="flex gap-1">
                <label for="sOdometer">Starting Odometer</label>
              </span>
              <input
                class="form-field"
                type="number"
                name="sOdometer"
                v-model="form.startingMileage"
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
                v-model="form.startingFuelLevel"
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
                v-model="form.endingMilage"
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
                v-model="form.endingFuelLevel"
                required
              />
            </div>
          </div>
          <button
            :disabled="roller"
            type="submit"
            class="w-full mt-8 py-3 flex btn-primary items-center justify-center gap-2"
            :class="[roller ? 'opacity-75' : '']"
          >
            <div v-if="roller" class="animate-spin roller"></div>
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
