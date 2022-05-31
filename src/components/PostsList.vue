<template>
  <div class="list row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-sm-4 mb-4" :class="{ active: index == currentIndex }" v-for="(post, index) in posts"
          :key="index" @click="setActivePost(post, index)">
          <div class="card border-primary mb-3 mb-3 h-100">
            <h5 class="card-header">{{ post.title }}</h5>
            <div class="card-body">
              <p class="card-text">
                {{ post.body }}
              </p>
              <router-link :to="'/comments/' + post.id" class="btn btn-primary">Detail</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postDataService from "../services/PostDataService";

export default {
  name: "posts-list",
  data() {
    return {
      posts: [],
      currentPost: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrievePosts() {
      postDataService.getAll()
        .then((response) => {
          let data = response.data;
          if (data) {
            data = data.sort(function (a, b) { return b.id - a.id });
          }
          this.posts = data;
        })
        .catch((e) => {
          throw e;
        });
    },

    setActivePost(post, index) {
      this.currentPost = post;
      this.currentIndex = index;
    },
  },
  mounted() {
    this.retrievePosts();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 1000px;
  margin: auto;
}
</style>
