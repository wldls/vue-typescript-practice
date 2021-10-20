import { NewsItem } from "@/api/index";

const state = {
  news: [] as NewsItem[],
};

// state 타입 추론을 위한 코드 (state에 정의한 코드를 그대로 타입으로 넣겠다는 뜻)
type RootState = typeof state;

export { state, RootState };
