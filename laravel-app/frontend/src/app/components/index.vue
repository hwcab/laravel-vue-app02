<template>
  <div>
    <router-link :to="{ name: 'add' }">新規追加</router-link>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.id }}/{{ book.title }}/{{ book.author }}
        <router-link :to="{ name: 'edit', params: { id: book.id } }"
          >編集</router-link
        >
        <button @click="deleteBook(book.id)">削除</button>
      </li>
    </ul>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      message: "",
      books: {},
    };
  },
  created: function () {
    this.getBook();
  },
  methods: {
    getBook() {
      axios
        .get("/api/books/")
        .then((response) => {
          this.books = response.data;
        })
        .catch((error) => {
          this.message = error;
        });
    },
    deleteBook(id) {
      axios
        .delete("/api/books/" + id)
        .then((response) => {
          this.getBook();
          this.message = "";
        })
        .catch((error) => {
          this.message = error;
        });
    },
  },
};
</script>