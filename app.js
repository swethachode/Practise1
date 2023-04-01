const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const dateMonthYear = (date) => {
    const newDate = new Date();
    return `${newDate.getDate()}-${
      newDate.getMonth() + 1
    }-${newDate.getFullYear()}`;
  };
  response.send(dateMonthYear());
});

app.listen(3000);
module.exports = app;
