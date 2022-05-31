<template>
  <div class="container">
    <div v-if="currentPost">
      <h4>Post</h4>
      <form>
        <div class="form-group edit-form">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" v-model="currentPost.title" />
        </div>
        <div class="form-group edit-form">
          <label for="body">Body</label>
          <input type="text" class="form-control" id="body" v-model="currentPost.body" />
        </div>

      </form>
      <br>
      <h4 class="table-">Comments</h4>
      <table class="table table-borderless">
        <thead >
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(comment, index) in currentPostComments" :key="index">
            <th scope="row">{{ comment.id }}</th>
            <td>{{ comment.name }}</td>
            <td>{{ comment.email }}</td>
            <td>{{ comment.body }}</td>
          </tr>
        </tbody>
      </table>

    </div>

    <div v-else>
      <br />
      <p>Loading Post...</p>
    </div>
  </div>
</template>

<script>
import CommentDataService from "../services/PostDataService";

export default {
  name: "comment",
  data() {
    return {
      currentPost: null,
      currentPostComments: null
    };
  },
  methods: {
    getPost(id) {
      CommentDataService.get(id)
        .then(response => {
          this.currentPost = response.data;
        })
        .catch(e => {
          throw e;
        });
    },
    getPostComments(id) {
      CommentDataService.getAllComments(id)
        .then(response => {
          this.currentPostComments = response.data;
          console.log(response.data);
        })
        .catch(e => {
          throw e;
        });
    },
  },
  mounted() {
    this.getPost(this.$route.params.id);
    this.getPostComments(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 660px;
  margin: auto;
}

h4 {
  margin-left: 305PX;
}
</style>
