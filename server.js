"use strict";

const express = require("express");
const cors = require("cors");
const fccTesting = require("./freeCodeCamp/fcctesting.js");

const app = express();

// ✅ Mở CORS để FCC gửi request không bị chặn
app.use(cors({ origin: "*" }));

// ✅ Middleware cơ bản
app.use("/public", express.static(process.cwd() + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Cấu hình Pug
app.set("view engine", "pug");
app.set("views", "./views/pug");

// ✅ Route chính: render index.pug
app.get("/", (req, res) => {
  res.render("index");
});

// ✅ Cuối cùng mới gọi FCC testing hook (sau khi routes/middleware đã có)
fccTesting(app);

// ✅ Khởi động server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on port " + port);
});

module.exports = app;
