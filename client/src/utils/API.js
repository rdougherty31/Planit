import axios from "axios";

export default {
  // test fxn
  test: function() {
    return axios.get("https://api.giphy.com/v1/gifs/search?q=kittens&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=20");
  },
  // Gets the book with the given id
  getUsers: function() {
    return axios.get("http://localhost:8080/api/users");
  },
  getPosts: function() {
    return axios.get("http://localhost:8080/api/posts");
  },
  createUser: function() {
    return axios.post("http://localhost:8080/api/users");
  }
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
