const express = require("express"); //add express and make it available to our server
const app = express(); // call the function express, which starts express.
const server = require("http").Server(app); // attach our express app to the server thats going on the http protocol
const commsserver = require("socket.io")(server); // connect socket io and our server together so realtime comms can happen
const JSONdb = require('simple-json-db');
const db = new JSONdb('database.json');

app.use(express.static("public"));

// let newMessageArray = []

const startResp = require("./backup-start")

console.log(startResp)


//if there's nothing there, then set it as an empty array. (only happens the VERY first time before any interactions.)
if(!db.get("messageSave")){
  db.set("messageSave",startResp)
} 
  


//make an array for some stuff to get put in
//add incoming data to persistence array
//information is stored in ram
//when someone connects send out entire array

commsserver.on("connection", function (aperson) {
   console.log("new connection, database dump: ", db.get("messageSave"))
   commsserver.emit("initialConnectStatusUpdate", db.get("messageSave"))  

  //report the connection to the server's console (available in the tools menu down at the bottom left of the screen)
  //listen for any incoming messages from any connected people / clients, and get the data that was sent along
  
  
  aperson.on("newMessage", function (promptResponse) {
    //once we get a message, relay the data that came in out to all of the connected users.
    
    let tempArray = db.get("messageSave")
    tempArray.push(promptResponse.toString());
    
    // ls.backend(newMessageArray);
    db.set("messageSave", tempArray);

    console.log("pr :", promptResponse);

    commsserver.emit("messageYell", db.get("messageSave"));
    //setting messageSave to server and emmitting that as "messageSave"
  
  });
  
 

});

let port = process.env.PORT || 3000;

// start up the server and listen for incoming connections on the port.
server.listen(port, function () {
  console.log("server is running on: " + port);
});






