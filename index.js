const PORT = process.env.PORT || 3000;
var http = require("http");

// Create server object
http
    .createServer(function(request,response){
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("I couldn't get this work, but please go to <a href='https://github.com/MikBom/guestbook.git'>Mikkos github page</a> "); // Write a response to the client
        response.end(""); // End response
    })
    .listen(PORT); // The server object listens on port
