<template>
  <tr
    @click="
      router.push({
        name: 'maintenance-slug',
        params: { slug: props.id },
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
      <p class="text-xs w-32 lg:w-full">{{ props.milage }}km</p>
    </td>
    <td class="table__date">
      <p class="text-xs w-40 lg:w-full">{{ props.personnel }}</p>
    </td>
    <td class="table__status text-center">
      <div class="flex items-center gap-2 w-36 lg:w-full font-bold">
        <p
          class="text-xs"
          :class="[
            { 'text-[#CB1A14]': props.status === 'Pending' },
            { 'text-[#DD900D]': props.status === 'In Shop' },
            { 'text-[#664101]': props.status === 'In Progress' },
            { 'text-[#0F973D]': props.status === 'Completed' },
          ]"
        >
          {{ props.status }}
        </p>
      </div>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  id: String,
  concern: String,
  milage: Number,
  personnel: String,
  status: String,
});
</script>

<style></style>
