<script lang="ts" setup>
import moment from "moment";
import { ref } from "vue";
import modal from "./index.vue";
import { defineProps } from "vue";
import { useErrorInfo } from "@/store/error";
import { changeStatus } from "@/service/endpoints";
import { useMaintenance } from "@/store/maintenance";
import { useRoute } from "vue-router";

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
  maint_id: "",
  status: "in-shop",
});

const customError = useErrorInfo();
const roller = ref(false);
const route = useRoute();
const acceptMaintenanceForm = async () => {
  try {
    roller.value = true;
    form.value.maint_id = route.params.slug;

    const { data } = await changeStatus(form.value);
  } catch (e) {
    const error = e as any;
    console.log(error);
    customError.updateErrorMsg(
      error?.response?.data?.err ?? "An error occurred",
      false
    );
  } finally {
    roller.value = false;
    await useMaintenance().getPlannedMaintenance(route.params.slug);
    props.close();
  }
};
</script>
<template>
  <modal :open="props.open" :close="props.close" class="overflow-y-hidden">
    <div
      class="delete-modal text-left px-5 py-2"
      :class="showActionsModal === id ? 'show' : ''"
    >
      <div class="">
        <button class="ml-auto flex py-2" @click="close">
          <i class="fa-solid fa-xmark text-xl"></i>
        </button>
        <h4 class="text-xl font-medium">Accept work</h4>
        <p class="text-sm py-3">
          To accept this work order. Click the button to proceed
        </p>
        <button
          :disabled="roller"
          @click="acceptMaintenanceForm"
          class="w-full mt-5 py-3 flex btn-primary items-center justify-center gap-2"
          :class="[roller ? 'opacity-75' : '']"
        >
          <div v-if="roller" class="animate-spin roller"></div>
          Accept
        </button>
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
