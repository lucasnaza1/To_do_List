const express = require("express");

const router = express.Router();

router.get("/", (req, res) =>
  res.status(200).send("O router está funcionando.")
);

module.exports = router;
