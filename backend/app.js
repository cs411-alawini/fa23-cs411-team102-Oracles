const express = require("express");
const bodyParser = require("body-parser");
const router = require("./route");
const cors = require('cors');

const port = 3000;
const host = 'localhost';
const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:4000'
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.listen(port, host, () => {
  console.log(`Server starts at http://${host}:${port}`);
});