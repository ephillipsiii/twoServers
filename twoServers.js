var http = require("http");

var PORT1 = 7000;

var PORT2 = 7500;

function handleRequest(request, response){
    response.end("Your are Awesome!" + request.url);
}

var server1 = http.createServer(handleRequest);
server1.listen(PORT1, function(){
    console.log("Server listening on http://localhost:" + PORT1);
});

function handleRequest(request, response){
    response.end("You are terrible!" + request.url);
}

var server2 = http.createServer(handleRequest);
server2.listen(PORT2, function(){
    console.log("Server listening on http://localhost:" + PORT2);
});
