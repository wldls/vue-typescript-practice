<template>
  <div>
    <header><h1>Vue Todo with Typescript</h1></header>
    <main>
      <TodoInput
        :item="todoText"
        @add="addTodoItem"
        @input="updateTodoText"
      ></TodoInput>
    </main>
    <div>
      <ul>
        <TodoListItem
          v-for="(todoItem, index) in todoItmes"
          :key="index"
          :todoItem="todoItem"
          :index="index"
          @toggle="toggleTodoItemComplete"
          @remove="removeTodoItem"
        ></TodoListItem>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "./components/TodoInput.vue";
import TodoListItem from "./components/TodoListItem.vue";

const STORAGE_KEY = "vue-todo-ts-v1";
const storage = {
  save(todoItmes: any[]) {
    const parsed = JSON.stringify(todoItmes);
    localStorage.setItem(STORAGE_KEY, parsed);
  },
  fetch() {
    const todoItems = localStorage.getItem(STORAGE_KEY) || "[]";
    const result = JSON.parse(todoItems);
    return result;
  },
};

export interface Todo {
  title: string;
  done: boolean;
}

export default Vue.extend({
  components: { TodoInput, TodoListItem },
  data() {
    return {
      todoText: "",
      todoItmes: [] as Todo[],
    };
  },
  methods: {
    updateTodoText(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = this.todoText;
      const todo: Todo = { title: value, done: false };
      this.todoItmes.push(todo);
      storage.save(this.todoItmes);
      this.initTodoText();
    },
    initTodoText() {
      this.todoText = "";
    },
    fetchTodoItems() {
      this.todoItmes = storage.fetch();
    },
    toggleTodoItemComplete(todoItem: Todo, index: number) {
      this.todoItmes.splice(index, 1, {
        ...todoItem,
        done: !todoItem.done,
      });
      storage.save(this.todoItmes);
    },
    removeTodoItem(index: number) {
      this.todoItmes.splice(index, 1);
      storage.save(this.todoItmes);
    },
  },
  created() {
    this.fetchTodoItems();
  },
});
</script>

<style scoped></style>
