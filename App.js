const express = require("express");
const path = require('path')
const RootDir = require("./utils/path");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(shopRoutes);
app.use("/admin", adminRoutes);

app.use((req, res, next) => {
  //res.status(404).send('<h2>page not found</h2>')
  // res.status(404).sendFile(path.join(__dirname,"views","404.html"))
  res.status(404).sendFile(path.join(RootDir, "views", "404.html"));
});

app.listen(3000);
