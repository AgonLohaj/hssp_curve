// if you don't specify a html file, the sniper will generate a div

var yourDiv = document.getElementById("yourDiv");

var app = require("./lib/index.js");
var instance = new app({el: yourDiv, data: "single.xml", text: 'hssp curve'});
instance.render();
