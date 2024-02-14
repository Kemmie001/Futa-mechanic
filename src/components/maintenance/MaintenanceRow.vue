<template>
  <tr
    @click="
      router.push({
        name: 'maintenanceSlug',
        params: { slug: props.m },
      })
    "
    class="hover:bg-primaryI cursor-pointer"
  >
    <td class="table__image py-5 px-2">
      <p class="text-xs w-32">#{{ props.id }}</p>
    </td>
    <td class="table__date">
      <p class="text-xs w-[220px] lg:w-full">{{ props.concern }}</p>
    </td>
    <td class="table__date">
      <p class="text-xs w-32 lg:w-full">
        {{ moment(props.proposedDate).format("D MMM YYYY") }}
      </p>
    </td>
    <td class="table__date">
      <p class="text-xs w-40 lg:w-full">{{ props.personnel }}</p>
    </td>
    <td class="table__status text-center">
      <div class="flex items-center gap-2 w-36 lg:w-full font-medium">
        <p
          class="text-xs capitalize"
          :class="[
            { 'text-[#CB1A14]': props.status === 'pending' },
            { 'text-[#DD900D]': props.status === 'in-shop' },
            { 'text-[#664101]': props.status === 'in-progress' },
            { 'text-[#0F973D]': props.status === 'completed' },
          ]"
        >
          {{ props.status }}
        </p>
      </div>
    </td>
  </tr>
</template>

<script setup lang="ts">
import moment from "moment";
import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  id: String,
  concern: String,
  proposedDate: Date,
  personnel: String,
  status: String,
  m: String,
});
</script>

<style></style>
