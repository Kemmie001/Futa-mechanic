<script setup lang="ts">
import { computed, defineProps, ref } from "vue";
const onPageBack = () => {
  if (props.modelValue - 1 >= 1) {
    onPageClick(props.modelValue - 1);
  }
};

const emit = defineEmits(["update:modelValue"]);
const onPageClick = (page: number) => {
  emit("update:modelValue", page);
};

const onPageForward = () => {
  if (props.modelValue + 1 <= Math.ceil(props.rowsNumber / props.rowsPerPage)) {
    onPageClick(props.modelValue + 1);
  }
};

const pages = computed(() => {
  function range(start: number, end: number) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
  }
  const max = props.maxVisible;
  const middle = Math.floor(props.maxVisible / 2);
  const pageNum = Math.ceil(props.rowsNumber / props.rowsPerPage);

  if (pageNum < max) {
    return range(1, pageNum);
  }

  let start = props.modelValue - middle;
  let end = props.modelValue + middle;

  // If we're close to the end
  if (props.modelValue >= pageNum - middle) {
    start = pageNum - max + 1;
    end = pageNum;
  }

  return range(Math.max(1, start), Math.max(end, max));
});

const props = defineProps({
  modelValue: {
    type: Number,
    default: () => 1,
  },
  rowsNumber: {
    type: Number,
    default: () => 0,
  },
  rowsPerPage: {
    type: Number,
    default: () => 0,
  },
  maxVisible: {
    // Max buttons in a row
    type: Number,
    default: () => 5,
  },
});
</script>

<template>
  <div>
    <ul class="pagination my-10 flex gap-2 justify-between">
      <p class="text-gray5 text-sm font-semibold">Page 1 of 30</p>

      <div class="flex gap-4">
        <template v-for="(i, y) in pages">
          <li
            v-if="y < maxVisible"
            :key="'pagination-page-' + i"
            :class="{ 'page-item': 1, active: modelValue == i }"
          >
            <a class="page-link" @click="onPageClick(i)">{{ i }}</a>
          </li>
        </template>
      </div>
      <div class="flex">
        <li class="page-item">
          <a class="page-link" @click="onPageBack">
            <i class="fas fa-angle-left"></i>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" @click="onPageForward">
            <i class="fas fa-angle-right"></i>
          </a>
        </li>
      </div>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
