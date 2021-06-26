<template>
  <div>
    <p>idが{{ book.id }}の編集フォーム</p>
    <form @submit.prevent="updateBook">
      <div>
        <label>タイトル</label>
        <input type="text" v-model="book.title" />
      </div>

      <div>
        <label>著者</label>
        <input type="text" v-model="book.author" />
      </div>

      <button>編集する</button>
      <button @click="updateCancel">キャンセル</button>
    </form>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      message: "",
      book: {},
    };
  },
  created() {
    axios
      .get("/api/books/" + this.$route.params.id)
      .then((response) => (this.book = response.data))
      .catch((erorr) => console.log(error));
  },
  methods: {
    updateCancel() {
      this.$router.push({ name: "index" });
    },
    updateBook() {
      axios
        .put("/api/books/" + this.book.id, {
          title: this.book.title,
          author: this.book.author,
        })
        .then((response) => {
          this.$router.push({ name: "index" });
        })
        .catch((erorr) => {
          this.message = erorr;
        });
    },
  },
};
</script>