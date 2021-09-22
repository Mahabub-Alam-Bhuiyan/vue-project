<template>
  <div id="app">
<!--    -->
<!--<router-link :to="{path: '/'}">Home</router-link>-->
<!--<router-link :to="{path: '/Test'}">Test</router-link>-->


    <navbar @search="search" ></navbar>

    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <router-view></router-view>

<!--          <Inventory @newitemadded="AddToCart" :items="items" ></Inventory>-->
        </div>
        <div class="col-sm-3">
  <cart :items="cart" ></cart>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import Navbar from "./components/Navbar";
// import Inventory from "./components/views/Inventory";
import Cart from "./components/Cart"
import data from "./data.js"

export default {
 components: {
   Navbar,
   // Inventory,
   Cart
 },
  data(){
   return {
     items : [ ],
     cart: [
     ]
   }
  },
  mounted() {
   this.items = data
  },
  methods: {
    search(keyword){
      this.items = data.filter(item => {
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      } )
    },
   AddToCart(item){
     this.cart.push(item)
   }
  }
}
</script>

<style>
.container{
  padding-top: 10px;
}
</style>
