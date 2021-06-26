<template>
  <div>
    <p>idが{{ tweet.id }}の編集フォーム</p>
    <form @submit.prevent="updateTweet">
      <div>
        <label>名前</label>
        <input type="text" v-model="tweet.name" />
      </div>

      <div>
        <label>投稿内容</label>
        <input type="text" v-model="tweet.comment" />
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
      tweet: {},
    };
  },
  created() {
    axios
      .get("/api/tweet/" + this.$route.params.id)
      .then((response) => (this.tweet = response.data));
  },
  methods: {
    updateCancel() {
      this.$router.push({ name: "list" });
    },
    updateTweet() {
      axios
        .put("/api/tweet/" + this.tweet.id, {
          name: this.tweet.name,
          comment: this.tweet.comment,
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