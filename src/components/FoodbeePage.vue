<template>
    <div>
        <div class="cn-btn cn-btn--primary" @click="showCreateItemModalBox = true">Create Item</div>
        <create-item v-if="showCreateItemModalBox" @closeCreateItemModalDialog= "closeCreateItemModalDialog()"/>
    </div>
</template>
<script lang="ts">

import Vue from 'vue';
import Vuex from "vuex";
import Component from 'vue-class-component';
import CreateItemModal from "@/components/CreateItemModal.vue";


@Component({
        props: {
        },
        components: {
            // 'cb-placeholder': Placeholder,
            'create-item':CreateItemModal
        },
        name: 'food-bee-app'
    })
export default class FoodbeePage extends Vue {
    showCreateItemModalBox: boolean = false;
    

    closeCreateItemModalDialog(){
        this.showCreateItemModalBox = false;
    }
}
</script>

