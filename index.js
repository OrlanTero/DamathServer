// import express from "express";
// import http from "http";
// import { Server } from "socket.io";
import { ParseClientSentData, RemoveDisconectedSockets } from "./Damath.js";
import { WebSocketServer } from 'ws'


const wss = new WebSocketServer({ port: 8080 },()=>{
    console.log('server started')
})

wss.on('connection', function connection(ws) {
   ws.on('message', (data) => {
      console.log('data received \n %o',data)
      ws.send(data);
   })
})

wss.on('listening',()=>{
   console.log('listening on 8080')
})

// const app = express();
// const server = http.createServer(app);

// const io = new Server(server);

// io.on('connection', (socket) => {
//   console.log('a user connected');

//   socket.on("send_message", function(data) {
//     ParseClientSentData(socket, JSON.parse(data));
//   });

//   socket.on("disconnect", function() {
//     RemoveDisconectedSockets();
//   });
// });

// server.listen(5600, () => {
//   console.log('listening on *:5600');
// });