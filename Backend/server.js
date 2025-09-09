// index.js
const express = require("express");
const app = express();
const PORT = 5000; // you can use any port

// Middleware to parse JSON
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Hello, Backend is running 🚀");
});

// Example POST route
app.post("/data", (req, res) => {
  const body = req.body;
  res.json({ message: "Data received", data: body });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
