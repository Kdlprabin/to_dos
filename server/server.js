const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Chitwannepal#4",
  database: "todos",
});

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM todos WHERE id=1";
  db.query(sqlGet, (err, result) => {
    res.send(result)
  });
});

app.post("/api/post", (req, res) => {
  const data = req.body;
  res.status(201).send(data);
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
