const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, ".." , "data", "restaurants.json");

const getStoredRestaurants = () => {
  
  const fileData = fs.readFileSync(filePath);
  const storedRestaurant = JSON.parse(fileData);

  return storedRestaurant;
}

const storeRestaurants = (storable) => {
  fs.writeFileSync(filePath, JSON.stringify(storable));
}

module.exports = {
  getStoredRes: getStoredRestaurants,
  storeRes: storeRestaurants
}