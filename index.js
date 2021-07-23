const express = require("express");
const http = require("http");
const fs = require("fs");
const path = require("path");
const requests = require("requests");
const bodyparser = require("body-parser");

let file = fs.readFileSync("./index.html", "utf-8");

const app = express();
app.use(bodyparser.json());
app.use(express.static(__dirname));

// app.get("/", (req, res) => {
        
// });
// app.post("/details.com", (req, res) => {});
const server = http.createServer(app);
const port=process.env.PORT || 3000 ;
const host="0.0.0.0";
server.listen(port,host);
