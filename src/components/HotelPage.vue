<template>
    <div>
        <div class="fbs">
            <!-- =======================================================================
            Start: FB 
            ======================================================================== -->
            <div class="fb-container">
                <!-- =======================================================================
                Start: Main Header 
                ======================================================================== -->
                <div class="fb-header">
                    <div class="fb-header__container">
                        <div class="fb-header__main">
                            <div class="fb-header__logo">
                                <img src="/local-assets/app/modules/images/fb/fb-logo-white.png" alt="" class="img-responsive">
                            </div>
                        </div>
                        <div class="fb-header__actions">
                            <div class="fb-header__action">
                                <div class="fb-notify">
                                    <div class="icon cn-glyph-bell"></div>
                                </div>
                            </div>
                            <div class="fb-header__action fb-track">
                                My Orders
                            </div>
                            <div class="fb-header__action">
                                <div class="fb-acc">
                                    <div class="fb-acc__figure">
                                        <img src="/local-assets/app/modules/images/fb/avt.jpg" alt="" class="img-responsive">
                                    </div>
                                    <div class="fb-acc__content">
                                        <div class="fb-acc__user">
                                            {{userName || 'User'}}
                                            <div class="icon cn-glyph-menu-down"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fb-main">
			<div class="fb-main__container">
			<!-- ===================================================================
			Start: Main Menu Content 
			==================================================================== -->
			<div class="fb-main__content">
				<div class="fb-db">
					<!-- ===========================================================
					Start: Header
					============================================================= -->
					<div class="fb-dp__header">
						<div class="fb-dp__search">
							<span class="icon cn-glyph-search"></span>
							<span style="margin-left: 6px;">Search...</span>
						</div>
						<!-- <div class="fb-dp__actions">
							
						</div> -->
					</div>
					<!-- ===========================================================
					Start: Header
					============================================================ -->
					<!-- ===========================================================
					Start: Content
					============================================================ -->
					<div class="fb-dp__content">
						<div class="fb-dp__title"></div>
						<!-- =======================================================
						Start: Content Table
						======================================================== -->
						<div class="fb-table">
							<!-- ===================================================
							Start: Header Table
							==================================================== -->
							<div class="fb-table__header">
								<div class="fb-table__row">
									<div class="fb-table__col">
										Restaurants
									</div>
								</div>
							</div>
							<!-- ===================================================
							End: Header Table
							==================================================== -->
							<!-- ===================================================
							Start: Content Table
							==================================================== -->
							<div class="fb-table__content">
                                    <div class="fb-rest active" v-for="(hotel, index) in hotels" v-bind:key="index">
                                        <!-- ===========================================
                                        Start: Menu
                                        ============================================ -->
                                        <div class="fb-rest__header">
                                            <div class="fb-rest__row">
                                                <!-- ===================================
                                                Start: Rest
                                                ==================================== -->
                                                <div class="fb-rest__col">
                                                    <div class="fb-htl">
                                                        <div class="fb-htl__figure" style="background-image: url('/local-assets/app/modules/images/fb/1.jpg">
                                                        </div>
                                                        <div class="fb-htl__name">
                                                            {{hotel.name}}
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- ===================================
                                                End: Rest
                                                ==================================== -->
                                                <!-- ===================================
                                                Start: Rating
                                                ==================================== -->
                                                    <div class="fb-rest__col">
                                                        <div class="fb-rest__actions">
                                                            <div class="fb-rest__action fb-btn" @click="showCreateItemModalBox = true">Add Item</div>
                                                            <div class="fb-rest__action">
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                <!-- ===================================
                                                End: Rating
                                                ==================================== -->
                                            </div>
                                        </div>
                                        <!-- ===========================================
                                        End: Menu
                                        ============================================ -->
                                        <!-- ===========================================
                                        Start: Menu Content
                                        ============================================ -->
                                        <div class="fb-rest__content">
                                            <div class="fb-item">
                                                <div class="fb-item__row">
                                                    <!-- ===========================================
                                                    Start: Menu col
                                                    ============================================ -->
                                                    <div class="fb-item__col" v-for="(item, index) in hotel.items" v-bind:key="index">
                                                        <!-- ===========================================
                                                        Start: Menu Items
                                                        ============================================ -->
                                                        <div class="fb-menu-item">
                                                            <div class="fb-menu__figure">
                                                                <img src="/local-assets/app/modules/images/fb/13.png" alt="" class="img-responsive">

                                                                <div v-if="item.type == 'veg'" class="fb-menu--veg"></div>
                                                                <div v-else class="fb-menu--nveg"></div>
                                                            </div>
                                                            <div class="fb-menu__content">
                                                                <div class="fb-menu__text">
                                                                    <span>{{item.name}}</span>
                                                                </div>
                                                                <div class="fb-menu__price">
                                                                    Rs. {{item.price}}
                                                                </div>
                                                            </div>

                                                            <!-- ===========================================
                                                                Menu Action
                                                            ============================================ -->
                                                            <div class="fb-menu__actions">
                                                                <div class="fb-menu__action fb-icon fb-edit" @click="showEditItemModal(item)" >
                                                                    <div class="icon cn-glyph-pencil"></div>
                                                                </div>
                                                                <div class="fb-menu__action fb-icon fb-delete" @click="showDeleteItemModal(item)">
                                                                    <div class="icon cn-glyph-delete"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- ===========================================
                                                        End: Menu Items
                                                        ============================================ -->
                                                    </div>
                                                    <!-- ===========================================
                                                    End: Menu col
                                                    ============================================ -->
                                                </div>
                                            </div>
                                        </div>
                                        <!-- ===========================================
                                        End: Menu Content
                                        ============================================ -->
                                    </div>
							</div>
							<!-- ===================================================
							End: Content Table
							==================================================== -->
						</div>
						<!-- =======================================================
						End: Content Table
						======================================================== -->
					</div>
					<!-- ===========================================================
					End: Content
					============================================================ -->
				</div>
			</div>
			<!-- ===================================================================
			End: Main Menu Content 
			==================================================================== -->
            <!-- =======================================================================
		Start: Main Cart 
		======================================================================== -->
		<div class="fb-cart" style="display:none">
			<div class="fb-cart__icon" @click="showCart = !showCart">
				<div class="fb-cart__number">3</div>
				<div>
					<img src="/local-assets/app/modules/images/fb/cart.png" alt="" class="img-responsive">
				</div>
			</div>

			<div class="fb-order" :class="{'fb-order--active':showCart}">
				<div class="fb-order__header">
					Your Order
				</div>
				<div class="fb-order__content">
					<!-- =======================================================================
					Start: item
					======================================================================== -->
					<div class="fb-order__item">
						<div class="fb-order__main">
							<div class="fb-order__name">
								Chicken Biryani Combo
							</div>
							<div class="fb-quantity">
								<div class="fb-quantity__select">
									<select>
										<option>0</option>
										<option>1</option>
										<option>2</option>
									</select>
								</div>
								<div>
									&times;
								</div>
								<div class="fb-quantity__amount">
									$99.00
								</div>
							</div>
						</div>
						<div class="fb-order__aside">
							$99.00
						</div>
					</div>

					<div class="fb-order__item">
						<div class="fb-order__main">
							<div class="fb-order__name">
								Total
							</div>
						</div>
						<div class="fb-order__aside" style="color: #000; font-size: 16px; ">
							$99.00
						</div>
					</div>
					<!-- =======================================================================
					End: Item
					======================================================================== -->
				</div>
				<div class="fb-order__footer">
					<div class="fb-cbtn fb-cbtn--po">
						Place Order
					</div>
					<div class="fb-cbtn fb-cbtn--cancel">
						Reset Cart
					</div>
				</div>
			</div>
		</div>
		<!-- =======================================================================
		End: Main Cart 
		======================================================================== -->
			</div>
		</div>
            </div>
            <!-- =======================================================================
            End: FB 
            ======================================================================== -->
        </div>
        <create-item :item="currentItem" v-if="showCreateItemModalBox" @closeCreateItemModalDialog= "closeCreateItemModalDialog()"/>
    </div>
