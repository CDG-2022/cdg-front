import { createStore } from "vuex";
import album from './modules/album'

const store = createStore({
  modules: {
    album
  },
});

export default store;
