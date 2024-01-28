<script lang="ts" setup>
import moment from "moment";
import { ref } from "vue";
import modal from "./index.vue";
import { defineProps } from "vue";
import { useErrorInfo } from "@/store/error";
import { planMaintenance } from "@/service/endpoints";
import Multiselect from "./Multiselect.vue";
import { useMaintenance } from "@/store/maintenance";

const props = defineProps([
  "open",
  "close",
  "showActionsModal",
  "id",
  "deleteProduct",
  "vehicle",
]);
const concern = ref<string>("");
const minDate = moment(new Date()).format("YYYY-MM-DD");
const form = ref<any>({
  vehicle: "",
  services: [],
  concerns: [],
  proposedDate: "",
});
const allServices = [
  { id: 1, name: "oil change" },
  { id: 2, name: "tyre change" },
  { id: 3, name: "Brake Pad Repair" },
  { id: 4, name: "Flat Tyre" },
  { id: 5, name: "Battery Change" },
];
const selectedValues = (value: any) => {
  for (let index = 0; index < value.length; index++) {
    const element = value[index];
    form.value.services.push(element.name);
  }
};

const customError = useErrorInfo();
const roller = ref(false);
const planMaintenanceForm = async () => {
  try {
    roller.value = true;
    form.value.vehicle = props.vehicle;
    form.value.concerns.push(concern.value);
    const { data } = await planMaintenance(form.value);

    form.value.services = [];
    form.value.concerns = [];
    form.value.proposedDate = "";
  } catch (e) {
    const error = e as any;
    console.log(error);
    customError.updateErrorMsg(
      error?.response?.data?.err ?? "An error occurred",
      false
    );
  } finally {
    roller.value = false;
    await useMaintenance().getAllPlannedMaintenance({
      vehicle: props.vehicle,
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
        <h4 class="text-xl font-semibold">Plan Maintenance</h4>
        <form @submit.prevent="planMaintenanceForm" class="mt-6">
          <div class="form-input2">
            <span class="flex gap-1">
              <label for="services">Services</label>
            </span>
            <Multiselect :options="allServices" @input="selectedValues" />
          </div>
          <div class="form-input2">
            <span class="flex gap-1">
              <label for="concern">Concern</label>
            </span>
            <input
              class="form-field"
              type="text"
              name="concern"
              v-model="concern"
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
              :min="minDate"
              placeholder="Pick a date"
              v-model="form.proposedDate"
              required
            />
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
