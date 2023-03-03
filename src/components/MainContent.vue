<template>
    <div class="grid grid-cols-2">
        <div>
            <img src="@/assets/images/image-product-1.jpg" alt="main image" class="rounded-xl">
            <div class="grid grid-cols-4 gap-5 mt-5">
                <div class="border-orange-500 border-transparent border-2 rounded-xl">
                    <img src="@/assets/images/image-product-1-thumbnail.jpg" alt="prod1 tumnail after main image"
                        class="rounded-xl cursor-pointer opacity-40">
                </div>
                <img src="@/assets/images/image-product-2-thumbnail.jpg" alt="prod2 tumnail after main image"
                    class="rounded-xl cursor-pointer hover:opacity-40">
                <img src="@/assets/images/image-product-3-thumbnail.jpg" alt="prod3 tumnail after main image"
                    class="rounded-xl cursor-pointer hover:opacity-40">
                <img src="@/assets/images/image-product-4-thumbnail.jpg" alt="prod4 tumnail after main image"
                    class="rounded-xl cursor-pointer hover:opacity-40">
            </div>
        </div>
        <div class="flex flex-col ml-20 mt-20">
            <p class="text-orange-600 font-bold mb-5">SNEAKER COMPANY</p>
            <div class="text-4xl font-bold mb-10">Fall Limited Edition Sneakers</div>
            <p class="text-gray-500 mb-5">These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable
                rubber outer sole,
                they'll withstand everything the weather can offer.
            </p>
            <div class="flex gap-3">
                <p class="font-bold text-2xl">$125.00</p>
                <div class="bg-orange-200 text-orange-500 font-bold rounded-md px-2 py-1">
                    50%
                </div>
            </div>
            <p class="line-through text-gray-400 mb-10">$250.00</p>
            <div class="flex gap-3">
                <div class="flex items-center  rounded-md bg-slate-100">
                    <button class="text-orange-500 font-bold px-2 h-[30px] hover:opacity-30" @click="decreaseCounter">
                        <img src="@/assets/images/icon-minus.svg" alt="icon for minus sign">
                    </button>
                    <div class="px-7">
                        {{ counter }}
                    </div>
                    <button class="text-orange-500 font-bold px-2 h-[30px] hover:opacity-30" @click="increaseCounter">
                        <img src="@/assets/images/icon-plus.svg" alt="icon for plus sign">
                    </button>
                </div>
                <div>
                    <button
                        class="flex gap-3 bg-orange-500 text-white p-3 rounded-md px-20 cursor-pointer shadow-xl hover:opacity-30"
                        @click="saveInStorage">
                        <img src="@/assets/images/icon-cart.svg" alt=" icon cart for button" class="text-white">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            counter: 0,
            product: {}
        }
    },
    methods: {
        increaseCounter() {
            this.counter++;
        },
        decreaseCounter() {
            if (this.counter < 1) {
                alert("Counter can not be under 0!");
                return;
            }
            this.counter--;
        },
        saveInStorage() {
            localStorage.setItem("counter", this.counter);
            this.product = {
                name: "Fall Limited Edition Sneakers",
                price: 125.00,
            }
            localStorage.setItem("product", JSON.stringify(this.product));
        }
    }
}

</script>