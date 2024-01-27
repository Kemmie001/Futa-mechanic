<script setup lang="ts">
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import { BarChart, useBarChart } from "vue-chart-3";
import { DoughnutChart, useDoughnutChart } from "vue-chart-3";
import { computed, onMounted, ref } from "vue";
import { maintenanceList } from "../composables/maintenances";
import { regInfo } from "@/store/register";
import { userInfo } from "@/store/user";
import { useRouter } from "vue-router";
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

const regInformation = regInfo().userData;
const roller = ref(false);
const router = useRouter();
const userInformation = computed(() => {
  return userInfo().userData;
});
onMounted(async () => {
  if (!Object.keys(userInformation.value).length) {
    roller.value = true;
    await userInfo().fetchUserProfile();
    roller.value = false;
  }
});
</script>

<template>
  <div class="flex px-8 lg:pr-0 md:pl-8 flex-col lg:flex-row gap-8">
    <div class="lg:w-7/12">
      <div
        v-if="roller"
        class="animate-spin roller flex items-center justify-center"
      ></div>
      <div class="pt-5">
        <h2 class="font-semibold text-primary9 text-2xl">
          Welcome {{ userInformation?.loggedInUser?.firstName }}
        </h2>
        <p class="text-base text-gray6 py-1">
          It’s a sunny day today, we hope to assist you on your car maintenance
          journey
        </p>
      </div>
      <div
        v-if="userInformation?.loggedInUser?.role !== 'maintenance_personnel'"
        class="mt-4 grid md:grid-cols-2 gap-4 bg-primaryI p-4 text-center mb-10"
      >
        <div
          class="flex flex-col h-24 items-center justify-center bg-white rounded-md"
        >
          <h2 class="font-bold text-primary5 text-xl">
            {{
              userInformation?.user_vehicle?.maint_logs?.length
                ? userInformation?.user_vehicle?.maint_logs?.length
                : 0
            }}
          </h2>
          <p class="font-medium text-sm text-primary">
            Work Orders
          </p>
        </div>
        <div
          class="flex flex-col h-24 items-center justify-center bg-white rounded-md"
        >
          <h2 class="font-bold text-primary5 text-xl">Akure/ Nigeria</h2>
          <p class="font-medium text-sm text-primary">Current Location</p>
        </div>
      </div>
      <div v-else class="mt-4 grid md:grid-cols-2 gap-6 pt-5 text-center mb-10">
        <div
          class="flex flex-col h-24 items-center border border-primary justify-center bg-white rounded-md"
        >
          <h2 class="font-bold text-primary5 text-xl">0124</h2>
          <p class="font-medium text-sm text-primary">Work Order</p>
        </div>
        <div
          class="flex flex-col h-24 items-center border border-primary justify-center bg-white rounded-md"
        >
          <h2 class="font-bold text-primary5 text-xl">0124</h2>
          <p class="font-medium text-sm text-primary">Work Order</p>
        </div>
        <div
          class="flex flex-col h-24 items-center border border-primary justify-center bg-white rounded-md"
        >
          <h2 class="font-bold text-primary5 text-xl">0124</h2>
          <p class="font-medium text-sm text-primary">Work Order</p>
        </div>
        <div
          class="flex flex-col h-24 items-center border border-primary justify-center bg-white rounded-md"
        >
          <h2 class="font-bold text-primary5 text-xl">0124</h2>
          <p class="font-medium text-sm text-primary">Work Order</p>
        </div>
      </div>
      <div class="mt-4 bg-primaryI p-4 mb-10">
        <h2 class="font-semibold text-lg text-black">
          Maintenance Activities Analytics
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
    <div class="lg:w-5/12 bg-primaryI py-10 px-6">
      <div class="text-right w-full"></div>
      <div
        v-if="userInformation?.loggedInUser?.role === 'vehicle_assignee'"
        class="active-driver p-4"
      >
        <h2 class="text-black text-lg font-semibold">Active Driver</h2>
        <div class="mx-auto my-5">
          <img
            class="w-30 h-30 object-contain bg-firstGray mx-auto rounded-full"
            :src="userInformation?.assigned_driver?.pic"
            alt="driver"
          />
        </div>
        <div class="">
          <div
            class="py-4 text-center text-sm"
            v-if="userInformation?.assigned_driver?.err"
          >
            No driver owner has been assigned to you yet
          </div>
          <div v-else class="mt-4 text-base">
            <span class="flex gap-3 pb-2">
              <p class="">Name:</p>
              <p class="font-semibold">
                {{ userInformation?.assigned_driver?.lastName }}
                {{ userInformation?.assigned_driver?.firstName }}
              </p>
            </span>
            <span class="flex gap-3 pb-2">
              <p class="">Staff ID:</p>
              <p class="font-semibold">
                {{ userInformation?.assigned_driver?.staffId }}
              </p>
            </span>
            <span class="flex gap-3 pb-2">
              <p class="">Phone Number:</p>
              <p class="font-semibold">
                {{ userInformation?.assigned_driver?.phone }}
              </p>
            </span>
          </div>
        </div>
      </div>
      <div
        v-if="userInformation?.loggedInUser?.role === 'maintenance_personnel'"
        class="active-driver p-3"
      >
        <h2 class="text-black text-lg font-medium">Maintenance Personnel</h2>
        <div class="mx-auto my-5">
          <img
            class="w-28 h-28 object-contain bg-firstGray mx-auto rounded-full"
            src="../assets/sellerAvatar.png"
            alt="driver"
          />
        </div>
        <div class="">
          <div class="mt-4 text-base">
            <span class="flex gap-3 pb-2">
              <p class="text-sm">Name:</p>
              <p class="font-medium text-sm">
                {{ userInformation.loggedInUser.firstName }}
                {{ userInformation.loggedInUser.lastName }}
              </p>
            </span>
            <span class="flex gap-3 pb-2">
              <p class="text-sm">Area of Expertise :</p>
              <p class="font-medium text-sm">
                Automotive Technician
              </p>
            </span>
          </div>
        </div>
      </div>
      <div v-else class="active-driver p-4">
        <h2 class="text-black text-lg font-semibold">Assigned Owner</h2>
        <div
          class="py-4 text-center text-sm"
          v-if="userInformation?.vehicle_assignee?.err"
        >
          No vehicle owner has been assigned to you yet
        </div>
        <div v-else class="">
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
              <p class="font-semibold">Isogun Oluwakemi</p>
            </span>
            <span class="flex gap-3">
              <p class="">Staff ID:</p>
              <p class="font-semibold">FUTA/STF/3910</p>
            </span>
          </div>
        </div>
      </div>
      <div
        v-if="userInformation?.loggedInUser?.role !== 'maintenance_personnel'"
        class="active-driver p-4 mt-10"
      >
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
      <div v-else class="active-driver p-3 mt-10">
        <h2 class="text-black text-lg font-semibold">
          Upcoming Works
        </h2>
        <div class="product-table py-4">
          <div class="table-container">
            <table class="table-auto w-full">
              <thead class="table__header">
                <tr
                  class="product_table__row text-left text-[#344054] bg-[#F9FAFB]"
                >
                  <th class="font-medium pl-2 text-sm py-3">Maintenance ID</th>
                  <th class="font-medium text-sm py-2 text-left">Date</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="maintenance in maintenanceList"
                  :key="maintenance.id"
                  @click="
                    router.push({
                      name: 'maintenanceSlug',
                      params: { slug: maintenance.id },
                    })
                  "
                  class="hover:bg-[#E4E7EC] border-b border-[#E4E7EC] cursor-pointer"
                >
                  <td class="table__image py-3 px-2">
                    <p class="text-xs w-32">#{{ maintenance.id }}</p>
                  </td>
                  <td class="table__date">
                    <p class="text-xs w-[220px] lg:w-full">26/01/2024</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- <Pagination v-model="page" :rows-number="rows" :rows-per-page="5" /> -->
          </div>
        </div>
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
