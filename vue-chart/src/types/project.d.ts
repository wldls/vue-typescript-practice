import { Chart } from "chart.js";

type ChartLib = typeof Chart;

declare module "vue/types/vue" {
  interface Vue {
    $_Chart: ChartLib;
  }
}
