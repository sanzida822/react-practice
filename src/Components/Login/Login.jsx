import React, { useContext, useState } from "react";
import "./login.css";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);

  const [show,setShow]=useState(false)
  const navigate = useNavigate();

  const location=useLocation();


  //private route a state save hoice kina
  const from=location.state?.from?.pathname||"/";

  console.log(location)


  const handlesignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        event.target.reset();

   
   
         navigate(from, { replace: true });
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div>
      <h2>Login page</h2>

      <div className="form-container">
        <form onSubmit={handlesignIn}>
          <div className="form-control">
            <label htmlFor="">Email</label>
            <br />
            <input type="email" name="email" id="" />
          </div>

          <div className="form-control">
            <label htmlFor="">password</label>
            <br />
            <input type={show?"text":"password"} name="password" id="" />
            <p onClick={()=>setShow(!show)}>
              {
                show?<span>hide pasword</span>:<span>show password</span>
              }
              </p>
          </div>

          <div className="btn-submit">
            <button>submit</button>
          </div>
        </form>
        <p>
          <small>
            new to ema-john? <Link to="/signup">sign up</Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Login;
