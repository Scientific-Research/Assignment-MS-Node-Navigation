const express = require("express");
const mainRoutes = require("./routes/index");

const app = express();

app.use(mainRoutes);

app.listen(3000, () => {
  console.log("Server is listening on Port 3000");
});
