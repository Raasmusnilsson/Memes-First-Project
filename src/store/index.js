import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    amount: 10,
  },
  mutations: {
    setAmount(state, amount) {
      state.amount = amount
    }
  },
  actions: {},
  modules: {},
});
