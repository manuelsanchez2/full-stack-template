const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
// console.log(process.env);

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
