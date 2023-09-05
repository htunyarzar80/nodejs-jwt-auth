const express = require("express")
const app = express()
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
var cors = require("cors");


//port
const port = process.env.PORT || 8585;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
