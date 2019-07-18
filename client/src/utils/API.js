import axios from "axios";

export default {
  // test fxn
  test: function() {
    return axios.get("https://api.giphy.com/v1/gifs/search?q=kittens&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=20");
  },
  getUsers: function() {
    return axios.get("/api/users");
  },
  getOneUser: function(username) {
    return axios.get("api/user/"+username);
  },
  getPosts: function() {
    return axios.get("/api/posts");
  },
  getMyTrips: function(username) {
    return axios.get("/api/posts/"+username);
  },
  getUserPosts: function(username) {
    return axios.get("/api/posts/"+username);
  },
  createUser: function(newUser) {
    return axios.post("/api/users", newUser);
  },
  createPost: function(newPost) {
    return axios.post("/api/posts", newPost);
  }

};
