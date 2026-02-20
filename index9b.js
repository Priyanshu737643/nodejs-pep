//! Middleware

import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("server running");
});

app.use(express.json());

const auth = (req, res, next) => {
  const newuse = req.body;
  console.log(newuse);

  if (newuse.token === "1234") {
    next();
  } else {
    res.send("Invalud URL");
  }
};

app.use(auth);
app.post("/", (req, res) => {
  res.send("Welcome");
});
