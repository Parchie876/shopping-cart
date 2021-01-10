import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { // = data
        products: []
    },
    getters: { // computed properties
        productsCount () {

        }
    },
    actions: { // methods
        fetchProducts () {
            // make the call & run setProducts mutation 
        }
    },
    mutations: { // for setting and updating the state 
        setProducts (state, products) {
            // update products
            state.products = products
        }

    }
})