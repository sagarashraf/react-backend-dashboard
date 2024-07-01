const express = require("express");
const app = express();
const port = 5000;

// Define a GET route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Backend</h1>");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
