import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Signup = () => {
    const [error,setError]=useState('')


    const {createUser}=useContext(AuthContext)

    const handlesignup=(event)=>{
        event.preventDefault();
        setError("")
        const email=event.target.email.value;
        const password=event.target.password.value;
        const confirm=event.target.confirm.value;
console.log(confirm)
        if(password!==confirm){
            console.log("fg")
            setError("your pass didi not match")
         return
        }

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            // ..
          });


    }
    return (
        
      
        <div>
            <h2>Sign up page</h2>


            <div className="form-container">
                <form onSubmit={handlesignup} >
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" name="email" id="" />
                    </div>

                    <div className='form-control'>
                        <label htmlFor="password">password</label>
                        <br />
                        <input type="password" name="password" id="" />
                    </div>

                    <div className='form-control'>
                        <label htmlFor="confirm">consfirm password</label>
                        <br />
                        <input type="password" name="confirm" id="" />
                    </div>
         

                    <div className='btn-submit'>
                      <input className="btn" type="submit" value="submit" />
                    </div>
                </form>
                <div>{error}</div>
                <p><small>Already have an account? <Link to="/login">please login</Link></small></p>


            </div>
      
        </div>
        
    );


       

};

export default Signup;