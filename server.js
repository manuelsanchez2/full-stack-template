const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
// console.log(process.env);

// Serve any static files
app.use(express.static("client/build"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
