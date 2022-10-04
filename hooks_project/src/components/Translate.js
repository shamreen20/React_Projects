//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

import React, {useState} from "react";
import DropDown from "./DropDown";
import Convert from "./Convert";

const Translate = () => {
   const options = [
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "German",
        value: "de"
    },
    {
        label: "Hindi",
        value: "hi"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Spanish",
        value: "es"
    },
    {
        label: "Chinese",
        value: "zh"
    },
   ];

   const [language, setLanguage] = useState(options[0]);
   const [text, setText] = useState("")

    return(
        <div>
        <div className="ui form">
        <div className="field">
        
        <h4>Enter the text</h4>
        <input onChange = {(e) => setText(e.target.value) }  />
        </div>
        </div>
        <DropDown
        label = "Select the language"
        selected= {language}
        onSelectedChange = {setLanguage}
        options = {options} />
       
       <hr />
       <h3 className="ui header">Output</h3>
       <Convert text={text} language= {language} />



        </div>

        

    )
}

export default Translate;