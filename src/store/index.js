import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
  list: []
  },
  mutations: {
  'ENTER_ITEM' (state, { name, price }) {
  state.list.push({
  name: name,
  price: price
  });
  console.log(state.list)
  }
  },
  actions: {
  submitItem({commit}, payload) {
  commit('ENTER_ITEM', payload);
  }
  },
  getters: {
  expenses(state){
  
  return state.list;
  
  }
  }

  
});