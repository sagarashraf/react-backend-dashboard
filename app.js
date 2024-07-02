const express = require("express");
const mysql = require("mysql2/promise");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = 5000;

// Set up the MySQL connection
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    credentials: true, // Allow credentials such as cookies to be sent
  })
);
// Define the GET route for the homepage
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Backend</h1>");
});

// Define the GET route for fetching product settings
app.get("/productsettings", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM ProductSetting");
    console.log(rows);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
