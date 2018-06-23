import Vue from 'vue';
import Vuex from 'vuex';
import { State } from "@/store/app-state";
import { app } from "@/store/app";

Vue.use(Vuex)

export const createStore = () => new Vuex.Store<State>({
    modules: {
        app
    },
});

export const app_store = createStore;