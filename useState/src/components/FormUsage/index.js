import './index.css'
import {useState} from 'react'

function FormUsage(){

    const [form,setForm] = useState({
        username:'',
        password:'',
        confirmPassword:'',
        email:'',
        isEqual:''
    })
    

    const [errormsg, seterrormsg] = useState('')


      console.log('Hello')
      const lowerCase = new RegExp("^(?=.*[a-z])");
      const upperCase = new RegExp("^(?=.*[A-Z])");
      const numbersArePresent = new RegExp("^(?=.*\\d)");
      const specialChar = new RegExp("^(?=.*[-+_!@#$%^&*.,?])");
      const spaceInclusion = form.password.includes(" ");
      console.log(spaceInclusion)




    const inputOnChangeFunction = (event) =>{
        const targetElement = event.target.name
        const targetValue = event.target.value
        
        if (targetElement==='nameInput'){
            setForm({
                ...form ,username:targetValue
            })
        }

        if (targetElement==='emailInput'){
            setForm({
                ...form ,email:targetValue
            })
        }

        if (targetElement==='passwordInput'){
            setForm({
                ...form ,password:targetValue
            })
        }
        
        if (targetElement==='confirmPasswordInput'){
            console.log(form.confirmPassword)
            setForm({
                ...form ,confirmPassword:targetValue
            })
        }

    }




    const submitForm  =(event) =>{
        event.preventDefault()
        console.log(!form.email.includes('@') || !form.email.includes('.com') )
        switch(''){
            case (form.username):
                return seterrormsg(errormsg =>errormsg='*username is required')
            case (form.email):
                return seterrormsg(errormsg =>errormsg='*email is required')
            case (form.password):
                return seterrormsg(errormsg =>errormsg='*password is required')
            case (form.confirmPassword):
                return seterrormsg(errormsg =>errormsg='*confirm Password is required')
            default:
                break
            }
        switch(true){
        case (!form.email.includes('@') || !form.email.includes('.com') ):
            return seterrormsg(errormsg =>errormsg='*Please Enter Proper Email')      
        default:
                return seterrormsg(errormsg =>errormsg='') 
        }

       
       
    }

    const percentageLimit = Math.min(Math.ceil(form.password.length),10)*100/10 + '%'

   

    return(
        <div className='css-FormUsage-bg-container d-flex flex-column    justify-content-center align-items-center' onSubmit={submitForm}>
            <form type='submit' className='css-FormUsage-form-container'>
                <div className='css-FormUsage-input-container'>
                    <label htmlFor='name'>NAME</label>
                    <input type='text' id='name' 
                    name='nameInput' 
                    placeholder='Enter Your Name' className='css-FormUsage-input-itself' 
                    value={form.username}
                    onChange={inputOnChangeFunction}/>   
                </div>
                <div className='css-FormUsage-input-container'>
                    <label htmlFor='email'>EMAIL</label>
                    <input id='email' name='emailInput' placeholder='Enter Your Email' className='css-FormUsage-input-itself'
                    value={form.email}
                    onChange={inputOnChangeFunction}
                    />
                </div>
                <div className='d-flex align-items-center'>
                    <div  className='d-flex flex-column mr-3'>
                        <div className='css-FormUsage-input-container'>
                            <label htmlFor='password'>PASSWORD</label>
                            <input type='password' id='password' name='passwordInput' placeholder='Enter Your Password' className='css-FormUsage-input-itself'
                            value={form.password}
                            onChange={inputOnChangeFunction}
                            />
                            {form.password.length!==0 && 
                            <>
                            <p className='m-0 p-0 alert-link' style={{'color':'green'}}>Password Strength</p>
                        <div className="progress m-0 p-0"  style={{'height':'5px'}}>
                            <div className="progress-bar bg-success m-0 p-0" role="progressbar" style={{"width": percentageLimit}} aria-valuemin="0" aria-valuemax="100">
                                
                            </div>
                           
                        </div>
                        </>
                        }
                        </div>
                        <div className='css-FormUsage-input-container'>
                            <label htmlFor='confirmpassword'>CONFIRM PASSWORD</label>
                            <input type='password' id='confirmpassword' name='confirmPasswordInput' placeholder='Enter Password Again' className='css-FormUsage-input-itself'
                            value={form.confirmPassword}
                            onChange={inputOnChangeFunction}
                            />                      
                        </div>
                    </div>
                    
                </div>
                {form.password!==form.confirmPassword && <p  className='alert-link' style={{'color':'red','padding':'0'}}>*Passwords didn't match</p>}

                {(form.password===form.confirmPassword && (form.password!=='' && form.confirmPassword!=='')) && 
                (<p className='alert-link' style={{'color':'green','padding':'0'}}>Passwords matched</p>)}
                
                <button type='submit' className='btn btn-primary mt-3'>Submit</button>
                <p  className='alert-link m-0 p-0' style={{'color':'red'}}>{errormsg}</p>
            </form>
            <div style={{'fontSize':'12px'}} className='d-flex flex-column justify-content-start align-items-start'>
                        {form.password.length!==0 && (lowerCase.test(form.password)?(<p className='alert-link p-0 m-0'  style={{'color':'green'}}>Contain Lower Case</p>):(<p className='alert-link p-0 m-0'  style={{'color':'red','padding':'0'}}>Doesn't Contain Lower Case</p>))}

                        {form.password.length!==0 && (upperCase.test(form.password)?(<p className='alert-link p-0 m-0'  style={{'color':'green'}}>Contain Upper Case</p>):(<p className='alert-link p-0 m-0'  style={{'color':'red'}}>Doesn't Contain Upper Case</p>))}

                        {form.password.length!==0 && (numbersArePresent.test(form.password)?(<p className='alert-link p-0 m-0'  style={{'color':'green'}}>Contain Numbers</p>):(<p className='alert-link p-0 m-0'  style={{'color':'red'}}>Doesn't Contain Numbers</p>))}

                        {form.password.length!==0 && (specialChar.test(form.password)?(<p className='alert-link p-0 m-0'  style={{'color':'green'}}>Contain Special Characters</p>):(<p className='alert-link p-0 m-0'  style={{'color':'red'}}>Doesn't Contain Special Characters</p>))}

                        {form.password.length!==0 && (spaceInclusion?(<p className='alert-link p-0 m-0'  style={{'color':'red'}}>Dont Include space in the password</p>):(''))}

                        {form.password.length!==0 && ((form.password.length>=8)?(<p className='alert-link p-0 m-0'  style={{'color':'green'}}>Password contains atleast 8 characters</p>):(<p className='alert-link p-0 m-0'  style={{'color':'red'}}>Password should contains atleast 8 characters</p>))}

                        
            </div>
        
        </div>
    )
}

export default FormUsage