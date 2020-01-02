import axios from "axios";

export default {
  getRandomFood: function() {
    return axios.get("https://spoonacular.com/food-api/recipes/image/random");
  },
  getFoodRecipes: function(recipes) {
    return axios.get(
      "https://spoonacular.com/food-api/recipes" + recipes + "/images"
    );
  },
  getRestaurantList: function() {
    return axios.get("https://spoonacular.com/food-api/restaurant/list");
  }
};
// https://spoonacular.com/food-api
