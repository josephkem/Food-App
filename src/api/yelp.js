import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer benj0TMs0kPYkOZEoVa3hud4wPzhNXVgtehgaSlKyubYfbU4obLisprHYFUF6z00mbNx6Sm7Bp6GjHSy-496nSCXfEBKgyIgSZAABcqEbC3Rj9A32p0LQQuURu5HX3Yx",
  },
});
