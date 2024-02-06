<template>
  <tr class="hover:bg-primaryI cursor-pointer">
    <td class="table__image py-5 px-2">
      <p class="text-xs w-28">
        {{ moment(props.dateStr).format("D MMM YYYY") }}
      </p>
    </td>
    <td class="table__date">
      <p class="text-xs w-28 lg:w-full">{{ props.startingOdometer }}km</p>
    </td>
    <td class="table__date">
      <p class="text-xs w-32 lg:w-full">{{ props.endingOdometer }}km</p>
    </td>
    <td class="table__date">
      <p class="text-xs w-40 lg:w-full">{{ props.fuelLevel }}</p>
    </td>
    <td class="table__status">
      <div class="flex items-center gap-2 w-40 lg:w-full">
        <p class="text-xs">{{ props.fuelUsed }}</p>
      </div>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import moment from "moment";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  id: String,
  dateStr: String,
  startingOdometer: String,
  endingOdometer: String,
  fuelLevel: String,
  fuelUsed: String,
});
</script>

<style></style>
