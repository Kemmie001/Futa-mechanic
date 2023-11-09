import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    meta: { layout: DefaultLayout },
    component: HomeView,
  },
  // Authentication pages
  {
    path: "/register-as",
    name: "register-as",
    meta: { layout: AuthLayout },
    component: () =>
      import(/* webpackChunkName: "topics" */ "../views/RegisterAs.vue"),
  },

  {
    path: "/register/vehicle-owner",
    meta: { layout: AuthLayout },
    name: "vehicle-owner",
    component: () =>
      import(
        /* webpackChunkName: "vehicle-owner" */ "../views/Auth/Register/VehicleOwner.vue"
      ),
  },
  {
    path: "/login/vehicle-owner",
    meta: { layout: AuthLayout },
    name: "login-vehicle-owner",
    component: () =>
      import(
        /* webpackChunkName: "vehicle-owner" */ "../views/Auth/Login/VehicleOwner.vue"
      ),
  },
  {
    path: "/register/vehicle-driver",
    meta: { layout: AuthLayout },
    name: "vehicle-Driver",
    component: () =>
      import(
        /* webpackChunkName: "vehicle-Driver" */ "../views/Auth/Register/VehicleDriver.vue"
      ),
  },
  {
    path: "/login/maintenance-personnel",
    meta: { layout: AuthLayout },
    name: "login-maintenance-personnel",
    component: () =>
      import(
        /* webpackChunkName: "vehicle-Driver" */ "../views/Auth/Login/MaintenancePersonnel.vue"
      ),
  },
  {
    path: "/register/maintenance-personnel",
    meta: { layout: AuthLayout },
    name: "maintenance-personnel",
    component: () =>
      import(
        /* webpackChunkName: "vehicle-Driver" */ "../views/Auth/Register/MaintenancePersonnel.vue"
      ),
  },
  {
    path: "/login/vehicle-driver",
    meta: { layout: AuthLayout },
    name: "login-vehicle-Driver",
    component: () =>
      import(
        /* webpackChunkName: "vehicle-Driver" */ "../views/Auth/Login/VehicleDriver.vue"
      ),
  },
  {
    path: "/auth/verify-email",
    meta: { layout: AuthLayout },
    name: "verify-email",
    component: () =>
      import(
        /* webpackChunkName: "sigin page" */ "../views/Auth/VerifyEmail.vue"
      ),
  },
  {
    path: "/auth/forgot-password",
    meta: { layout: AuthLayout },
    name: "forgot-password",
    component: () =>
      import(
        /* webpackChunkName: "sigin page" */ "../views/Auth/ForgotPassword.vue"
      ),
  },
  {
    path: "/auth/check-email",
    meta: { layout: AuthLayout },
    name: "check-email",
    component: () =>
      import(
        /* webpackChunkName: "sigin page" */ "../views/Auth/CheckEmail.vue"
      ),
  },
  {
    path: "/auth/password-reset-verification",
    meta: { layout: AuthLayout },
    name: "password-reset-verification",
    component: () =>
      import(
        /* webpackChunkName: "sigin page" */ "../views/Auth/AwaitVerification.vue"
      ),
  },
  // Dashboard
  {
    path: "/dashboard",
    name: "dashboard",
    meta: { layout: DashboardLayout },
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue"),
  },
  {
    path: "/maintenance",
    name: "maintenance-dashboard",
    meta: { layout: DashboardLayout },
    component: () =>
      import(
        /* webpackChunkName: "Dashboard" */ "../views/maintenance/MaintenanceDashboard.vue"
      ),
  },
  {
    path: "/:slug",
    name: "maintenance-slug",
    component: () =>
      import(
        /* webpackChunkName: "Dashboard" */ "../views/maintenance/[slug].vue"
      ),
    meta: { layout: DashboardLayout },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
