import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import store from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    meta: { layout: DefaultLayout },
    component: HomeView,
  },
  {
    path: "/register-as",
    name: "register-as",
    meta: { layout: AuthLayout },
    component: () =>
      import(/* webpackChunkName: "topics" */ "../views/RegisterAs.vue"),
  },
  {
    path: "/community",
    name: "community",
    component: () => import("../views/Community/HomeScreen.vue"),
    children: [
      {
        path: "top",
        name: "top",
        component: () =>
          import(
            /* webpackChunkName: "store settings" */ "../views/Community/TopTopics.vue"
          ),
      },
      {
        path: "categories",
        name: "categories",
        component: () =>
          import(
            /* webpackChunkName: "account settings" */ "../views/Community/CommunityCategories.vue"
          ),
      },
      {
        path: "new",
        name: "new",
        component: () =>
          import(
            /* webpackChunkName: "branding settings" */ "../views/Community/NewTopics.vue"
          ),
      },
    ],
  },
  {
    path: "/community/:topic",
    name: "topic",
    component: () =>
      import(
        /* webpackChunkName: "topics" */ "../views/Community/_TopicScreen.vue"
      ),
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("../views/StoreFront/SellersShop.vue"),
  },
  {
    path: "/overview",
    name: "overview",
    component: () => import("../views/OverviewScreen.vue"),
    meta: { layout: DefaultLayout },
  },
  {
    path: "/products",
    name: "products",
    meta: { layout: DefaultLayout },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Products/ProductsView.vue"
      ),
  },
  {
    path: "/add-product",
    name: "add-products",
    meta: { layout: DefaultLayout },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "add product" */ "../views/Products/AddProduct.vue"
      ),
  },
  {
    path: "/orders",
    name: "orders",
    meta: { layout: DefaultLayout },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "orders" */ "../views/Orders/OrdersView.vue"),
  },
  {
    path: "/orders/:id",
    name: "order detail",
    meta: { layout: DefaultLayout },
    component: () =>
      import(
        /* webpackChunkName: "order detail" */ "../views/Orders/OrderDetailView.vue"
      ),
  },
  {
    path: "/store-activities",
    name: "store activity",
    meta: { layout: DefaultLayout },
    component: () =>
      import(
        /* webpackChunkName: "store activities" */ "../views/Activity/ActivityView.vue"
      ),
  },
  {
    path: "/messages",
    name: "messages",
    meta: { layout: DefaultLayout },
    component: () =>
      import(
        /* webpackChunkName: "messages" */ "../views/Messages/MessagesView.vue"
      ),
  },
  {
    path: "/settings",
    name: "settings",
    meta: { layout: DefaultLayout },
    redirect: { name: "store" },
    component: () =>
      import(
        /* webpackChunkName: "settings" */ "../views/Settings/SettingsView.vue"
      ),
    children: [
      {
        path: "store",
        name: "store",
        component: () =>
          import(
            /* webpackChunkName: "store settings" */ "../views/Settings/StoreSettings.vue"
          ),
      },
      {
        path: "account",
        name: "account",
        component: () =>
          import(
            /* webpackChunkName: "account settings" */ "../views/Settings/AccountSettings.vue"
          ),
      },
      {
        path: "branding",
        name: "branding",
        component: () =>
          import(
            /* webpackChunkName: "branding settings" */ "../views/Settings/BrandSettings.vue"
          ),
      },
      {
        path: "payout",
        name: "payout",
        component: () =>
          import(
            /* webpackChunkName: "payout settings" */ "../views/Settings/PayoutSettings.vue"
          ),
      },
      {
        path: "password",
        name: "password",
        component: () =>
          import(
            /* webpackChunkName: "password settings" */ "../views/Settings/PasswordSettings.vue"
          ),
      },
    ],
  },
  {
    path: "/get-started",
    name: "getStarted",
    meta: { layout: DefaultLayout },
    component: () =>
      import(
        /* webpackChunkName: "store activities" */ "../views/GetStarted/GetStarted.vue"
      ),
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
