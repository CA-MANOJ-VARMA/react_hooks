import {useState,useMemo,useCallback} from 'react'
import './App.css';

function App() {
  const [factorialValue, setFactorialValue] = useState(6)

  const factoriaMemoReturn = useMemo(() => { 
    return factorial(factorialValue)
  })

  const factoriacallbackReturn = useCallback(() => { 
    return factorial(factorialValue)
  })
  console.log(factoriacallbackReturn )
  //returns the whole function instead of a value

  const incButton= () =>{
    setFactorialValue(factorialValue+1)
  }

  function factorial(n){
    return n*(n-1)
  }

  return (
    <div className="App">
      <p>Factorial of {factorialValue} is {factoriaMemoReturn}</p>
      <button type="button" onClick={incButton}>Click Here</button>
    </div>
  );
}

export default App;
