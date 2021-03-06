require("../configs/db.config");

const DroneModel = require("../models/Drone.model");

const drone = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

console.log(drone);

DroneModel.create(drone)
  .then((droneDocument) => {
    console.log(droneDocument);
  })
  .catch((error) => {
    console.log(error);
  });
