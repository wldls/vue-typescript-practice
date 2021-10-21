// store/types.ts
import { CommitOptions, Store } from "vuex";
import { Mutations } from "./mutations";
import { RootState } from "./state";

type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

// Omit: Store에서 commit만 뺀 나머지 속성을 취한다 -> commit을 myMutations로 재정의
export type MyStore = Omit<Store<RootState>, "commit"> & MyMutations;
