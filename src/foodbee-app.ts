import Vue from "vue";
import { app_store } from "@/store/app-store";
import HomePage from "@/HomePage.vue"
import { ElementSettingsCallbacks } from "types";
import GrabCodeModal from "@/checkout-common-components.js";

export default class FoodbeeApp {
  static settingsCallbacks : ElementSettingsCallbacks;

  // public static renderUserPage(properties) {    
  //   let containerElement = this.getContainerElement();
  //   new Vue({
  //     render: h => h(HomePage, {
  //       props: {
  //         properties
  //       },
  //     }),
  //     store: app_store(),
  //   }).$mount(containerElement);
  // }

  public static renderSettings() {
    var appComps = document.querySelectorAll('food-bee-app');
    var _store = app_store();
    while(appComps.length != 0) {
      let appComp = appComps[0];
      let vm = new Vue({
        el: appComp,
        store: _store,
        template: appComp.outerHTML
      });
      appComps = document.querySelectorAll('food-bee-app');
    }
  }

  public static renderHotelSettings() {
    var appComps = document.querySelectorAll('food-bee-hotel');
    var _store = app_store();
    while(appComps.length != 0) {
      let appComp = appComps[0];
      let vm = new Vue({
        el: appComp,
        store: _store,
        template: appComp.outerHTML
      });
      appComps = document.querySelectorAll('food-bee-hotel');
    }
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