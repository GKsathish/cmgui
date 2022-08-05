import React from 'react'
import {useState} from 'react'

const Block = () => {
  
    const [formdata, setformData] = useState({
        username: "",
        login_status: "",
        
      });
    
      const changeHandler = (e) => {
        setformData({ ...formdata, [e.target.name]: [e.target.value] });
      };
    
      const submitHandler = async (e) => {
        e.preventDefault();
        const regbodydata = {
          username: formdata.username.toString(),
          login_status : formdata.login_status.toString(),
         
        };
        console.log(regbodydata);
        const senddatatoregapi = await fetch("http://172.22.9.76:9011/userstatus", {
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
                    <h5 className="card-title">Block User</h5>
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
                          htmlFor="username"
                          className="col-sm-2 col-form-label"
                        >
                          Status
                        </label>
                        <div className="col-sm-10">

                        <select
                        className="form-select"
                        name="login_status"
                        onChange={changeHandler}
                      >
                        <option>Status</option>
                        <option value="ACTIVE">Active</option>
                        <option value="INACTIVE">In Active</option>
                      </select>
                        </div>
                      </div>
    
                      <center>
                        <button
                          type="submit"
                          name="INACITVE"
                          className="btn btn-primary cust-bnt"
                        >
                          Submit
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

export default Block