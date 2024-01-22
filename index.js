const express = require("express");
const app = express();
const PORT = 5678
const cors = require("cors")
var score = 0
let static
app.use(cors())

app.get("/", (req , res) =>{
    score = score + 1
    res.json({score: score});
});

app.listen(PORT,  ()=>{
    console.log(`Done ${PORT}`)
})