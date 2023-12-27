var express = require("express");
var app = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/helloWorld", (req, res) => {
  res.send("Hello world!" + req.params);
})