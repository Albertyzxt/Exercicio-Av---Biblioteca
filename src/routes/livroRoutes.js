const express = require("express");
const router = express.Router();
const LivroController = require("../controllers/livroController.js");

router.get("/", LivroController.getAllBooks);
router.get("/:id", LivroController.getBookById);
router.post("/", LivroController.createBook);
router.put("/:id", LivroController.updateBook);
router.delete("/:id", LivroController.deleteBook);

module.exports = router;
