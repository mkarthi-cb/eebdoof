import Vue from "vue";
import { AppState } from '@/store/types/app';
import { ActionContext, Store } from "vuex";
import { getStoreAccessors } from "vuex-typescript";
import { State as RootState } from "@/store/app-state.ts";
import {Item} from "@/store/types/common.ts"
import cbClient from "@/cb-client";
import CbUtils from "@/plugins/utils"


type AppContext = ActionContext<AppState, RootState>

export const app = {
    namespaced: true,

    state: {
        user: {},
        hotels: [],
        orders: []
    },
    getters: {
    },
    mutations: {
        setFoodItem(state: AppState, item: Item){
            let items = state.hotels[0] && state.hotels[0].items;
            items = items || [];
            items.push(item);
            Vue.set(state.hotels[0], 'items', items);
        }
    },
    actions: {
        createFoodItem(context: AppContext, {_data}){            
            var promiseWrapper = new Promise((resolve, reject) => resolve(true));
            let val =JSON.stringify(_data.conf);
            return promiseWrapper.then(() => cbClient.app.create_item({}, {conf:val}).then((data) => {
                setFoodItem(context, data.item);
            }));
        }
    }

}

const getters = app.getters;
const actions = app.actions;
const mutations = app.mutations;
[getters, actions, mutations].forEach(dictionary =>
    Object.keys(dictionary).forEach(
        (key) => ((<any>dictionary[key])._vuexKey = key)
    )
);


const { commit, read, dispatch } = getStoreAccessors<AppState, RootState>("app");

export const setFoodItem = commit(mutations.setFoodItem);

export const createFoodItem = dispatch(actions.createFoodItem);