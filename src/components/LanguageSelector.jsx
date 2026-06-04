function LanguageSelector(){
    return (
        <>
            <select defaultValue="C++" className="text-black p-2 border rounded">
                <option value="C++">C++</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="C#">C#</option>
            </select>
        </>
    )
}

export default LanguageSelector;