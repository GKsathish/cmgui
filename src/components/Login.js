// import React from "react";
// import Sidemenu from "./Sidemenu";
// import "bootstrap/dist/css/bootstrap.min.css";



// function Login() {
//   return(
//   <div>
//    <div>
//  <Sidemenu/>
//     <center><h1>Login</h1></center>
    
    
   
//     </div>
//     </div>
//   )
// }

// export default Login;



import React from "react";
import { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  
  const [formdata, setformData] = useState({
    username: "",
    password: "",
    
  });
 const history =useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history("/Registation")
    }
  }, [])
  

  const changeHandler = (e) => {
    setformData({ ...formdata, [e.target.name]: [e.target.value] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
   
    const regbodydata = {
      username: formdata.username.toString(),
      password: formdata.password.toString(),
     
    };
    console.log(regbodydata);
    const senddatatoregapi = await fetch("http://172.22.9.76:9011/loginapi", {
      method: "POST",
      body: JSON.stringify(regbodydata),
      headers: {
        "content-type": "application/json",
      },
    });
    const regresposne = await senddatatoregapi.json();
    console.log(regresposne);
    
    alert(regresposne.message);
  };

  return (
    <>
      <section className="section">
        <div className="row">
          <center className="p-5 my-5">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">User Login</h5>
                <form autoComplete="off" onSubmit={submitHandler}>
                  <div className="row mb-3">
                    <label
                      htmlFor="username"
                      className="col-sm-2 col-form-label"
                    >
                      username
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="User Name"
                        onChange={changeHandler}
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      htmlFor="password"
                      className="col-sm-2 col-form-label"
                    >
                      password
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="password"
                        className="form-control"
                        autoComplete="on"
                        name="password"
                        placeholder="password"
                        onChange={changeHandler}
                      />
                    </div>
                  </div>
                  
                  <center>
                    <button
                      type="submit"
                      name="submit"
                      className="btn btn-primary cust-bnt"
                    >
                      Login
                    </button>
                  </center>
                </form>
              </div>
            </div>
          </div>  
          </center>
        </div>
      </section>
    </>
  );
}

export default Login;