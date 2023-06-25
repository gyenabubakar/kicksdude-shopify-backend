"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
console.log("\uD83D\uDC49\uD83D\uDC49\uD83D\uDC49".concat(PORT));
app.listen(PORT, function () {
    console.log("\uD83D\uDC49\uD83D\uDC49\uD83D\uDC49Server is running in http://localhost:".concat(PORT));
});
