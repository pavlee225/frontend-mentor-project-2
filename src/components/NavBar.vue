<template>
    <div
        class="flex justify-between items-center mt-5 mb-20 border-b-2 pb-5 container mx-auto lg:max-w-screen-lg lg:px-5 xsm:px-10 md:max-w-screen-md sm:max-w-screen-sm">
        <div class="flex space-x-11">
            <div><router-link to="/"><img src="@/assets/images/logo.svg" alt="logo" class="cursor-pointer"></router-link>
            </div>
            <div>
                <ul class="flex flex-row space-x-6">
                    <li><a href="#" class="pb-8 hover:border-b-4 border-orange-400">Collections</a></li>
                    <li><a href="#" class="pb-8 hover:border-b-4 border-orange-400">Men</a></li>
                    <li><a href="#" class="pb-8 hover:border-b-4 border-orange-400">Women</a></li>
                    <li><a href="#" class="pb-8 hover:border-b-4 border-orange-400">About</a></li>
                    <li><a href="#" class="pb-8 hover:border-b-4 border-orange-400">Contact</a></li>
                </ul>
            </div>
        </div>
        <div class="flex items-center">
            <div class="mr-8">
                <!-- <img src="@/assets/images/icon-cart.svg" alt="cart icon in navbar" class="cursor-pointer"> -->
                <button type="button"
                    class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg  focus:outline-none">
                    <img src="@/assets/images/icon-cart.svg" alt="cart icon in navbar" class="cursor-pointer"
                        @click="toggleCart">
                    <span class="sr-only">Notifications</span>
                    <div
                        class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-orange-400 border-2 border-white rounded-full -top-2 -right-2">
                        {{ $store.state.counter }}</div>
                </button>
            </div>
            <div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
                v-if="openCart">
                <div class="relative mx-auto w-auto max-w-2xl">
                    <div class="bg-white w-full rounded shadow-2xl flex flex-col p-5">
                        <div class="text-2xl font-bold">Cart</div>
                        <hr>
                        <div class="flex flex-row gap-5 items-center mt-5">
                            <div>
                                <img src="@/assets/images/image-product-1-thumbnail.jpg"
                                    style="width: 100px; height: 100px;" />
                            </div>
                            <div>
                                <p>{{ this.product.name }}</p>
                                <p>${{ this.product.price }} x {{ this.counter }} <span
                                        class="font-bold">${{
                                            this.product.price * this.counter
                                        }}</span></p>
                            </div>
                            <div>
                                <img src="@/assets/images/icon-delete.svg" class="cursor-pointer"
                                    @click="deleteItemInCart" />
                            </div>
                        </div>
                        <!-- <button class="rounded bg-orange-500 text-white px-6 mt-3 py-2 w-6/12 m-auto mb-3"
                            @click="toggleCart">Checkout</button> -->
                        <router-link to="/checkout"
                            class="rounded bg-orange-500 text-white px-6 mt-3 py-2 w-6/12 m-auto mb-3" @click="toggleCart">Checkout</router-link>
                    </div>
                </div>
            </div>
            <div v-if="openCart" class="absolute z-40 inset-0 opacity-25 bg-black"></div>
            <div class="w-[50px]">
                <img src="@/assets/images/image-avatar.png" alt="avatar image in navbar"
                    class="cursor-pointer hover:border-orange-500 border-transparent border-2 rounded-full" />
            </div>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            counter: 0,
            openCart: false,
            product: {}
        }
    },
    mounted() {
        this.counter = localStorage.getItem("counter");
        this.product = JSON.parse(localStorage.getItem("product"));
    },
    methods: {
        toggleCart() {
            if (this.$store.state.counter > 0) {
                this.openCart = !this.openCart;
            } else {
                this.openCart = false;
                alert("Cart is empty!");
            }
        },
        deleteItemInCart() {
            localStorage.removeItem("product");
            // this.counter = 0;
            this.$store.state.counter = 0;
            this.$store.state.product = {};
            localStorage.removeItem("counter");
        }
    }
}
</script>