import { ParseClientSentData, RemoveDisconectedSockets } from "./Damath.js";
import { WebSocketServer } from 'ws'


const wss = new WebSocketServer({ port: 8080 },()=>{
    console.log('server started')
})

wss.on('connection', function connection(ws) {
  console.log("CONNECTED!");

   ws.on('message', (data) => {
      ParseClientSentData(ws, JSON.parse(data.toString()));
   });
})

wss.on('close', function() {
    RemoveDisconectedSockets();
});

wss.on('listening',()=>{
   console.log('listening on 8080')
})