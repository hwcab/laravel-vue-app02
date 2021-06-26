<template>
  <div>
    <router-link :to="{ name: 'add' }">新規投稿</router-link>
    <ul style="list-style: none">
      <li v-for="tweet in tweets" :key="tweet.id">
        {{ tweet.id }} / {{ tweet.name }} / {{ tweet.comment }}
        <router-link :to="{ name: 'edit', params: { id: tweet.id } }"
          >編集</router-link
        >
        <button @click="deleteTweet(tweet.id)">削除</button>
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
      tweets: {},
    };
  },
  created: function () {
    this.getTweet();
  },
  methods: {
    getTweet() {
      axios
        .get("/api/tweet/")
        .then((response) => {
          this.tweets = response.data;
        })
        .catch((error) => {
          this.message = error;
        });
    },
    deleteTweet(id) {
      axios
        .delete("/api/tweet/" + id)
        .then((response) => {
          this.getTweet();
          this.message = "";
        })
        .catch((error) => {
          this.message = error;
        });
    },
  },
};
</script>