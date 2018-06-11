const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static(__dirname + "/static/dist"));
require("./server/config/mongoose");
require("./server/config/routes")(app);
app.listen(8000);