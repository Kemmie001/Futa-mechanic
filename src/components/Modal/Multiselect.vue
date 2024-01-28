<template>
  <div class="container">
    <div class="select-btn" :class="{ open: select }">
      <div class="flex gap-3 flex-wrap w-11/12" v-if="services.length !== 0">
        <div
          v-for="(item, index) in formattedOptions"
          :key="index"
          v-show="item.checked"
          class="multi__selected flex items-center gap-2"
        >
          {{ item.name }}
          <i class="fa-solid fa-x" @click="handleOptionClick(index)"></i>
        </div>
      </div>
      <span v-else class="btn-text">Select Service</span>

      <span class="arrow-dwn w-1/12" @click="toggleSelect">
        <i class="fa-solid fa-chevron-down"></i>
      </span>
    </div>
    <ul class="list-items" v-show="select">
      <li
        v-for="(item, index) in formattedOptions"
        :key="index"
        @click="handleOptionClick(index)"
        :class="{ checked: item.checked }"
        class="item"
      >
        <span class="checkbox">
          <i class="fa-solid fa-check check-icon"></i>
        </span>
        <span class="item-text">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

const select = ref(false);
const services = ref([]);
const props = defineProps({
  options: {
    type: Array,
    default: [{}],
  },
});
const emit = defineEmits(["input"]);

const toggleSelect = () => {
  select.value = !select.value;
};
const handleOptionClick = (index: number) => {
  let clickedValue: any = props.options[index];

  let exitIndex = services.value.findIndex((v: any) => v === clickedValue);
  if (!services.value.includes(clickedValue)) {
    if (clickedValue.id) {
      // if (this.value.length <= 2) {
      services.value.push(clickedValue);
      // this.select = false;
      // }
    } else {
      if (services.value.length <= 0) {
        services.value.push(clickedValue);
        select.value = false;
      }
    }
  } else {
    services.value.splice(exitIndex, 1);
  }

  emit("input", services.value);
};
const formattedOptions = computed(() => {
  let fo = props.options.map((option: any) => {
    let checked = false;
    if (services.value.some((e) => e?.name === option.name)) {
      checked = true;
    }

    return { ...option, checked: checked };
  });
  return fo;
});
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
}
.select-btn {
  border-radius: 10px;
  background: #fff;
  border: 1px solid #b0b0b0;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.select-btn .btn-text {
  font-size: 14px;
  font-weight: 400;
  color: #b0b0b0;
}
.multi__selected {
  padding: 7px 10px;
  border: 0.5px solid #555;
  color: #555;
  font-size: 14px;
  border-radius: 10px;
}
.select-btn .arrow-dwn {
  display: flex;
  height: 21px;
  width: 21px;
  background: #000462;
  border-radius: 50%;
  color: #fff;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}
.select-btn.open .arrow-dwn {
  transform: rotate(-180deg);
}
.list-items {
  position: relative;
  margin-top: 15px;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.list-items .item {
  display: flex;
  align-items: center;
  list-style: none;
  height: 50px;
  background-color: #fafafa;
  cursor: pointer;
  transition: 0.3s;
  margin-bottom: 5px;
  padding: 0 15px;
  border-radius: 8px;
}
.list-items .item:hover {
  background-color: #e7edfe;
}
.item .item-text {
  font-size: 16px;
  font-weight: 400;
  color: #333;
}
.item .checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  border-radius: 4px;
  margin-right: 12px;
  border: 1.5px solid #b0b0b0;
  transition: all 0.3s ease-in-out;
}
.item.checked .checkbox {
  background-color: #000000;
  border-color: #000000;
}
.checkbox .check-icon {
  color: #fff;
  font-size: 11px;
  transform: scale(0);
  transition: all 0.2s ease-in-out;
}
.item.checked .check-icon {
  transform: scale(1);
}
</style>
