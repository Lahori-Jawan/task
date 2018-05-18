import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    create: false,
    scroll: false
  },
  mutations: {
    TOGGLE_CREATE: (state) => {
        state.create = !state.create
    },
    RESET_SCROLL: (state) => {
      state.scroll = false
    },
    SCROLL_TO_BOTTOM: (state, {height}) => {
      state.scroll = true
      setTimeout(() => {
          window.scrollTo(0, height)
        }, 1500)
    },
  },
});

export default store;
