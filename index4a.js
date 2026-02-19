import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("Server started");
});

//? http://localhost:8080/4/5
app.get("/:x/:y", (req, res) => {
  let num1 = parseInt(req.params.x);
  let num2 = parseInt(req.params.y);
  let result = num1 + num2;
  res.send(result);
});

//? http://localhost:8080/4/5/1
app.get("/:x/:y/:z", (req, res) => {
  let num1 = parseInt(req.params.x);
  let num2 = parseInt(req.params.y);
  let num3 = parseInt(req.params.z);
  let result = num1 + num2 + num3;
  res.send(result);
});

//? http://localhost:8080/a/b/c/d
//? http://localhost:8080/1/2/3/4
app.get("/:a/:b/:c/:d", (req, res) => {
  res.send("Hello Student");
});