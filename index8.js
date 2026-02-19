import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("server running");
});

//? Middleware
app.use(express.json());

let users = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com",
    role: "student",
  },
  {
    id: 2,
    name: "Cathy",
    email: "cathy@gmail.com",
    role: "student",
  },
  {
    id: 3,
    name: "Admin",
    email: "admin@gmail.com",
    role: "admin",
  },
];

app.post("/", (req, res) => {
  // console.log(req.body);
  const user = req.body;
  users.push(user);
  res.json(users);
});

app.get("/:id", (req, res) => {
    const user = users.find((user) => user.id === Number(req.params.id));
    if (user) {
        res.send(user);
    }
});


