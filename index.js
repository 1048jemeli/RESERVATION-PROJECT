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

function displayRestaurant(restaurant) {
  const listHolder = document.getElementById("restaurants");

  const li = document.createElement("li");
  li.className = "restaurant-item";
  li.style.cursor = "pointer";
  li.textContent = restaurant.title.toUpperCase();
  listHolder.appendChild(li);

  li.addEventListener("click", () => {
    setUpRestaurantDetails(restaurant);
  });
}

function setUpRestaurantDetails(restaurant) {
  const preview = document.getElementById("picture");

  preview.src = restaurant.picture;

  const restaurantTitle = document.querySelector("#title");
  restaurantTitle.textContent = restaurant.title;

  const restaurantLocation = document.querySelector("#location");
  restaurantLocation.textContent = restaurant.location;

  const restaurantCuisineType = document.querySelector("#cuisine-type");
  restaurantCuisineType.textContent = restaurant["Cuisine type"];

  const restaurantOpeningHours = document.querySelector("#open");
  restaurantOpeningHours.textContent = restaurant["open"];
}
