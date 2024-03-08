const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/userRoutes");

const bodyParser = require("body-parser");

const app = express();

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
app.use(adminRouter);

const PORT = process.env.PORT || 3000;

mongoose
  .connect("mongodb://127.0.0.1:27017/users")
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    console.log("connect to mongodb");
  })
  .catch((error) => {
    console.log(error);
  });
