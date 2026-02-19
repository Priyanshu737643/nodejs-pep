import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("Server started");
});

app.get("/:id/:email", (req, res) => {
  let num1 = parseInt(req.params.id);
  let num2 = parseInt(req.params.email);
  let result = num1 + num2;
  res.send(result);
});
