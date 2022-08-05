import React from 'react'
import {useState} from 'react'

const Unblock = () => {
    const [formdata, setformData] = useState({
        username: "",
      
        
      });
    
      const changeHandler = (e) => {
        setformData({ ...formdata, [e.target.name]: [e.target.value] });
      };
    
      const submitHandler = async (e) => {
        e.preventDefault();
      
        const regbodydata = {
          username: formdata.username.toString(),
      
         
        };
        console.log(regbodydata);
        const senddatatoregapi = await fetch("http://172.22.9.54:9011/loginapi", {
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
                    <h5 className="card-title">Unblock User </h5>
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
    
                    
                      <center>
                        <button
                          type="submit"
                          name="submit"
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

export default Unblock