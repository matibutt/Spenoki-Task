<template>
  <form>
    <div class="form-group form">
      <div v-if="!submitted">
        <div class="form-group row">
          <label for="title" class="col-sm-2 col-form-label">Title</label>
          <input type="text" class="form-control" id="title" required v-model="postsData.title" name="title"
            placeholder="Enter your title" />
        </div>
        <div class="form-group row">
          <label for="body" class="col-sm-2 col-form-label">Body</label>
          <input class="form-control" id="body" required v-model="postsData.body" name="body"
            placeholder="Enter your Description" />
        </div>
        <br>
        <button @click="submitPost" class="btn btn-primary">Submit</button>
      </div>

      <div v-else>
        <h4>Your post has been submitted successfully!</h4>
        <button class="btn btn-primary Buttons" @click="newPost">Add</button>
        <button class="btn btn-primary Buttons" @click="backtoHome">Back</button>

      </div>
    </div>
  </form>
</template>

<script>
import router from "../router";
import PostDataService from "../services/PostDataService";

export default {
  name: "add-posts",
  data() {
    return {
      postsData: {
        id: null,
        title: "",
        body: "",
      },
      submitted: false
    };
  },
  methods: {
    submitPost() {
      var data = {
        title: this.postsData.title,
        body: this.postsData.body
      };

      PostDataService.create(data)
        .then(response => {
          this.postsData.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          throw e;
        });
    },

    newPost() {
      this.submitted = false;
      this.postsData = {};
    },
    backtoHome() {
      router.push({ path: '/' })
    }
  }
};
</script>

<style>
.form {
  max-width: 660px;
  margin: auto;
}

.Buttons {
  margin-right: 8px;
}
</style>
