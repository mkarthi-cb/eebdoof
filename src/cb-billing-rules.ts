import Vue from "vue";
import { app_store } from "@/store/app-store";
import HomePage from "@/HomePage.vue"
import { ElementSettingsCallbacks } from "types";
import GrabCodeModal from "@/checkout-common-components.js";

export default class CbBillingRules {
  static settingsCallbacks : ElementSettingsCallbacks;

  public static renderUserPage(properties) {    
    let containerElement = this.getContainerElement();
    new Vue({
      render: h => h(HomePage, {
        props: {
          properties
        },
      }),
      store: app_store(),
    }).$mount(containerElement);
  }


  private static getContainerElement(): HTMLDivElement {
    let containerElement = <HTMLDivElement>document.getElementById("fb-app");
    if(!containerElement) {
      containerElement = document.createElement("div");
      containerElement.id = "fb-app";
      document.body.appendChild(containerElement);
    }
    return containerElement;
  }
}