export const storage = {
  state: {
    inventory: [],
    cart: []
  },
  getters: {
    getInventory(state){
      return state.inventory
    },
    getCart(state){
      return state.cart
    }
  },
  mutations: {
    SetInventory(state, payload){
      state.inventory = payload
    },
    additem(state, payload){
      state.cart.push(payload)
    },
    removeitem(state , payload){
      state.cart.splice(payload,1)
    },
    clearitem(state){
      state.cart = []
    }
  },
  actions: {
    additem(context, payload) {
  context.commit('additem',payload)
    },
    removeitem(context , payload){
      context.commit('removeitem',payload)
    }
  }
}
