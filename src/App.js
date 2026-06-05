import CodeInputPanel from "./components/CodeInputPanel";
import LanguageSelector from "./components/LanguageSelector";
import ReviewButton from "./components/ReviewButton";
import { useState } from "react";

function App() {
  const [code,setCode] = useState("");
  const [language, setLanguage] = useState("C++");

  function handleReview(){
    console.log({
      code,
      language
    })
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center gap-10">
      
      <h1 className="text-5xl font-bold text-blue-500">
        AI Code Reviewer
      </h1>

      <CodeInputPanel
      code = {code} 
      setCode={setCode}/>

      <LanguageSelector
      language={language}
      setLanguage={setLanguage}/>

      <ReviewButton handleReview={handleReview}/>
    </div>
  );
}

export default App;