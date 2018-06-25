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
                                <img src="/local-assets/app/modules/images/fb/fb-loogo.png" alt="" class="img-responsive">
                            </div>
                        </div>
                        <div class="fb-header__actions">
                            <div class="fb-header__action">
                                <div class="fb-notify">
                                    <div class="icon cn-glyph-bell"></div>
                                </div>
                            </div>
                            <div class="fb-header__action fb-track" @click="showOderPage = !showOderPage">
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
				<your-order v-if="showOderPage"/>
                <div class="fb-main" v-if="!showOderPage">
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
									<div class="fb-table__col">
										Rating
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
								 <div class="fb-rest" v-for="(hotel, index) in hotels" v-bind:key="index" :data-hotels="hotel.id">
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
                                                        <div class="fb-rating" v-if="index==0">
															<span class="icon cn-glyph-star"></span>
															<span class="icon cn-glyph-star"></span>
															<span class="icon cn-glyph-star"></span>
															<span class="icon cn-glyph-star cn-glyph-star-outline"></span>
															<span class="icon cn-glyph-star cn-glyph-star-outline"></span>
														</div>
														<div class="fb-rating" v-if="index==1">
															<span class="icon cn-glyph-star"></span>
															<span class="icon cn-glyph-star"></span>
															<span class="icon cn-glyph-star"></span>
															<span class="icon cn-glyph-star"></span>
															<span class="icon cn-glyph-star-half"></span>
														</div>
														<div class="fb-rating" v-if="index==2">
															<span class="icon cn-glyph-star"></span>
															<span class="icon cn-glyph-star"></span>
															<span class="icon cn-glyph-star"></span>
															<span class="icon cn-glyph-star"></span>
															<span class="icon cn-glyph-star"></span>
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
                                                                <div class="fb-menu__actions">
		                                    						<div class="fb-menu__action fb-icon fb-add" @click="addToCart(item)">
																		{{getAddItemText(item)}}
		                                    						</div>
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
		<div class="fb-cart" >
			<div class="fb-cart__icon" @click="showCart = !showCart">
				<div class="fb-cart__number" v-if="isCartItemPresent">{{cartItems.length}}</div>
				<div>
					<img src="/local-assets/app/modules/images/fb/cart.png" alt="" class="img-responsive">
				</div>
			</div>

			<div class="fb-order" :class="{'fb-order--active':showCart}">
				<div v-if="isCartItemPresent">
					<div class="fb-order__header">
						Your Order
					</div>
					<div class="fb-order__content">
						<!-- =======================================================================
						Start: item
						======================================================================== -->
						<div class="fb-order__item" v-for="(item, index) in cartItems" v-bind:key="index">
							<div class="fb-order__main">
								<div class="fb-order__name">
									{{item.item.name}}
								</div>
								<div class="fb-quantity">
									<div class="fb-quantity__select">
										<select v-model="item.quantity">
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
										</select>
									</div>
									<div>
										&times;
									</div>
									<div class="fb-quantity__amount">
										Rs {{item.item.price}}.00
									</div>
								</div>
							</div>
							<div class="fb-order__aside">
								Rs {{item.item.price * (item.quantity|| 1)}}.00
							</div>
						</div>

						<div class="fb-order__item">
							<div class="fb-order__main">
								<div class="fb-order__name">
									Total
								</div>
							</div>
							<div class="fb-order__aside" style="color: #000; font-size: 16px; ">
								Rs {{getTotoal}}.00
							</div>
						</div>
						<!-- =======================================================================
						End: Item
						======================================================================== -->
					</div>
					<div class="fb-order__footer">
						<div class="fb-cbtn fb-cbtn--po" @click="doPlaceOrder">
							Place Order
						</div>
						<div class="fb-cbtn fb-cbtn--cancel" @click="doClearCart">
							Reset Cart
						</div>
					</div>
				</div>
				<div v-else>
					Your cart is Empty. Please choose items to order.
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
    </div>
</template>
<script lang="ts">

import Vue from 'vue';
import Vuex from "vuex";
import Component from 'vue-class-component';
import CreateItemModal from "@/components/CreateItemModal.vue";
import YourOrder from "@/components/YourOrder.vue";
import {Hotel, Item, OrderItem, Cart} from 'store/types/common';
import * as app from "@/store/app";


@Component({
        props: {
        },
        components: {
            // 'cb-placeholder': Placeholder,
			'create-item':CreateItemModal,
			'your-order': YourOrder
        },
        name: 'food-bee-app'
    })
export default class FoodbeePage extends Vue {
    showCreateItemModalBox: boolean = false;
	showCart: boolean= false;
	currentTab = "hotels";
	showOderPage: boolean = false;
	

    closeCreateItemModalDialog(){
        this.showCreateItemModalBox = false;
    }
    get userName():string{
		let user = app.getUser(this.$store);
        return user && user.name;
    }

    get hotels(): Array<Hotel>{
        return app.getHotels(this.$store);
	}
	getAddItemText(item: Item):string{
		this.cartItems.forEach(_item=>{
			if(_item.item.id == item.id){
				return "Added";
			}
		});
		return "Add";
	}
	doPlaceOrder(){
		let _this = this;
		app.placeOrder(this.$store).then(data => {
			_this.showOderPage = true;
		});
	}
	doClearCart(){
		app.resetOrder(this.$store).then(data=>{

		});
	}
    created(){
        app.getCompayUserConf(this.$store).then(data=>{
        }); 
	}
	get getcart(): Cart{
		return app.getCart(this.$store);
	}
	get cartItems(): Array<OrderItem>{
		let cart = this.getcart;
		return cart && cart.items;
	}
	get isCartItemPresent():boolean{
		return this.cartItems && this.cartItems.length > 0;
	}
	get getTotoal(): number{
		let total = 0;
		this.cartItems.forEach((item) =>{
				total = total + (item.item.price * item.quantity);
		})
		return total;
	}
	addToCart(item: Item){
		let _this = this;
		app.addToCart(this.$store, {item: item, qty: 1}).then((data)=>{
			_this.showCart = true;
		})
	}
}
</script>

<style>
  .cn-wrapper__header,
    .cn-wrapper__footer{
        display: none;
    }	
</style>

