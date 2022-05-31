import http from "../http-common";

class PostDataService {
  getAll() {
    return http.get("/posts");
  }

  get(id) {
    return http.get(`/posts/${id}`);
  }

  getAllComments(id) {
    return http.get(`/posts/${id}/comments`);
  }
  
  create(data) {
    return http.post("/posts", data);
  }
}

export default new PostDataService();
