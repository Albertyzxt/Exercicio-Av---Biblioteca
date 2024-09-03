const express = require("express");
const router = express.Router();
const AluguelController = require("../controllers/aluguelController.js");

router.get("/", AluguelController.getAllRentals);
router.get("/:id", AluguelController.getRentalById);
router.post("/", AluguelController.createRental);
router.put("/:id", AluguelController.updateRental);
router.delete("/:id", AluguelController.deleteRental);

module.exports = router;
