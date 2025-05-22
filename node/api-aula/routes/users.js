const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const User = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post("/", async (req, res) => {
  const user = new User(req.body);
  res.status(201).json(await user.save());
});



module.exports = router;
