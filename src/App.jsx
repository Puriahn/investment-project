import { useState } from "react";

import Header from "./Components/Header";
import UserInput from './Components/userInput';
import Results from "./Components/Results";

function App() {
  const [userInput,setUserInput]=useState({
    initialInvestment:10000,
  annualInvestment:1200,
  expectedReturn:16,
  duration:10
  })
  const hasResult=userInput.duration>=1;

  function handleChange(inputIdentifier,newValue){
    setUserInput(x=>{
     return{
      ...x,
      [inputIdentifier]:+newValue
     } 
    })
  }
  console.log(userInput)
  return(
  <div>
    <p>sddfghjkl</p>
    <Header/>
    <UserInput onchange={handleChange} input={userInput} />
    {!hasResult&&<p className="center">duration has to be greater then 0!</p>}
    {hasResult&&<Results input={userInput}/>}
  </div>
  )
}

export default App;
