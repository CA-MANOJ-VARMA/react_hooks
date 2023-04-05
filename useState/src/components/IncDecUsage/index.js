import './index.css'
import {useState} from 'react'

function IncDecUsage(){

    const [count,setCount] = useState(0)

    // using updater function will change the state variable even when it is in
    // pending state 
    // setCount(count + 1) can also be used but this will not change the state variable when it is in pending state


    const incButton = () =>{
        setCount(count=>count+1)
    }

    const decButton = () =>{
        if (count>0) {
            return setCount(count=>count-1)
        }
        return setCount(0)
    }

    return(
        <div className='css-bg-incdecusage-container'>
            <button type='button' className='css-incdecusage-button-itself' onClick={decButton}> - </button>
            <p>{count}</p>
            <button type='button' className='css-incdecusage-button-itself' onClick={incButton}> + </button>
        </div>
    )
}

export default IncDecUsage