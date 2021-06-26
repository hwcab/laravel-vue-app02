<template>
  <div>
    <form @submit.prevent="addTweet">
      <div>
        <label>名前</label>
        <input type="text" v-model="name" />
      </div>

      <div>
        <label>投稿内容</label>
        <input type="text" v-model="comment" />
      </div>

      <button>追加</button>
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
      tweets: {},
      name: "",
      comment: "",
    };
  },
  methods: {
    addTweet() {
      axios
        .post("/api/tweet/", {
          name: this.name,
          comment: this.comment,
        })
        .then((response) => {
          this.$router.push({ name: "list" });
        })
        .catch((erorr) => {
          this.message = erorr;
        });
    },
  },
};
</script>