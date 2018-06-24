<template>
    <div>
        <div class="cn-modal cn-modal-danger cn-modules">
            <div class="cn-modal__container">
                <div class="cn-modal__wrap">
                    <div class="cn-modal__group"> 
                        <div class="cn-modal__block">
                            <div class="cn-modal__main">
                                <div class="cn-modal__header">
                                    <div class="cn-modal__title">Delete Item {{item.name || ''}}</div>
                                    <div class="cn-modal__desc" >
                                        Will delete this item permanently from your restaurant. 
                                    </div>
                                </div>
                            </div>
                            <div class="cn-modal__aside">
                                <div></div>
                                <div class="cn-modal__actions cn-mar--t-md">
                                    <div class="cn-modal__action">
                                        <!-- <span class="cn-btn cn-btn--raised cn-btn--primary" @click="next()"  :class="{'cn-btn--spinner': showLoader}">{{submitText}} </span> -->
                                        <input type="button" class="cn-btn cn-btn--raised cn-btn--primary cn-btn--action" value="Delete" @click="next()" :class="{'cn-btn--spinner': showLoader}">
                                    </div>
                                    <div class="cn-modal__action">
                                        <!-- <a class="cn-modal__close" tabindex="0" @click="closeModal()">{{cancelBtnText}}</a> -->
                                        <a class="cn-modal__link--muted" tabindex="0" @click="closeModal()">Dismiss</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cn-modal-overlay"></div>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';
    import Vuex from "vuex";
    import Component from 'vue-class-component';
    import cbClient from "@/cb-client";
    import SingleLine from "@/components/form_inputs/SingleLine.vue";
    import NumberMode from "@/components/form_inputs/NumberMode.vue";
    import CbUtils from "@/plugins/utils"
    import Select from "@/components/form_inputs/Select.vue";
    import * as app from "@/store/app";
import { Item } from 'store/types/common';

    @Component({
        props: ['item'],
        components: {
            "single-line": SingleLine,
            "select-mode": Select,
            "number-mode": NumberMode
        },
        name: 'CreateItemModal'
    })
    export default class CreateItemModal extends Vue {
        properties: any;
        item: Item;
        showModalBox: boolean = false;
        showLoader: boolean;
        created() {
            let _this = this;
            
        }
        updateValue(obj){
            Vue.set(this.item, obj.name, obj.value);
        }
        next(): void{
            this.showLoader = true;
            let _this = this;
            let data ={
                conf: _this.item
            }
            app.createFoodItem(this.$store, {_data: data}).then(data=>{
                this.showLoader = false;
                this.closeModal();
            }).catch(error => {
                this.showLoader = false;
            });
        }

        closeModal(): void {
            this.$emit("closeCreateItemModalDialog");
        }

        data(){
            return {
                showModalBox: true,
                showLoader: false,
                item: {}
            }
        }
        get options(): Array<any>{
            let options = [{
                val:'veg',
                name:'Veg'
                },
                {val:'non_veg',
                name:'Non veg'
                }]
            return options;
        }
    }
</script>

<style lang="scss">
.cn-modal {
    &__ {
        // &container {
        //     max-width: 840px;
        // }
        // &content {
        //     display: flex;
        //     padding: 40px;
        // }
        &rules{
            &--{
                &border{
                    padding: 16px;
                    border-left: 1px solid #ddd;
                }
            }
        }
        &rule{
            padding: 6px 0;
        }
        // &heading {
        //     font-size: 18px;
        //     line-height: 24px;
        //     margin-bottom: 15px;
        // }
        &condition {
            margin-bottom: 15px;
        }
        &strong {
            font-weight: 600;
        }
        &left{
            width: 70%;
        }
        &right{
            width: 30%;
        }
        &criteria {
            border-radius: 2px;
            width: 100%;
            margin: 9px 0;
            background: rgba(51,103,214,0.08);
            border-radius: 1px;
        }
        &criterion {
            font-size: 13px;
            padding: 3px 9px;
            line-height: 24px;
        }
        &scenario {
            font-weight: 600;
        }
        &link {
            font-size: 13px;
            color: #3367D6;
            cursor: pointer;
            &-- {
                &muted {
                    text-decoration: underline;
                    color: #7F7F7F;
                }
            }
        }
        &action-wrap {
            text-align: center;
            margin-top: -15px;
        }
    }
}
.cn-menu {
    &--{
        &readonly{
            pointer-events:none;
            .cn-menu{
                &__{
                    &symbol{
                        display: none;
                    }
                }
            }
        }
    }
}
</style>