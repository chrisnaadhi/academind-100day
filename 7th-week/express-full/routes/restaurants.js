const uuid = require("uuid");
const resData = require("../util/restaurant-data");
const express = require("express");
const e = require("express");
const router = express.Router();

router.get("/restaurants", (req, res) => {
  let order = req.query.order;
  let nextOrder = 'desc'
  
  if (order !== 'asc' && order !== 'desc') {
    order = 'asc';
  }
  if (order === 'desc') {
    nextOrder = 'asc';
  }

  const storedRestaurants = resData.getStoredRes();

  storedRestaurants.sort((resA, resB) => {
    if (
      (order === 'asc' && resA.name > resB.name) ||
      (order === 'desc' && resB.name > resB.name)
    ) {
      return 1
    }

    return -1
  });

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
    nextOrder: nextOrder
  });
});

router.get("/restaurants/:id", (req, res) => {
  const restaurantId = req.params.id;
  const storedRestaurant = resData.getStoredRes();

  for (const restaurant of storedRestaurant) {
    if (restaurant.id === restaurantId) {
      return res.render("restaurant-details", { restaurant: restaurant });
    }
  }
  
  res.status(404).render('404');
})

router.get("/recommend", (req, res) => {
  res.render("recommend");
});

router.post("/recommend", (req, res) => {
  const restaurant = req.body;
  restaurant.id = uuid.v4();
  const restaurants = resData.getStoredRes();

  restaurants.push(restaurant);
  resData.storeRes(restaurants);

  res.redirect("/confirm");
});

router.get("/confirm", (req, res) => {
  res.render("confirm");
});

module.exports = router;