var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("Chief Mentor :Ravi Tambade");
};
var onDefault=function(req, res){
    res.send("<h1>Fabrikam Multinational Company</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>This is our official site</li>"+
                    " <li>Designed and Maintained by Fabrikam Multinational Company</li>"+
                    " <li>We provide Customer help and Employee help</li>"+
                    " <li>Thank you Good wishes from Fabrikam Multinational Company</li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
