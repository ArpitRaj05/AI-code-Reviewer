require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const express = require("express");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const app = express();

app.use(express.json());

app.get("/",(req, res)=>{
    res.send("Server running");
});

app.post("/api/review", async (req,res)=>{

    console.log(req.body);

    const code = req.body.code;
    const language = req.body.language;

    try{
        const prompt = `Review this ${language} code.
        Give:
        1. Bugs if any
        2. Performance issues
        3. Best practice suggestions
        
        Code: ${code}
        `;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
        });

        res.json({
            review: response.text
        });
    }

    catch(error){
        console.log(error);

        res.status(500).json({
            error: "Failed to review code"
        });
    }
})

app.listen(5000, ()=>{
    console.log("Server started on port 5000");
})