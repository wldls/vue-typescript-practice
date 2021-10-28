import { Chart, registerables } from "chart.js";
import { VueConstructor } from "vue";
Chart.register(...registerables);

export default {
  install(Vue: VueConstructor): void {
    Vue.prototype.$_Chart = Chart;
  },
};
