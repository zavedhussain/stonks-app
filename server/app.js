// DO NOT MODIFY ANYTHING HERE, THE PLACE WHERE YOU NEED TO WRITE CODE IS MARKED CLEARLY BELOW

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(function (req, res, next) {
  const allowedOrigins = ["http://localhost:3000"];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.enable("trust proxy");

app.post("/api/fetchStockData", async (req, res) => {
  // YOUR CODE GOES HERE, PLEASE DO NOT EDIT ANYTHING OUTSIDE THIS FUNCTION

  //get body and set url
  const { symbol, date } = req.body;
  const url = `https://api.polygon.io/v1/open-close/${symbol}/${date}?adjusted=true&apiKey=${process.env.API_SECRET}`;

  //check if input date is current or future date
  const inputDate = new Date(date);
  const today = new Date(Date.now());
  today.setHours(0, 0, 0, 0);
  if (inputDate >= today) {
    return res
      .status(400)
      .json({ message: `Please try an older date than ${date}` });
  }

  //fetch data if date is ok
  try {
    const { data } = await axios.get(url);
    const { symbol, open, high, low, close, status, volume } = data;
    res.status(200).json({ symbol, open, high, close, low, status, volume });
  } catch (error) {
    //catch error and set error response
    const { message } = error.response.data;
    if (message) {
      return res.status(404).json({ message });
    }

    //if response not sent
    res.status(500).json({
      message: "Something went wrong ,please try again",
    });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
