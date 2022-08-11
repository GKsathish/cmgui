import React from "react";
import { useState,useEffect } from "react";
import {useNavigate,useParams} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Update = () => {
  const [mes,setMes]=useState({});
  const [update,setUpdate]=useState({'username':'','first_name':'','last_name':'','role_id':'',
'email':'','gender':'','dob':'','mobilenumber':''})

  const navig=useNavigate();
  const {username}= useParams;

  useEffect(() => {
    
    const updateuser= async ()=>{
        const  resp= await fetch('http://172.10.70.140:9011/update/${username}');
        const data= await resp.json();
        console.log(data)
       
    }
    updateuser();
  }, [])
  const changeHandler=(e)=>{
   setUpdate({...update,[e.target.name]:e.target.value})
  }
  const onsubmithandler= async (e)=>{
    e.preventDefault();
    const  resp1= await  fetch('http://172.10.70.140:9011/update/${username}', 
    {
      method: "POST",
      body: JSON.stringify(update),
      headers: { 'Content-Type': 'application/json' },
    }
    );
    setMes(resp1.data.msg)
  }

 return(
  <>
<center><h1>USER EDIT FIELD</h1></center>

  <section className="section">
        <div className="row">
          <center className="p-5 my-5">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">User Field</h5>
                <form autoComplete="off" onSubmit={onsubmithandler} >
                  <div className="row mb-3">
                  
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="User Name"
                       
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                  
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        placeholder="first_name"
                        // onChange={changeHandler}
                        value={update.first_name}
                        required
                      />
                    </div>
                  </div>
     
                  <div className="row mb-3">
                  
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      name="last_name"
                      placeholder="last_name"
                      value={update.last_name}
                      // onChange={changeHandler}
                      required
                    />
                  </div>
                </div>
                  
                <div className="row mb-3">
                  
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      name="role_id"
                      placeholder="role_id"
                      // onChange={changeHandler}
                     value={update.role_id}
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="email"
                        // onChange={changeHandler}
                        value={update.email}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="row mb-3">
                  
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      name="gender"
                      placeholder="gender"
                      // onChange={changeHandler}
                    value={update.gender}
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  
                  <div className="col-sm-10">
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      placeholder="date"
                      // onChange={changeHandler}
                    value={update.dob}
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      name="mobilenumber"
                      placeholder="mobilenumber"
                      // onChange={changeHandler}
                    value={update.mobilenumber}
                      required
                    />
                  </div>
                </div>

                  <center>
                    <button
                      type="submit"
                      name="submit"
                      className="btn btn-secondary cust-bnt"
                      
                    >
                      Edit
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



export default Update
