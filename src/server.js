// set up and configure express server
// import the express package
const express = require("express");

// make an instance of an express server
const app = express();

// app.ver(path, callback)
app.get("/", (request, response) => {
  response.json({
    message: "Hello world! This project is nice and organized!",
  });
});

app.post("/", (request, response) => {
  response.json({ message: "Received POST request" });
});

module.exports = {
  app: app,
};
