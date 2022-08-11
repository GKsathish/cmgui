import React from 'react';
import '../App.css'

import { useState } from "react";

const UserProfile = () => {
  const [data, setData] = useState();

  const [formdata, setformData] = useState({
    username: "",
  });


  const changeHandler = (e) => {
    setformData({ ...formdata, [e.target.name]: [e.target.value] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const regbodydata = {
      username: formdata.username.toString()


    };
    console.log(regbodydata);
    const senddatatoregapi = await fetch("http://172.10.70.140:9011/userdetails", {
      method: "POST",
      body: JSON.stringify(regbodydata),
      headers: {
        "content-type": "application/json",
      },
    });
    const regresposne = await senddatatoregapi.json();

    console.log(regresposne);

   console.log( setData(regresposne));

    alert(data);
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

                    <div className='btn'>
                    <center>
                      <button
                        type="submit"
                        name="submit"
                        className="btn btn-primary cust-bnt"
                      >
                        submit
                      </button>
                    </center>

                    <center>
                      <button
                        type="submit"
                        name="submit"
                        className="btn btn-warning cust-bnt"
                      >
                        EditBtn
                      </button>
                    </center>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </center>
        </div>
      </section>

      

      {/* Form field*/}

      <div className="section">
        <div className="row">
          <center className="p-5 my-5">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">User Field</h5>
                  <form autoComplete="off" >
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
                          // value={data.first_name}
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
                          // value={data.last_name}
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
                            // value={data.role_id}
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
                          // value={data.email}
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
                          //  value={data.gender}
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
                          // value={data.dob}
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
                          //  value={data.mobilenumber}
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
                        Update
                      </button>
                    </center>
                  </form>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>




    </>
  );

}

export default UserProfile
