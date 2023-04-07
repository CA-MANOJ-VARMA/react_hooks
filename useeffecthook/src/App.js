import {useState, useEffect} from 'react'
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './App.css';

function App() {
  const [count,setCount] = useState(0)
  const [message, setMessage] = useState(1)
  const [forever, setForever] = useState(0)

  // using updater function will change the state variable even when it is in
  // pending state 
  // setCount(count + 1) can also be used but this will not change the state variable when it is in pending state



  // const effectHook = useEffect(()=>{
  //   setCount(10)
  //   console.log('initial only')
  //   return count
  // },[])
  // The above return a value which is a violation of useEffect Hook
  // It should either return a function or nothing> it should not reutrn anything other than function such as Value etc.

  // This will be called only 1st time after rendering
 useEffect(()=>{
      setCount(10)
      console.log('initial only')
      
    },[]) 

    //This will run initially after rendering and then only after message state is changed

    useEffect(()=>{
      setCount(100)
      console.log('initial only')
      
    },[message]) 

// This will run till forever is 10000 if we remove if-statement it will run forever

    useEffect(()=>{
      if (forever<10000){
        setForever(forever => forever+1)
      }
      console.log(typeof(console.log('Forever')))
      return console.log('Forever')
      
    })

  const incButton = () =>{
      setCount(count=>count+1)
  }

  const incMessageButton = () =>{
    setMessage(count=>count+1)
}

  const decButton = () =>{
      if (count>0) {
          return setCount(count=>count-1)
      }
      return setCount(0)
  }
  return (
    <>
    <div className='css-heading-container'>
      <h1>USE STATE HOOK</h1>
      <p>useState is a React Hook that lets you add a state variable to your component.</p>
    </div>
    <div className='css-bg-incdecusage-container'>
            <button type='button' className='css-incdecusage-button-itself' onClick={decButton}> - </button>
            <p>{count}</p>
            <button type='button' className='css-incdecusage-button-itself' onClick={incButton}> + </button>
            
    </div>
    <div>  
 <p>{message}</p>
<button type='button'  onClick={incMessageButton}> Message Button </button>
    </div>
       <p>{forever}</p>
    </>
  );
}

export default App;
