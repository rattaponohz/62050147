const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.get("/", blogController.index);
router.post("/", blogController.add);
router.delete("/:id", blogController.remove);
router.put("/:id", blogController.update);


module.exports = router;
