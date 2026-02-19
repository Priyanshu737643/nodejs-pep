import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("Server started");
});

//? http://localhost:8080/1
// app.get("/:id", (req, res) => {
//   console.log(req.url);
//   console.log(req.params);
//   res.send(req.params.id);
// });

//? http://localhost:8080/1/abc@gmail.com
app.get("/:id/:email", (req, res) => {
  console.log(req.url);
  console.log(req.params);
  res.send(req.params.id + req.params.email);
});

//? http://localhost:8080/id/1/email/abc@gmail.com
app.get("/id/:id/email/:email", (req, res) => {
  console.log(req.url);
  console.log(req.params);
  res.send(req.params.id + req.params.email);
});

//? it will show 'home' if we had used '/:id' above it 
app.get("/home", (req, res) => {
    res.send("Hello World");
})