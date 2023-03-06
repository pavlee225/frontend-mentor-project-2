import { createStore } from "vuex";


const store = createStore({
    state() {
      return {
        counter: 0,
        product: {},
      };
    },
  });

  export default store;