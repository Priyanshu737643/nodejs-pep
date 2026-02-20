//! Middleware

import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("server running");
});

const jwt = Math.round(Math.random() * 1000000).toString();

const auth = (req, res, next) => {
  const token = req.headers.authorization; 
  const val = token.split(" ");
  if (val[1] === jwt) {
    next();
  } else {
      console.log(jwt);
    res.send("Access Denied");
  }
};

app.post("/login", (req, res) => {
    res.send(jwt);
})

app.get("/",auth, (req, res) => {
  res.send("Welcome");
});
