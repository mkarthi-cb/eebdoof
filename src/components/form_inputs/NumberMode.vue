<template>
    <div class="cn-form__field">
        <label class="cn-form__label">{{label}}</label>
        <input class="cn-form__control" @input="input($event)" type="number" :placeholder="placeholder" :value="vlaue">
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import Vuex from "vuex";
    import Component from 'vue-class-component';

    @Component({
        props: ['label', 'name', 'placeholder', 'vlaue'],
        components: {
            
        },
        name: 'NumberMode'
    })
export default class NumberMode extends Vue{
    label: string;
    name: string;
    value: number;

    input(event){
        let _this = this;
        let obj={
            name: _this.name,
            value: event.target.value
        }
        this.$emit("updateValue", obj);
    }

    data(){
        return {

        }
    }
}
</script>

