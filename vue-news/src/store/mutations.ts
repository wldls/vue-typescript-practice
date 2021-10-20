import { NewsItem } from "@/api/index";
import { RootState } from "./state";

enum MutationTypes {
  SET_NEWS = "SET_NEWS",
}

const mutations = {
  [MutationTypes.SET_NEWS](state: RootState, news: NewsItem[]): void {
    state.news = news;
  },
};

// vuex 내부적으로 이미 Mutation이라는 타입을 사용하고 있으므로 반드시 s를 붙여서 Mutations로 사용 (actions 등도 동일)
type Mutations = typeof mutations;

export { mutations, Mutations };

// export default {
//   SET_NEWS(state, news) {
//     state.news = news;
//   },
//   SET_ASK(state, ask) {
//     state.ask = ask;
//   },
//   SET_JOBS(state, jobs) {
//     state.jobs = jobs;
//   },
//   SET_USER(state, user) {
//     state.user = user;
//   },
//   SET_ITEM(state, item) {
//     state.item = item;
//   },
//   SET_LIST(state, list) {
//     state.list = list;
//   },
// };
