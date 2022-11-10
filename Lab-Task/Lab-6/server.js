const express = require("express");

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.set('view engine' , 'ejs')
app.get("/", (req, res) => {
  res.render(__dirname+'/view/pages/home.ejs')
});


const port = 5000;

app.listen(port, () => `Server running on port port 🔥`);