// import axios from "axios";

// // The getRecipes method retrieves recipes from the server
// // It accepts a "query" or term to search the recipe api for
// export default {
//   getRecipes: function() {
//     return axios.get("/api/recipes/q=apple");
//   }
// };

import axios from "axios";

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
