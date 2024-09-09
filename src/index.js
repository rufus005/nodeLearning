const express = require('express')

const app = express()


const port = 7000;
// console.log(port);

app.use("/next", (req,res) => {
    res.send("next is working")
})

app.use("/", (req, res) => {
    res.send("server connected")
})


app.listen(port, ()=>{
    console.log("server is runnning on", port);
    
})

