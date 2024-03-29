import React, {useState} from "react";
import {AiFillPlusCircle,AiFillMinusCircle} from "react-icons/ai";

const Question = ({title,info}) => {
  const[showInfo, setShowInfo] = useState(false)

  return (
    <article className="question">

    <header>
    <h4>{title}</h4>
    
    <button className="btn" onClick= {() =>setShowInfo(!showInfo)}>
    {showInfo? <AiFillMinusCircle /> : <AiFillPlusCircle />}
    </button>
    </header>
    {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Question;

