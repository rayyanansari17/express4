import express from "express"
import env from "dotenv"
env.config()

const app = express()
app.use(express.json())
const port = process.env.PORT

// method : post 
// 
app.post("/login",(req,res)=>{
    try {
        let userinput = req.body
        res.status(200).json(userinput)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})


// 2. req.params

app.post("/students/:id",(req,res)=>{
    try {
        let myStudent = req.params.id
        console.log(myStudent);

        res.status(200).json({msg:`i am ${myStudent} API`})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})



app.post("/school/:rollnumber",(req,res)=>{
    try {
        let myStudent = req.params.rollnumber
        console.log(myStudent);
        
        res.status(200).json({msg:`i am roll number ${myStudent} `})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

app.post("/user",(req,res)=>{
    try {
        let data = req.query
        let myName = req.query.fname
        let age = req.query.age
        let isAlive = req.query.isAlive
        console.log(myName, age, isAlive);
        res.status(200).json(data)
    } catch (error) {
        
    }
})

app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`);
})


