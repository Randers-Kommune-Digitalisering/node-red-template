const express = require('express'); 
var cors = require('cors')

const app = express(); 
const PORT = 80;

app.use(cors())
//app.use(express.static('dist'));
app.use(express.static('dist'));

app.get("/status", (request, response) => {
    const status = {
       "status": "running"
    };
    
    response.send(status);
 });
  
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
);