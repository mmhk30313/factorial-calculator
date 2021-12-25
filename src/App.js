import React, {useState} from "react";

export default function App() {
  const [factResult, setFactResult] = useState("   ");
  const factorial = (form) => {
    form.preventDefault();
    // const elements = form?.target?.elements;
    try{
      const n = form?.target?.int_number?.value;
      console.log({n});
      if(Number(n) < 0 || isNaN(n) || parseFloat(n) % 1 || !isFinite(n)){
        setFactResult(n + " is not a positive integer");
        return;
      }
      if(parseInt(n) > 120000){
        setFactResult("Input number should not be greater then 120000 for working smoothly");
        return;
      }
      let p = BigInt(1)
      let i = BigInt(parseInt(n))
    // console.log({p});
    // console.log({n});
      while (1 < i){ p *= i; i--;}
      // console.log(n+"! = ",p);
      setFactResult(n + "! = " + String(p))
      return;
    }catch(err){
      setFactResult("Enter a valid positive integer!!!")
    }
  };
  return (
    <div style={{margin: '0', padding: '5px'}}>
      <h1>Factorial Calculator</h1>
      <form onSubmit={(form) => {factorial(form)}}>
        <input type="number" name="int_number" placeholder="Enter a number..." />
        <br /><br/>
        <button type="submit">Calculate Factorial</button>
      </form>
      <h2 style={{width: "100%", padding: '2px', overflowX: 'scroll'}}>Factorial: {factResult}</h2>    
    </div>
  );
}
