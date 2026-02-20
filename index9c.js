//! Middleware

import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("server running");
});

app.use(express.json());

const auth = (req, res, next) => {
  const token = req.headers.authorization; //? Bearer 1234
  console.log(token);
  const val = token.split(" "); //? ["Bearer", "1234"]
  if (val[1] === "1234") {
    next();
  } else {
    res.send("Access Denied");
  }
};

app.use(auth);
app.get("/", (req, res) => {
  res.send("Welcome");
});
