<template>
    <div class="cn-form__field">
        <label class="cn-form__label" >{{label}}</label>
            <select class=" cb-select cn-form__control" @input="input($event)">
                    <option v-for="(opt, index) in options" v-bind:key="index" value="opt" :selected="opt == vlaue" class="cb-select-opt">{{opt}}</option>
            </select>
        <div class="cn-form__help"></div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
 import Vuex from "vuex";
import Component from 'vue-class-component';

@Component({
    props: ['label', 'name', 'placeholder', 'vlaue', 'options'],
    components: {
        
    },
    name: 'Select'
})
export default class Select extends Vue{
    value: any;
    options: Array<any>;
    data(){
        return {
            options:[]
        }
    }
    input(event){
        let obj={
            name: name,
            value: event.target.value
        }
        this.$emit("updateValue", obj);
    }

}
</script>

