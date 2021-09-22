<template>

  <div v-if="item" class="row">
    <div class="col-sm-6">
      <img :src="item.photo" alt="photo">
    </div>
    <div class="col-sm-6">
      <h4>{{ item.title }}</h4>
      <p> {{ item.description }} </p>
      <div class="card-footer">
        <span>{{ item.price }}</span>
        <button @click="additem(item)" class="btn btn-primary float-right">+add cart</button>
      </div>

    </div>
  </div>
<h1 v-else>Loading..</h1>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      item: null
    }
  },
  mounted() {
    this.fetchItem()
  },
  methods:{
    additem(item){
      this.$store.commit('additem',item)
    },
    fetchItem(){
      var self = this;
      axios.get('http://localhost:3000/item/' + this.$route.params.id).then(response =>{
        self.item = response.data
      })
    }
  }
}
</script>

<style>
.card-footer {
  padding: .75rem 1.25rem 1.75rem 1.25rem !important;

}
</style>
