http = require("http");
url = require("url");
querystring = require("querystring");

function onRequest(request,responce)
{
    var path = url.parse(request.url).pathname;
    console.log("Request for " + path + " receive.");
    var query = url.parse(request.url).query;
    var name = querystring.parse(query)["name"];
    var rollno = querystring.parse(query)["rno"];
    var gender = querystring.parse(query)["gender"];
    var department = querystring.parse(query)["department"];
    var email = querystring.parse(query)["email"];
    var year = querystring.parse(query)["year"];
    var phone = querystring.parse(query)["phone"];

    responce.write("<p ><h1> REGISTERED SUCCESSFULLY</h1></p>");
    responce.write("<p><h2>Firstname : " + name + "</h2></p>");
    responce.write("<p><h2>Roll No :" + rollno + "</h2></p>");
    responce.write("<p><h2>Gender :" + gender + "</h2></p>");
    responce.write("<p><h2>Department :" + department + "</h2></p>");
    responce.write("<p><h2>Email :" + email + "</h2></p>");
    responce.write("<p><h2>Year :" + year + "</h2></p>");
    responce.write("<p><h2>Phone :" + phone + "</h2></p>");

    responce.end();

}
http.createServer(onRequest).listen(7777);
console.log("Server has started.....");