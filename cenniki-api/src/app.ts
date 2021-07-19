import express from "express";
import bodyParser from "body-parser"
const fs = require("fs");
var cors = require('cors')


import plotery from "./routes/plotery"
import farmerskie from "./routes/farmerskie"
import akustyczne from "./routes/akustyczne"
import everwood from "./routes/everwood"
import ecowood from "./routes/ecowood"
import korner from "./routes/korner"
import exclusive from "./routes/exclusive"
import * as https from "https";
const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
};
const app = express();
app.use(cors())
app.use(bodyParser.json())

app.use(plotery)
app.use(farmerskie)
app.use(akustyczne)
app.use(everwood)
app.use(ecowood)
app.use(korner)
app.use(exclusive)
var server = https.createServer(options, app);
server.listen({ port: 3000 });
console.log("server started on port: 3000 ");
