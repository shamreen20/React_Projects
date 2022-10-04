import React,{useState} from "react";
import Data from "./Data";
import options from "./Dropdown_data"
import Question from "./Question";
import SearchBar from "./SearchBar";
import DropDown from "./DropDown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./header";





const App = () => {

   const [questions,setQuestions] = useState(Data);
   const[selected, setSelected] = useState(options[0])

    
    
     return (
        <div>
          <Header />
          <Route path="/">
          
          <main>     
          <div className="container">
          
          <section className="info">
          {questions.map((question) => {
              return(
                <Question  key={question.id} {...question} /> )
      
          })}
          </section>
         </div>
      </main>

           
          </Route>
          <Route path="/SearchBar">
            <SearchBar />
          </Route>
          <Route path="/dropdown">
            <DropDown
              label="Select a color"
              options={options}
              selected={selected}
              onSelectedChange={setSelected}
            />
          </Route>
          <Route path="/translate">
            <Translate />
          </Route>
        </div>
      );}

    
export default App