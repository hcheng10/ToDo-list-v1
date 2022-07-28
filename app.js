const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); // import local module

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"]; // const to array cannot be reassign to new array
// but we can add items into the array, const dont apply to items that inside target item
const workItems = [];

app.set('view engine', 'ejs'); // space is necessary for 'view engine'

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); // tell server where to find static resources such as styles.css and images

app.get("/", function(req, res) {

  let day = date.getDate();

  // res.write("<h1>Yay it's the weekend!</h1>") // use res.write() to send multiple messages
  // res.write("<h1>Take a break!</h1>")
  // res.send(); // send can only be call once
  // res.sendFile(__dirname + "/weekend.html"); // send a html file
  // res.render() will looking for folder called views and then looking for list.ejs file and also send ejs file to Broser
  res.render("list", {listTitle: day, newListItems: items});

});

app.post("/", function(req, res) {

  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/"); // redirect to home route
  }

});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.listen(3000, function() {
  console.log("Srever started on port 3000");
});
