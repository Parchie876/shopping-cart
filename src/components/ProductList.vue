<template>
    <div>
      <h1>Product List</h1>
      <img
        v-if="loading" 
        src="https://i.imgur.com/JfPpwOA.gif">
      <ul v-else>
          <li v-for="product in products ">
              {{ product.title}} - {{product.price | currency}} - {{product.inventory}}
            <button 
            :disabled="!productsInStock(product)"
            @click="addProductToCart(product)" 
            >Add to Cart</button>
          </li>
      </ul>    
    </div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
    data () {
        return {
            loading: false
        }
    },
    //  ? Alternative way using Vuex Map Helpers
    computed: {
        ...mapState({
            products: state => state.products.items
        }),

        ...mapGetters('products',{
            productsInStock: 'productsInStock'
        })
    },
    methods: {
        ...mapActions({
            fetchProducts: 'products/fetchProducts',
            addProductToCart: 'cart/addProductToCart'
        })
    },

    // ? Alternative way with out using Vuex Map Helpers
    // computed: {
    //     products () {
    //         return this.$store.state.products
    //     },
    //     productsInStock(){
    //         return this.$store.getters.productsInStock
    //     }
    // },
    // methods: {
    //     addProductToCart (product) {
    //         this.$store.dispatch('addProductToCart', product)
    //     }
    // },
    created () {
        this.loading = true
        this.fetchProducts()
        //this.$store.dispatch('fetchProducts')
        .then(() => this.loading = false)
    }
}
</script>