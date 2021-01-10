<template>
    <div>
        <h1>Shopping Cart</h1>
        <ul>
            <li v-for="product in products">
                {{ product.title}} - {{product.price | currency}} - {{product.quantity}}
            </li>
        </ul>
        <p>Total: {{cartTotal | currency}}</p>
        <button @click="$store.dispatch('checkout')">Checkout</button>
        <p v-if="$store.state.checkoutStatus">{{$store.state.checkoutStatus}}</p>
    </div>
</template>
<script>
export default {
    computed: {
        products () {
            return this.$store.getters.cartProducts
        },
         cartTotal () {
            return this.$store.getters.cartTotal
        }
    },
    
}
</script>