const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());

// routes
app.use("/api/users", userRoutes);

// server
const PORT = 5000;

// app.get("/", (req, res, next) => {
//     res.send("Hello from the server");
// });


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});