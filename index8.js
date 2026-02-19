import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("server running");
});

app.get("/", (req, res) => {
    const users = [
      {
        name: "John",
        email: "john@gmail.com",
        role: "student",
      },
      {
        name: "Cathy",
        email: "cathy@gmail.com",
        role: "student",
      },
      {
        name: "Admin",
        email: "admin@gmail.com",
        role: "admin",
      },
    ];
  res.json(users);
});

app.get("/:id", (req, res) => {
    const users = [
      {
        name: "John",
        email: "john@gmail.com",
        role: "student",
      },
      {
        name: "Cathy",
        email: "cathy@gmail.com",
        role: "student",
      },
      {
        name: "Admin",
        email: "admin@gmail.com",
        role: "admin",
      },
    ];
    res.json(users[req.params.id]);
})