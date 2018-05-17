import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    create: false
  },
  mutations: {
    TOGGLE_CREATE: (state) => {
        state.create = !state.create
    },
  },
});

export default store;
