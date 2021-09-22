<template>
  <div class="row" v-if="!loading">
    <div class="card" v-for="(item , index) in items" :key="index" style="width: 13rem;">

      <router-link tag="div" :to ="{ path:'/item/' + item.id}" >

        <img class="card-img-top" :src="item.photo" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
        </div>
      </router-link>

      <div class="card-footer">
        <p class="card-text">{{ item.price }}</p>
        <button @click="additem(item)" class="btn btn-primary">+add cart</button>
      </div>
    </div>
  </div>

  <h1 v-else> Loading....</h1>

</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      loading: true,
    }
  },
  computed: {
    items() {
      return this.$store.getters.getInventory
    }
  },
  mounted() {
    this.fetchInventory();
  },
  methods:{
    additem(item){
     this.$store.dispatch('additem',item)
    },
    fetchInventory(){
      var self = this
      axios.get('http://localhost:3000/items').then(response =>{
       setTimeout(function (){
         self.items = response.data
         self.$store.commit('SetInventory',response.data)

         self.loading = false
       },400)

      })
    }
  }

}
</script>

<style>
.card{
margin-right: 10px;
margin-bottom: 10px;
}
</style>
