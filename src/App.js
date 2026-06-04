import CodeInputPanel from "./components/CodeInputPanel";
import LanguageSelector from "./components/LanguageSelector";
import ReviewButton from "./components/ReviewButton";

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center gap-10">
      <h1 className="text-5xl font-bold text-blue-500">
        AI Code Reviewer
      </h1>
      <CodeInputPanel/>
      <LanguageSelector/>
      <ReviewButton/>
    </div>
  );
}

export default App;