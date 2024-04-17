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
const homeBtn = document.getElementById("home-btn");
const searchBtn = document.getElementById("search-btn");
document.addEventListener("scroll", function () {
  let title = document.getElementById("title");
  let scrollPos = window.scrollY;
  let windowHeight = window.innerHeight;
  let titleOffsetTop = title.offsetTop;

  let distanceFromTop = titleOffsetTop - scrollPos;

  let animationStart = windowHeight * 0.8;
  let animationEnd = windowHeight * 0.2;

  let animationProgress = Math.max(
    0,
    Math.min(
      1,
      (distanceFromTop - animationEnd) / (animationStart - animationEnd)
    )
  );

  title.style.opacity = animationProgress;
  title.style.width = animationProgress * 100 + "%";
});
const fs = require("fs");

const reservationForm = document.getElementById("reservation-form");
reservationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;
  const reservationData = {
    name,
    date,
    time,
    guests,
  };

  fs.readFile("bookings.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    let bookings = JSON.parse(data);
    bookings.push(reservationData);

    fs.writeFile("bookings.json", JSON.stringify(bookings, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }

      console.log("Booking successful!");
    });
  });
});