</template>
<script lang="ts">

import Vue from 'vue';
import Vuex from "vuex";
import Component from 'vue-class-component';
import CreateItemModal from "@/components/CreateItemModal.vue";
import {Hotel, Item } from 'store/types/common';
import * as app from "@/store/app";


@Component({
        props: {
        },
        components: {
            // 'cb-placeholder': Placeholder,
            'create-item':CreateItemModal
        },
        name: 'food-bee-hotel'
    })
export default class HotelPage extends Vue {
    showCreateItemModalBox: boolean = false;
    showDeleteItemModalBox: boolean = false;
    currentItem: Item;
    showCart: boolean = false;
    data(){
        return{
            currentItem:{}
        }
    }
    closeCreateItemModalDialog(){
        delete this.currentItem;
        this.showCreateItemModalBox = false;
    }

    closeDeleteItemModal(){
        delete this.currentItem;
        this.showDeleteItemModalBox = false;
    }

    showEditItemModal(item: Item){
        this.currentItem = item;
        this.showCreateItemModalBox = true;
    }

    showDeleteItemModal(item: Item){
        this.currentItem = item;
        this.showDeleteItemModalBox = true;
    }
    get userName():string{
        return app.getUser(this.$store).name;
    }

    get hotels(): Array<Hotel>{
        return app.getHotels(this.$store);
    }

    created(){
        app.getHotelUserConf(this.$store).then(data=>{
        }); 
    }
}
</script>

<style>
  .cn-wrapper__header,
    .cn-wrapper__footer{
        display: none;
    }	
</style>

