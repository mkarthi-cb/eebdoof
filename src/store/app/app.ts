import { AppState } from '@/store/types/app';
import { ActionContext, Store } from "vuex";
import { State as RootState } from "@/store/app-state.ts";


type AppContext = ActionContext<AppState, RootState>

export const app = {
    namespaced: true,

    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    }
}