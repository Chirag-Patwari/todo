const express = require("express")
const bodyparser = require("body-parser")

const app = express()
app.use(bodyparser.json())

let tasks = []
count = 0

app.post("/addtask",(req,res) => {
    if(!req.body.name) return res.status(400).send({
        error:"task name doesnot exists"
    })
    let newtask = {
        name:req.body.name,
        created:new Date().toLocaleString(),
        id:"task"+count
    }
    tasks.push(newtask)
    count++
    res.sendStatus(201)
    
} )


app.delete("/deletetask/:id",(req,res) => {
    
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].id==req.params.id) {
            tasks.splice(i,1)
            return res.sendStatus(204)
            
        }
    }

    return res.status(400).send({
        error:"task id doesnot exists"
    })
})

app.get("/gettasks",(req,res) => res.send(tasks))

app.use(express.static('public'))

// app.get("/" ,(req,res) => res.send("hello world"))
app.listen(3000)