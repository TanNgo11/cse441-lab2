const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "cse441lab2q2",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the MySQL database as id " + db.threadId);
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});
app.post("/users", (req, res) => {
  const { name, email } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  const query = "INSERT INTO users (name, email) VALUES (?, ?)";

  db.query(query, [name, email], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ message: "User created", userId: results.insertId });
  });
});

app.put("/users/:id", (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  const query = "UPDATE users SET name = ?, email = ? WHERE id = ?";

  db.query(query, [name, email, id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ message: "User updated" });
  });
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM users WHERE id = ?";

  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ message: "User deleted" });
  });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
