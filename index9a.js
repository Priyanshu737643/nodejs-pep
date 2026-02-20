//! Middleware

import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("server running");
});

const auth = (req, res, next) => {
  if (req.url === "/1234") {
    next();
  } else {
    res.send("Access denied");
  }
};

app.use(auth);
app.get("/:id", (req, res) => {
  res.send("Welcome");
});
