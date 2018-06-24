import Vue from "vue";
import { AppState } from '@/store/types/app';
import { ActionContext, Store } from "vuex";
import { getStoreAccessors } from "vuex-typescript";
import { State as RootState } from "@/store/app-state.ts";
import {Item, Hotel, User, Cart, Order} from "@/store/types/common.ts"
import cbClient from "@/cb-client";
import CbUtils from "@/plugins/utils"


type AppContext = ActionContext<AppState, RootState>

export const app = {
    namespaced: true,

    state: {
        user: {},
        hotels: [],
        orders: [],
        cart:{
            items:[]
        }
    },
    getters: {
        getUser(state:AppState){
            return state.user;
        },
        getHotels(state: AppState){
            return state.hotels;
        },
        getCart(state: AppState): Cart{
            return state.cart;
        }
    },
    mutations: {
        setFoodItem(state: AppState, item: Item){
            let items = state.hotels[0] && state.hotels[0].items;
            items = items || [];
            items.push(item);
            Vue.set(state.hotels[0], 'items', items);
        },
        // setFoodItems(state: AppState, items: Array<Item>){
        //     Vue.set(state.)
        // },
        setCart(state: AppState, cart: Cart){
            Vue.set(state, 'cart', cart);
        },
        setHotels(state: AppState, hotels: Array<Hotel>){
            Vue.set(state, 'hotels', hotels);
        },
        setUser(state: AppState, user:User){
            Vue.set(state, 'user', user);
        },
        setOreders(state: AppState, orders: Array<Order>){
            Vue.set(state, 'orders', orders);
        }
    },
    actions: {
        createFoodItem(context: AppContext, {_data}){            
            var promiseWrapper = new Promise((resolve, reject) => resolve(true));
            let conf = _data.conf;
            let d = {
                name: conf.name, 
                type: conf.type, 
                price:conf.price, 
                code: conf.code
            };
            return promiseWrapper.then(() => cbClient.app.create_item({}, d).then((data) => {
                setHotels(context, data.hotels);
            }));
        },
        updateItem(context: AppContext, {_data}){
            var promiseWrapper = new Promise((resolve, reject) => resolve(true));
            let conf = _data.conf;
            let d = {
                name: conf.name, 
                type: conf.type, 
                price:conf.price, 
                code: conf.code,
                id: conf.id
            };
            return promiseWrapper.then(() => cbClient.app.update_item({}, d).then((data) => {
                setHotels(context, data.hotels);
            }));
        },
        deleteFoodItem(context: AppContext, {itemId}){
            var promiseWrapper = new Promise((resolve, reject) => resolve(true));
            return promiseWrapper.then(() => cbClient.app.remove_item({}, {item_id:itemId}).then((data) => {
                setHotels(context, data.hotels);
            }));
        },
        getHotelUserConf(context: AppContext){
            var promiseWrapper = new Promise((resolve, reject) => resolve(true));
            return promiseWrapper.then(() => cbClient.app.get_hotel_conf({}).then((data) => {
                setHotels(context, data.hotels);
                setUser(context, data.user);
            }));
        },
        addToCart(context: AppContext, {item, qty}){
            var promiseWrapper = new Promise((resolve, reject) => resolve(true));
            return promiseWrapper.then(() => cbClient.app.add_to_cart({}, {item_id:item.id, quantity:qty}).then((data) => {
                setCart(context, data.cart);
            }));
        },
        getCompayUserConf(context: AppContext){
            var promiseWrapper = new Promise((resolve, reject) => resolve(true));
            return promiseWrapper.then(() => cbClient.app.get_user_info({},{}).then((data) => {
                setCart(context, data.cart);
                setUser(context, data.user);
                setHotels(context, data.hotels);
                setOreders(context, data.orders);
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

export const getUser = read(getters.getUser);
export const getHotels = read(getters.getHotels);
export const getCart = read(getters.getCart);

export const setFoodItem = commit(mutations.setFoodItem);
export const setHotels = commit(mutations.setHotels);
export const setUser = commit(mutations.setUser);
export const setCart = commit(mutations.setCart);
export const setOreders = commit(mutations.setOreders);

export const createFoodItem = dispatch(actions.createFoodItem);
export const getHotelUserConf = dispatch(actions.getHotelUserConf);
export const deleteFoodItem = dispatch(actions.deleteFoodItem);
export const updateItem = dispatch(actions.updateItem);
export const addToCart = dispatch(actions.addToCart);
export const getCompayUserConf = dispatch(actions.getCompayUserConf);