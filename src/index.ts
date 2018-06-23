import Vue from "vue";
import SlideTransition from "@/components/SlideTransition.vue";
import FoodbeePage from "@/components/FoodbeePage.vue";
import Menu from "@/helpers/menu.ts";
import Popup from "@/helpers/popup.ts";
import CbReady from "@/directives/ready-hooks.js"
import FoodbeeApp from "@/foodbee-app.ts";
import CbUtils from "@/plugins/utils.js";

Vue.component('cb-slide',SlideTransition);
Vue.directive('cb-menu', Menu);
Vue.directive('cb-popup', Popup);
Vue.directive('cb-ready', CbReady);

Vue.component('food-bee-app',FoodbeePage);

Vue.use(CbUtils)

declare global {
  interface Window {
    FoodbeeApp: FoodbeeApp
  }
}

declare global {
  interface Window {
    FoodbeeApp: FoodbeeApp
  }
}

window.FoodbeeApp = FoodbeeApp;

document.addEventListener("DOMContentLoaded", function() {
  FoodbeeApp.renderSettings();
})