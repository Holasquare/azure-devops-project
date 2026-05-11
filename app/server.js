const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "DevOps Multi-Cloud App Running 🚀",
    status: "success"
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
