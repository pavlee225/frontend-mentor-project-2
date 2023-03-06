import { createApp } from "vue";

import App from "./App.vue";
import "./index.css";

import { createRouter, createWebHistory } from "vue-router";
import CheckOut from "@/pages/CheckOut";
import HomePage from "@/pages/HomePage";
// import router from "./router";

import store from "./store/store";



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      component: HomePage,
      name: "Homepage"
    },
    {
      path: "/checkout",
      component: CheckOut,
      name: "Checkout"
    },
    {
      //new route
    },
  ],
});
const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
// createApp(App).mount("#app");
