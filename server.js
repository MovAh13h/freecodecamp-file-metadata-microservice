var express = require("express");
var app = express();
var port = 3000;
var path = require("path");
var multer = require("multer");
var upload = multer();
app.use(express.static(path.join(__dirname, "views")));


app.get("/", (req, res) => {
  
});


app.post("/size", upload.single("file"), function(req, res) {
  res.json({
    size: req.file.size
  });
});





app.listen(port, () => {
  console.log("[SERVER] Server running at port " + 3000);
});