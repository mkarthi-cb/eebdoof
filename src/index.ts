import Vue from "vue";
import SlideTransition from "@/components/SlideTransition.vue";
import Menu from "@/helpers/menu.ts";
import Popup from "@/helpers/popup.ts";
import CbReady from "@/directives/ready-hooks.js"
import CbBillingRules from "@/cb-billing-rules.ts";
import CbUtils from "@/plugins/utils.js";

Vue.component('cb-slide',SlideTransition);
Vue.directive('cb-menu', Menu);
Vue.directive('cb-popup', Popup);
Vue.directive('cb-ready', CbReady);

Vue.use(CbUtils)

declare global {
  interface Window {
    CbBillingRules: CbBillingRules
  }
}

declare global {
  interface Window {
    CbBillingRules: CbBillingRules
  }
}

window.CbBillingRules = CbBillingRules;