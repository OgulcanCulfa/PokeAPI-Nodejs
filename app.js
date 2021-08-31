const express = require("express");
const app = express()
const cors = require("cors");
const endpoints = require("./endpoints");
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(endpoints);

app.listen(PORT, () => {
  console.log("Ready on http://localhost:" + PORT);
});