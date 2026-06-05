const express = require("express");

const app = express();

app.use(express.json());

app.get("/",(req, res)=>{
    res.send("Server running");
});

app.post("/api/review", (req,res)=>{

    console.log(req.body);

    const code = req.body.code;
    const language = req.body.language;

    console.log({
        code,
        language
    })

    res.json({
        review: "Your code looks fine !!"
    });
})

app.listen(5000, ()=>{
    console.log("Server started on port 5000");
})