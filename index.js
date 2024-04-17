document.addEventListener("DOMContentLoaded", () => {
  const url = "http://localhost:3000/restaurants";
  fetchRestaurants(url);
});

function fetchRestaurants(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((restaurant) => {
        displayRestaurant(restaurant);
      });
    })
    .catch((error) => {
      console.error("Error fetching restaurants:", error);
    });
  }
