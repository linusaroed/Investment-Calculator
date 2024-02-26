import React from "react";
import Result from "./components/Result.jsx";
import Input from "./components/Input.jsx";

function App() {
  const[inputs,setInputs] = React.useState([null,null,null,null]);

  function handleChange(parameter,event){
    const temp = [...inputs];
    let i=null;
    switch(parameter){
      case "InitialInvestment" :
        i=0;
        break;
      case "AnnualInvestment" :
        i=1;
        break;
      case "ExpectedReturn" :
        i=2;
        break;
      case "Duration" :
        i=3;
        break;
      default:
        break;
    }
    temp[i] = event.target.value;
    setInputs(() => temp);
  }

  return (
    <>
    <div id="user-input">
      <div className="input-group"> 
        <Input label="initialInvestment" handleChange={(event)=>handleChange("InitialInvestment",event)}/>
        <Input label="annualInvestment" handleChange={(event)=>handleChange("AnnualInvestment",event)}/>
      </div>
      <div className="input-group"> 
        <Input label="expectedReturn" handleChange={(event)=>handleChange("ExpectedReturn",event)}/>
        <Input label="duration" handleChange={(event)=>handleChange("Duration",event)}/>
      </div>
    </div>
    <Result inputs={inputs}/>
    </>
  )
}

export default App
