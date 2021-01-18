<template>
    <div>
        <h1>Shopping Cart</h1>
        <ul>
            <li v-for="product in products">
                {{ product.title}} - {{product.price | currency}} - {{product.quantity}}
            </li>
        </ul>
        <p>Total: {{cartTotal | currency}}</p>
        <button @click="checkout">Checkout</button>
        <p v-if="checkoutStatus">{{checkoutStatus}}</p>
    </div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {

    //  ? Alternative way using Vuex Map Helpers
    computed: {

        ...mapGetters({
            products: 'cartProducts',
            cartTotal: 'cartTotal'
        }),
        
        ...mapState({
            checkoutStatus: state => state.cart.checkoutStatus
        }),
    },
    methods: {
        ...mapActions(['checkout'])
    }
    // ? Alternative way with out using Vuex Map Helpers
    // computed: {
    //     products () {
    //         return this.$store.getters.cartProducts
    //     },
    //      cartTotal () {
    //         return this.$store.getters.cartTotal
    //     }
    // },
    // ! NB: Change the v-if statement to $store.state.checkoutStatus
    // ! NB Change p tags data to {{$store.state.checkoutStatus}}
    // ! NB Change button @click to $store.dispatch('checkout')
}
</script>