<template>
  <ul class="list-group" >
    <li class="list-group-item item-d">
      <span class="item-name">Name</span>
      <span class="item-price float-right ">Price</span>
    </li>
    <li class="list-group-item" v-for="(item,index) in items" :key="index">
      <button class="btn btn-danger btn-sm" @click="removeitem(index)">-</button>
      <span class="item-name">{{ item.title }}</span>
      <span class="item-price float-right ">{{ item.price }}</span>
    </li>
    <li class="list-group-item item-d">
      <span class="item-name">Total</span>
      <span class="item-price float-right ">{{ totalprice }}</span></li>

    <li v-if="items.length >0" @click="checkout" class="list-group-item item-d text-center">
    <button class="btn btn-success"> CheckOut </button>
    </li>
  </ul>
</template>

<script>
export default {

  computed:{
    items(){
      return  this.$store.getters.getCart
    },
    totalprice() {
      var total = 0;
      this.items.forEach(item => {
        total += parseFloat(item.price);
      })
      return total.toFixed(2)
    }
  },
  methods:{
    removeitem(index){
      this.$store.dispatch('removeitem',index)
    },
    checkout(){
      if (confirm('Are You sure you want to checkout?')){
        this.$store.commit('clearitem',)
      }
    }
  }
}
</script>

<style>
.list-group-item{
  margin-bottom: 10px;
}
.item-d{
  background: black;
  color: white;
}
</style>
