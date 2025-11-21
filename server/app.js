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


app.get("/",(req,res)=>{
    try {
        res.status(200).json({msg: "hello everyone welcome"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

// method : put
// existing update
// route : /updte


app.put("/update",(req,res)=>{
    try {
        
        let updateData = req.body 
        console.log(updateData);
        res.status(200).json({msg:"account updated"})

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

// method : delete
// deleting the existing data 
// /delete

app.delete("/delete",(req,res)=>{
    try {
        let userData = req.body
        let userEmail = userData.email
        console.log(userEmail);
        res.status(200).json({msg: "user account deleted"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`);
})


