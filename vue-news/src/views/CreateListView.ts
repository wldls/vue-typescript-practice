import ListView from "./ListView.vue";
import bus from "../utils/bus";
import { CreateElement, VNode } from "vue";

export default function createListView(name: string): {
  name: string;
  mounted(): void;
  render(h: CreateElement): VNode;
} {
  return {
    name,
    mounted() {
      bus.$emit("off:progress");
    },
    render(h: CreateElement) {
      return h(ListView);
    },
  };
}
