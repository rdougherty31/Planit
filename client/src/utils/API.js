import axios from "axios";

export default {
  //get routes
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
  // post routes
  createUser: function(newUser) {
    return axios.post("/api/users", newUser);
  },
  createPost: function(newPost) {
    return axios.post("/api/posts", newPost);
  },
  joinTrip: function(tripId) {
    return axios.get("/api/posts/"+tripId);
  }
};
