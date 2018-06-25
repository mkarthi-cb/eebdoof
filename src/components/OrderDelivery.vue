<template>
    
		<div class="fb-main">
			<div class="fb-main__container">
			<!-- ===================================================================
			Start: Main Left Filter 
			==================================================================== -->
			<div class="fb-main__aside" style="display: none">
				<div class="fb-filters">
					<!-- ===========================================================
					Start: Content Filter 
					============================================================ -->
					<div class="fb-filters__content">
						<div class="fb-filters__title">
							Filters
						</div>
						<!-- =======================================================
						Start: Filter 
						======================================================== -->
						<div class="fb-filter">
							<div class="fb-filter__header">
								Food Type
							</div>
							<div class="fb-filter__content">
								<div class="fb-filter__list">
									<div class="fb-filter__item">
										<div class="cs-checkbox">
		                                    <label class="cs-checkbox__label">
	                                            <input type="checkbox" class="cs-checkbox__element" value="true">
	                                            <span class="cs-checkbox__value">
	                                                Veg
	                                            </span>
	                                        </label>
		                                </div>
									</div>

									<div class="fb-filter__item">
										<div class="cs-checkbox">
		                                    <label class="cs-checkbox__label">
	                                            <input type="checkbox" class="cs-checkbox__element" value="true">
	                                            <span class="cs-checkbox__value">
	                                                Non-Veg
	                                            </span>
	                                        </label>
		                                </div>
									</div>

								</div>
							</div>
							<div class="fb-filter__footer"></div>
						</div>
						<!-- =======================================================
						End: Filter 
						======================================================== -->
					</div>
					<!-- ===========================================================
					End: Content Filter 
					============================================================ -->
					<!-- ===========================================================
					Start: Footer Filter 
					============================================================ -->
					<div class="fb-filters__footer"></div>
					<!-- ===========================================================
					Start: Footer Filter 
					============================================================ -->
				</div>
			</div>
			<!-- ===================================================================
			End: Main Left Filter 
			==================================================================== -->
			<!-- ===================================================================
			Start: Main Menu Content 
			==================================================================== -->
			<div class="fb-main__content">
				<div class="fb-db">
					<!-- ===========================================================
					Start: Content
					============================================================ -->
					<div class="fb-dp__content">
						<div class="fb-dp__title">Orders</div>
						<!-- =======================================================
						Start: Content Table
						======================================================== -->
						<div class="fb-table">
							<!-- ===================================================
							Start: Header Table
							==================================================== -->
							<div class="fb-table__header fb-del-order">
								<div class="fb-table__row">
									<div class="fb-table__col">
										Orders
									</div>
									<div class="fb-table__col">
										Duration
									</div>
									<div class="fb-table__col">
										Amount
									</div>
									<div class="fb-table__col">
										Status
									</div>
									<div class="fb-table__col" style="color: #fff; max-width: none;">
										Action
									</div>
								</div>
							</div>
							<!-- ===================================================
							End: Header Table
							==================================================== -->
							<!-- ===================================================
							Start: Content Table
							==================================================== -->
							<div class="fb-table__content fb-del-order">
								<div class="fb-rest" data-orders="1">
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
													<div class="fb-htl__name">
														OID12345
													</div>
												</div>
											</div>
											<!-- ===================================
											End: Rest
											==================================== -->
											<div class="fb-rest__col">15mins ago</div>
											<div class="fb-rest__col">$25.00</div>
											<div class="fb-rest__col">Pending</div>
											<!-- ===================================
											Start: Rating
											==================================== -->
											<div class="fb-rest__col">
												<div class="icon cn-glyph-chevron-right"></div>
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
												<div class="fb-item__col">
													<!-- ===========================================
													Start: Menu Items
													============================================ -->
			                                    	<div class="fb-menu-item">
			                                    		<div class="fb-menu__figure">
			                                    			<img src="/local-assets/app/modules/images/fb/11.png" alt="" class="img-responsive">

			                                    			<div class="fb-menu--veg"></div>
			                                    		</div>
			                                    		<div class="fb-menu__content">
			                                    			<div class="fb-menu__text">
			                                    				<span>Duck confit crepes</span>
			                                    			</div>
			                                    			<div class="fb-menu__price">
			                                    				5
			                                    			</div>
			                                    		</div>

			                                    		<!-- ===========================================
			                                    			Menu Action
		                                    			============================================ -->
		                                    			<div class="fb-menu__actions">
		                                    				<div class="fb-menu__action fb-icon fb-delete" style="line-height: 45px;">
		                                    					Reject
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

												<!-- ===========================================
												Start: Menu col
												============================================ -->
												<div class="fb-item__col">
													<!-- ===========================================
													Start: Menu Items
													============================================ -->
			                                    	<div class="fb-menu-item">
			                                    		<div class="fb-menu__figure">
			                                    			<img src="/local-assets/app/modules/images/fb/12.png" alt="" class="img-responsive">

			                                    			<div class="fb-menu--nveg"></div>
			                                    		</div>
			                                    		<div class="fb-menu__content">
			                                    			<div class="fb-menu__text">
			                                    				<span>Duck confit crepes</span>
			                                    			</div>
			                                    			<div class="fb-menu__price">
			                                    				1
			                                    			</div>
			                                    		</div>

			                                    		<!-- ===========================================
			                                    			Menu Action
		                                    			============================================ -->
		                                    			<div class="fb-menu__actions">
		                                    				<div class="fb-menu__action fb-icon fb-delete" style="line-height: 45px;">
		                                    					Reject
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

												<!-- ===========================================
												Start: Menu col
												============================================ -->
												<div class="fb-item__col">
													<!-- ===========================================
													Start: Menu Items
													============================================ -->
			                                    	<div class="fb-menu-item">
			                                    		<div class="fb-menu__figure">
			                                    			<img src="/local-assets/app/modules/images/fb/13.png" alt="" class="img-responsive">

			                                    			<div class="fb-menu--veg"></div>
			                                    		</div>
			                                    		<div class="fb-menu__content">
			                                    			<div class="fb-menu__text">
			                                    				<span>Duck confit crepes</span>
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




											<div class="fb-placeorder">
												<div class="fb-placeorder__actions">
													<div class="fb-placeorder__action">
														Accept Order
													</div>
												</div>
											</div>
										</div>
									</div>
									<!-- ===========================================
									End: Menu Content
									============================================ -->
								</div>
								<div class="fb-rest" data-orders="2">
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
													<div class="fb-htl__name">
														OID12345
													</div>
												</div>
											</div>
											<!-- ===================================
											End: Rest
											==================================== -->
											<div class="fb-rest__col">15mins ago</div>
											<div class="fb-rest__col">$25.00</div>
											<div class="fb-rest__col">Pending</div>
											<!-- ===================================
											Start: Rating
											==================================== -->
											<div class="fb-rest__col">
												<div class="icon cn-glyph-chevron-right"></div>
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
												<div class="fb-item__col">
													<!-- ===========================================
													Start: Menu Items
													============================================ -->
			                                    	<div class="fb-menu-item">
			                                    		<div class="fb-menu__figure">
			                                    			<img src="/local-assets/app/modules/images/fb/11.png" alt="" class="img-responsive">

			                                    			<div class="fb-menu--veg"></div>
			                                    		</div>
			                                    		<div class="fb-menu__content">
			                                    			<div class="fb-menu__text">
			                                    				<span>Duck confit crepes</span>
			                                    			</div>
			                                    			<div class="fb-menu__price">
			                                    				5
			                                    			</div>
			                                    		</div>

			                                    		<!-- ===========================================
			                                    			Menu Action
		                                    			============================================ -->
		                                    			<div class="fb-menu__actions">
		                                    				<div class="fb-menu__action fb-icon fb-delete" style="line-height: 45px;">
		                                    					Reject
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

												<!-- ===========================================
												Start: Menu col
												============================================ -->
												<div class="fb-item__col">
													<!-- ===========================================
													Start: Menu Items
													============================================ -->
			                                    	<div class="fb-menu-item">
			                                    		<div class="fb-menu__figure">
			                                    			<img src="/local-assets/app/modules/images/fb/12.png" alt="" class="img-responsive">

			                                    			<div class="fb-menu--nveg"></div>
			                                    		</div>
			                                    		<div class="fb-menu__content">
			                                    			<div class="fb-menu__text">
			                                    				<span>Duck confit crepes</span>
			                                    			</div>
			                                    			<div class="fb-menu__price">
			                                    				1
			                                    			</div>
			                                    		</div>

			                                    		<!-- ===========================================
			                                    			Menu Action
		                                    			============================================ -->
		                                    			<div class="fb-menu__actions">
		                                    				<div class="fb-menu__action fb-icon fb-delete" style="line-height: 45px;">
		                                    					Reject
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

												<!-- ===========================================
												Start: Menu col
												============================================ -->
												<div class="fb-item__col">
													<!-- ===========================================
													Start: Menu Items
													============================================ -->
			                                    	<div class="fb-menu-item">
			                                    		<div class="fb-menu__figure">
			                                    			<img src="/local-assets/app/modules/images/fb/13.png" alt="" class="img-responsive">

			                                    			<div class="fb-menu--veg"></div>
			                                    		</div>
			                                    		<div class="fb-menu__content">
			                                    			<div class="fb-menu__text">
			                                    				<span>Duck confit crepes</span>
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




											<div class="fb-placeorder">
												<div class="fb-placeorder__actions">
													<div class="fb-placeorder__action">
														Accept Order
													</div>
												</div>
											</div>
										</div>
									</div>
									<!-- ===========================================
									End: Menu Content
									============================================ -->
								</div>
								<div class="fb-rest" data-orders="3">
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
													<div class="fb-htl__name">
														OID12345
													</div>
												</div>
											</div>
											<!-- ===================================
											End: Rest
											==================================== -->
											<div class="fb-rest__col">15mins ago</div>
											<div class="fb-rest__col">$25.00</div>
											<div class="fb-rest__col">Pending</div>
											<!-- ===================================
											Start: Rating
											==================================== -->
											<div class="fb-rest__col">
												<div class="icon cn-glyph-chevron-right"></div>
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
												<div class="fb-item__col">
													<!-- ===========================================
													Start: Menu Items
													============================================ -->
			                                    	<div class="fb-menu-item">
			                                    		<div class="fb-menu__figure">
			                                    			<img src="/local-assets/app/modules/images/fb/11.png" alt="" class="img-responsive">

			                                    			<div class="fb-menu--veg"></div>
			                                    		</div>
			                                    		<div class="fb-menu__content">
			                                    			<div class="fb-menu__text">
			                                    				<span>Duck confit crepes</span>
			                                    			</div>
			                                    			<div class="fb-menu__price">
			                                    				5
			                                    			</div>
			                                    		</div>

			                                    		<!-- ===========================================
			                                    			Menu Action
		                                    			============================================ -->
		                                    			<div class="fb-menu__actions">
		                                    				<div class="fb-menu__action fb-icon fb-delete" style="line-height: 45px;">
		                                    					Reject
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

												<!-- ===========================================
												Start: Menu col
												============================================ -->
												<div class="fb-item__col">
													<!-- ===========================================
													Start: Menu Items
													============================================ -->
			                                    	<div class="fb-menu-item">
			                                    		<div class="fb-menu__figure">
			                                    			<img src="/local-assets/app/modules/images/fb/12.png" alt="" class="img-responsive">

			                                    			<div class="fb-menu--nveg"></div>
			                                    		</div>
			                                    		<div class="fb-menu__content">
			                                    			<div class="fb-menu__text">
			                                    				<span>Duck confit crepes</span>
			                                    			</div>
			                                    			<div class="fb-menu__price">
			                                    				1
			                                    			</div>
			                                    		</div>

			                                    		<!-- ===========================================
			                                    			Menu Action
		                                    			============================================ -->
		                                    			<div class="fb-menu__actions">
		                                    				<div class="fb-menu__action fb-icon fb-delete" style="line-height: 45px;">
		                                    					Reject
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

												<!-- ===========================================
												Start: Menu col
												============================================ -->
												<div class="fb-item__col">
													<!-- ===========================================
													Start: Menu Items
													============================================ -->
			                                    	<div class="fb-menu-item">
			                                    		<div class="fb-menu__figure">
			                                    			<img src="/local-assets/app/modules/images/fb/13.png" alt="" class="img-responsive">

			                                    			<div class="fb-menu--veg"></div>
			                                    		</div>
			                                    		<div class="fb-menu__content">
			                                    			<div class="fb-menu__text">
			                                    				<span>Duck confit crepes</span>
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




											<div class="fb-placeorder">
												<div class="fb-placeorder__actions">
													<div class="fb-placeorder__action">
														Accept Order
													</div>
												</div>
											</div>
										</div>
									</div>
									<!-- ===========================================
									End: Menu Content
									============================================ -->
								</div>
								<div class="fb-rest" data-orders="4">
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
													<div class="fb-htl__name">
														OID12345
													</div>
												</div>
											</div>
											<!-- ===================================
											End: Rest
											==================================== -->
											<div class="fb-rest__col">15mins ago</div>
											<div class="fb-rest__col">$25.00</div>
											<div class="fb-rest__col">Pending</div>
											<!-- ===================================
											Start: Rating
											==================================== -->
											<div class="fb-rest__col">
												<div class="icon cn-glyph-chevron-right"></div>
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
												<div class="fb-item__col">
													<!-- ===========================================
													Start: Menu Items
													============================================ -->
			                                    	<div class="fb-menu-item">
			                                    		<div class="fb-menu__figure">
			                                    			<img src="/local-assets/app/modules/images/fb/11.png" alt="" class="img-responsive">

			                                    			<div class="fb-menu--veg"></div>
			                                    		</div>
			                                    		<div class="fb-menu__content">
			                                    			<div class="fb-menu__text">
			                                    				<span>Duck confit crepes</span>
			                                    			</div>
			                                    			<div class="fb-menu__price">
			                                    				5
			                                    			</div>
			                                    		</div>

			                                    		<!-- ===========================================
			                                    			Menu Action
		                                    			============================================ -->
		                                    			<div class="fb-menu__actions">
		                                    				<div class="fb-menu__action fb-icon fb-delete" style="line-height: 45px;">
		                                    					Reject
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

												<!-- ===========================================
												Start: Menu col
												============================================ -->
												<div class="fb-item__col">
													<!-- ===========================================
													Start: Menu Items
													============================================ -->
			                                    	<div class="fb-menu-item">
			                                    		<div class="fb-menu__figure">
			                                    			<img src="/local-assets/app/modules/images/fb/12.png" alt="" class="img-responsive">

			                                    			<div class="fb-menu--nveg"></div>
			                                    		</div>
			                                    		<div class="fb-menu__content">
			                                    			<div class="fb-menu__text">
			                                    				<span>Duck confit crepes</span>
			                                    			</div>
			                                    			<div class="fb-menu__price">
			                                    				1
			                                    			</div>
			                                    		</div>

			                                    		<!-- ===========================================
			                                    			Menu Action
		                                    			============================================ -->
		                                    			<div class="fb-menu__actions">
		                                    				<div class="fb-menu__action fb-icon fb-delete" style="line-height: 45px;">
		                                    					Reject
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

												<!-- ===========================================
												Start: Menu col
												============================================ -->
												<div class="fb-item__col">
													<!-- ===========================================
													Start: Menu Items
													============================================ -->
			                                    	<div class="fb-menu-item">
			                                    		<div class="fb-menu__figure">
			                                    			<img src="/local-assets/app/modules/images/fb/13.png" alt="" class="img-responsive">

			                                    			<div class="fb-menu--veg"></div>
			                                    		</div>
			                                    		<div class="fb-menu__content">
			                                    			<div class="fb-menu__text">
			                                    				<span>Duck confit crepes</span>
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




											<div class="fb-placeorder">
												<div class="fb-placeorder__actions">
													<div class="fb-placeorder__action">
														Accept Order
													</div>
												</div>
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
			</div>
		</div>
</template>
<script lang="ts">
import Vue from 'vue';
import Vuex from "vuex";
import Component from 'vue-class-component';
@Component({
        props: {
        },
        components: {
            // 'cb-placeholder': Placeholder,
            // 'create-item':CreateItemModal
        },
        name: 'order-delivery'
    })
export default class OrderDelivery extends Vue{
    
}
</script>
