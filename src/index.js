const express = require('express')

const app = express()
app.use(express.json())

let data = {
    userName :"Rufus",
    Age : 24,
    Gmail : "rufus090400@gmail.com"
}

app.get("/userdata", (req,res)=> {
res.json(data)
})


app.post('/createuser', (req,res)=> {
    let data ={
        ...req.body,
        phoneNumber:"6369699399"
    }

    res.json({
        data,
        message:"user Created"
    })
})

console.log("userdata",data);



const port = 7001;
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

