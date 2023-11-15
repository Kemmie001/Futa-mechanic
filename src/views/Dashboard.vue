<script setup lang="ts">
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import { BarChart, useBarChart } from "vue-chart-3";
import { DoughnutChart, useDoughnutChart } from "vue-chart-3";
import { computed, ref } from "vue";
type FILTEMODE = "ALLTIME" | "MONTH" | "YEAR";

const filterMode = ref<FILTEMODE>("MONTH");

Chart.register(...registerables);
const data = ref([
  250,
  250,
  750,
  500,
  250,
  750,
  1000,
  250,
  750,
  1000,
  750,
  1000,
]);

const chartData = computed(() => ({
  labels: [
    // "JAN",
    // "FEB",
    // "MAR",
    // "APR",
    // "MAY",
    // "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ],
  datasets: [
    {
      data: data.value,
      backgroundColor: "#1671D9",
      pointRadius: 0,
      maxBarThickness: 40,
    },
  ],
}));
const options = computed<ChartOptions<"line">>(() => ({
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        stepSize: Math.max(Number(...data.value)) > 10 ? 250 : 1,
      },
    },
    myScale: {
      type: "logarithmic",
      position: "right",
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    // },
  },
}));

const options2 = computed<ChartOptions<"doughnut">>(() => ({
  plugins: {
    legend: {
      display: false,
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    // },
  },
}));

const { barChartProps, barChartRef } = useBarChart({
  chartData,
  options,
});

// pie chart
const serviceValues = ref([30, 40, 60, 70]);
const serviceLabels = ref([
  "Tyre Change",
  "Brake Pad Repair",
  "Oil Change",
  "Other Services",
]);

const testData = computed<ChartData<"doughnut">>(() => ({
  labels: serviceLabels.value,
  datasets: [
    {
      data: serviceValues.value,
      backgroundColor: ["#80BBFF", "#1671D9", "#034592", "#012657"],
    },
  ],
}));

const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
  chartData: testData,
  options: options2,
});
</script>

<template>
  <div class="flex px-8 lg:pr-0 md:pl-8 flex-col lg:flex-row gap-8">
    <div class="lg:w-7/12">
      <div class="py-5">
        <h2 class="font-bold text-primary9 text-2xl">Welcome Oluwakemi</h2>
        <p class="text-base text-gray6 py-1">
          It’s a sunny day today, we hope to assist you on your car maintenance
          journey
        </p>
      </div>
      <div
        class="mt-4 grid md:grid-cols-2 gap-4 bg-primaryI p-4 text-center mb-10"
      >
        <div
          class="flex flex-col h-24 items-center justify-center bg-white rounded-md"
        >
          <h2 class="font-bold text-primary5 text-xl">0567</h2>
          <p class="font-medium text-sm text-primary">
            Total Maintenance Performed
          </p>
        </div>
        <div
          class="flex flex-col h-24 items-center justify-center bg-white rounded-md"
        >
          <h2 class="font-bold text-primary5 text-xl">Akure/ Nigeria</h2>
          <p class="font-medium text-sm text-primary">Current Location</p>
        </div>
        <div
          class="flex flex-col h-24 items-center justify-center bg-white rounded-md"
        >
          <h2 class="font-bold text-primary5 text-xl">1024</h2>
          <p class="font-medium text-sm text-primary">
            Total Mileage (km)
          </p>
        </div>
        <div
          class="flex flex-col h-24 items-center justify-center bg-white rounded-md"
        >
          <h2 class="font-bold text-primary5 text-xl">200</h2>
          <p class="font-medium text-sm text-primary">
            Last Recorded Mileage (km)
          </p>
        </div>
        <div
          class="flex flex-col h-24 items-center justify-center bg-white rounded-md"
        >
          <h2 class="font-bold text-primary5 text-xl">10 Nov, 2023</h2>
          <p class="font-medium text-sm text-primary">
            Last Recorded Maintenance
          </p>
        </div>
        <div
          class="flex flex-col h-24 items-center justify-center bg-white rounded-md"
        >
          <h2 class="font-bold text-primary5 text-xl">13 Nov, 2023</h2>
          <p class="font-medium text-sm text-primary">
            Next Maintenance
          </p>
        </div>
      </div>
      <div class="mt-4 bg-primaryI p-4 mb-10">
        <h2 class="font-semibold text-lg text-black">
          Maintenance Analytics
        </h2>
        <div class="flex items-center gap-4">
          <!-- <select
            name=""
            class="text-primary font-medium uppercase text-xs outline-none"
            id=""
            v-model="filterMode"
          >
            <option value="MONTH" selected class="tw-uppercase"
              >This Months</option
            >
            <option value="ALLTIME" selected>All Time</option>
            <option value="YEAR" selected>Year</option>
          </select> -->
        </div>

        <BarChart class="my-5" v-bind="barChartProps" />
      </div>
    </div>
    <div class="lg:w-5/12 bg-primaryI py-12 px-8">
      <div class="text-right w-full"></div>
      <div class="active-driver p-4">
        <h2 class="text-black text-lg font-semibold">Active Driver</h2>
        <div class="mx-auto my-5">
          <img
            class="w-28 h-28 object-contain mx-auto rounded-full"
            src="../assets/sellerAvatar.png"
            alt="driver"
          />
        </div>
        <div class="mt-4 text-base">
          <span class="flex gap-3 pb-2">
            <p class="">Name:</p>
            <p class="font-semibold">Babatunde Abolaji</p>
          </span>
          <span class="flex gap-3">
            <p class="">Staff ID:</p>
            <p class="font-semibold">FUTA/DRV/1010</p>
          </span>
        </div>
      </div>
      <div class="active-driver p-4 mt-10">
        <h2 class="text-black text-lg font-semibold mb-5">Service Chart</h2>
        <DoughnutChart v-bind="doughnutChartProps" />
        <ul class="flex flex-col gap-4 my-5">
          <li class="flex gap-3 items-center">
            <span class="w-3 h-3 rounded-full bg-primary2"></span>
            <p class="text-sm font-medium">Tyre Change</p>
          </li>
          <li class="flex gap-3 items-center">
            <span class="w-3 h-3 rounded-full bg-primary"></span>
            <p class="text-sm font-medium">Brake Pad Repair</p>
          </li>
          <li class="flex gap-3 items-center">
            <span class="w-3 h-3 rounded-full bg-primary6"></span>
            <p class="text-sm font-medium">Oil Change</p>
          </li>
          <li class="flex gap-3 items-center">
            <span class="w-3 h-3 rounded-full bg-[#012657]"></span>
            <p class="text-sm font-medium">Other Services</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
.active-driver {
  box-shadow: 0px 10px 18px -2px #10192812;
  border-radius: 8px;
  background-color: white;
}
</style>
