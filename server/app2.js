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



app.get("/test", (req, res) => {
    try {
        // console.log(`Req.body ==> ${req.body}`);
        // console.log(`Req.param ===> ${req.params}`);
        // console.log(`Req.query ==> ${req.query}`);

        console.log(`Req.method ==> ${req.method}`)
        console.log(`Req.baseUrl ==> ${req.baseUrl}`);
        console.log(`Req.hostname ==> ${req.hostname}`);

        console.log(`Req.ip ==> ${req.ip}`);
        console.log(`Req.ips ==> ${req.ips}`);
        console.log(`Req.originalUrl ==>${req.originalUrl} `);

        console.log(`Req.path ==> ${req.path}`);
        console.log(`Req.protocol ==> ${req.protocol}`);

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})

app.get("/restest", (req, res) => {
    try {

        // res.status(200).json({msg:"hI"})
        // res.status(200).download("/home/suhail/CFI-B25-Classwork/express/server2/test.webp")

        // res.status(200).end("hello");
        // res.status(200).redirect("http://google.com");


    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})



app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`);
})


