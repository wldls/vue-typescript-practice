<template>
  <div>
    <ListItem :items="newsItems"></ListItem>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { fetchNews, NewsItem } from "@/api";
import ListItem from "../components/ListItem.vue";
// import bus from "../utils/bus";

export default Vue.extend({
  components: {
    ListItem,
  },
  data() {
    return {
      newsItems: [] as NewsItem[],
    };
  },
  methods: {
    async fetchNewsItems() {
      try {
        const { data } = await fetchNews();
        this.newsItems = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.fetchNewsItems();
  },
});
</script>

<style></style>
