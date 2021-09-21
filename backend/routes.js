const express = require("express");
const cors = require("cors");
const imageDir = require('path').join(__dirname, '/src')

const app = express();

const RevenueController = require('./src/controller/revenuesController');
const revenueController = new RevenueController();

app.use(express.json());
app.use(cors());
app.use(express.static(imageDir));

app.get("/revenues", revenueController.index);

app.get("/revenues/:id", revenueController.get)

app.post("/revenues", revenueController.create);

app.post("/revenue/:id", revenueController.update);

app.delete("/revenue/:id", revenueController.delete)

module.exports = app;