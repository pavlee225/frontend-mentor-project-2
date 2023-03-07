<template>
    <div class="container mx-auto lg:max-w-screen-lg lg:px-5 xsm:px-10 md:max-w-screen-md sm:max-w-screen-sm">
        <div class="grid grid-cols-5 mt-10 items-center text-center">

            <div class="border-b-2 border-orange-300 p-4"> Name </div>
            <div class="border-b-2 border-orange-300 p-4">Quantity</div>
            <div class="border-b-2 border-orange-300 p-4">Price</div>
            <div class="border-b-2 border-orange-300 p-4">Total</div>
            <div class="border-b-2 border-orange-300 p-4">Delete</div>
            <!-- <hr> -->

            <div class="p-3"> {{ products.name }} </div>
            <div class="p-3"> {{ counter }}</div>
            <div class="p-3">${{ products.price }}.00</div>
            <div class="p-3 font-bold"> ${{ counter * products.price }}.00</div>
            <div class="p-3"><img src="@/assets/images/icon-delete.svg" alt="delete icon for cart" class=""></div>
        </div>
        <div class="text-right mt-10">
            <button class="bg-orange-500 text-white p-2 rounded-md px-10 cursor-pointer shadow-xl hover:opacity-30"
                @click="openModal">Checkout
            </button>
        </div>


        <div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
            v-if="openedModal">
            <div class="relative mx-auto w-auto max-w-2xl">
                <div class="bg-white w-full rounded shadow-2xl flex flex-col p-5">
                    <div class="text-2xl font-bold">Checkout Form</div>
                    <hr>
                    <div class="grid grid-cols-2 gap-5 items-center mt-5">
                        <div class="text-right">
                            <label for="firstName">First Name:</label>
                        </div>
                        <div>
                            <input id="firstName" type="text" class="border-2 border-orange-200" placeholder="ex. Pavle"
                                v-model="firstName" />
                        </div>
                        <div class="text-right">
                            <label for="lastName">Last Name:</label>
                        </div>
                        <div>
                            <input id="lastName" type="text" class="border-2 border-orange-200" placeholder="ex. Kostic"
                                v-model="lastName" />
                        </div>
                        <div class="text-right">
                            <label for="phoneNum">Phone:</label>
                        </div>
                        <div>
                            <input id="phoneNum" type="tel" class="border-2 border-orange-200" placeholder="ex. +381..."
                                v-model="phone" />
                        </div>
                        <div class="text-right">
                            <label for="street">Street:</label>
                        </div>
                        <div>
                            <input id="street" type="text" class="border-2 border-orange-200" placeholder="ex. Ljermontova"
                                v-model="street" />
                        </div>
                        <div class="text-right">
                            <label for="HouseNum">House Number:</label>
                        </div>
                        <div>
                            <input id="HouseNum" type="text" class="border-2 border-orange-200" placeholder="ex. 19"
                                v-model="houseNum" />
                        </div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <button class="rounded-md bg-orange-500 text-white px-6 mt-3 py-2 w-10/12 mb-3 opacity-20"
                            @click="closeModal">Close
                            modal</button>
                        <button
                            class="bg-orange-500 text-white px-6 mt-3 py-2 w-10/12 mb-3 rounded-md cursor-pointer hover:opacity-30"
                            @click="placeOrder">
                            Place an order
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="openedModal" class="absolute z-40 inset-0 opacity-25 bg-black"></div>
    </div>
</template>

<script>
import { db } from "@/firestore";
import { addDoc, collection } from "firebase/firestore"
export default {
    data() {
        return {
            products: {},
            counter: 0,
            openedModal: false,
            firstName: "",
            lastName: "",
            phone: "",
            street: "",
            houseNum: "",
        }
    },
    mounted() {
        this.products = JSON.parse(localStorage.getItem("product"));
        this.counter = JSON.parse(localStorage.getItem("counter"));
    },
    methods: {
        openModal() {
            this.openedModal = !this.openedModal
        },
        closeModal() {
            this.openedModal = !this.openModal
        },
        async placeOrder() {
            const customer = {
                FirstName: this.firstName,
                LastName: this.lastName,
                Phone: this.phone,
                Street: this.street,
                HouseNumber: this.houseNum
            }
            const newCustomerRef = collection(db, "Customers");
            await addDoc(newCustomerRef, customer);
            alert("You have successfully confirmed your order!");
            this.openedModal = !this.openedModal
            localStorage.removeItem("product")
            localStorage.removeItem("counter");
            // this.products = {};
        }
    }
}
</script>