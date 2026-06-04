import { useState } from "react";

function CodeInputPanel(){
    const [code,setCode] = useState("");
    return (
        <>
            <textarea className="w-60 h-20 p-2 border border-gray-300 rounded text-black" 
            placeholder="Paste your code here..."
            value={code}
            onChange={(e)=>setCode(e.target.value)}
            />
            <p>{code}</p>
        </>
    )
}

export default CodeInputPanel;