import { useState } from "react";

function CodeInputPanel({code,setCode}){
    return (
        <>
            <textarea className="w-60 h-20 p-2 border border-gray-300 rounded text-black" 
            placeholder="Paste your code here..."
            value={code}
            onChange={(e)=>setCode(e.target.value)}
            />
        </>
    )
}

export default CodeInputPanel;