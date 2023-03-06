<template>
    <div class="container mx-auto lg:max-w-screen-lg lg:px-5 xsm:px-10 md:max-w-screen-md sm:max-w-screen-sm">
        <div class="grid grid-cols-5 mt-10 items-center">
            <div> Name </div>
            <div>Quantity</div>
            <div>Price</div>
            <div>Total</div>
            <div>Delete</div>

            <div> {{ products.name }} </div>
            <div> {{ counter }}</div>
            <div>${{ products.price }}.00</div>
            <div> ${{ counter * products.price }}.00</div>
            <div><img src="@/assets/images/icon-delete.svg" alt="delete icon for cart"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: {},
            counter: 0,
        }
    },
    mounted() {
        this.products = JSON.parse(localStorage.getItem("product"));
        this.counter = JSON.parse(localStorage.getItem("counter"));
    }
}
</script>