import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
// import getters from "./getters.js";
import actions from "./actions";
import { RootState, state } from "./state";
import { mutations } from "./mutations";

Vue.use(Vuex);

// StoreOptions<RootState> 은 state나 mutations등을 자동으로 추론하고 싶을 때 사용
const store: StoreOptions<RootState> = {
  state,
  mutations,
  actions,
};

export default new Vuex.Store(store);

// export default new Vuex.Store({
//   strict: process.env.NODE_ENV !== "production",
//   state: {
//     news: [],
//     ask: [],
//     jobs: [],
//     user: {},
//     item: {},
//     list: [],
//   },
//   getters,
//   mutations,
//   actions,
// });
