import React from "react";
import { useState } from "react";

const Registation = () => {
  const [formdata, setformData] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    role: "",
    email: "",
    gender: "",
    dob: "",
    mobilenumber: "",
  });

  const changeHandler = (e) => {
    setformData({ ...formdata, [e.target.name]: [e.target.value] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    var date = "08-08-2022";
    const regbodydata = {
      username: formdata.username,
      password: formdata.password,
      first_name: formdata.first_name.toString(),
      last_name: formdata.last_name.toString(),
      role_id: formdata.role.toString(),
      email: formdata.email.toString(),
      gender: formdata.gender.toString(),
      dob: date.toString(),
      service_key: "GUI",
      mobile_number: formdata.mobilenumber.toString(),
    };

  
    console.log(regbodydata);
    const senddatatoregapi = await fetch("http://172.22.9.76:9011/registor", {
      method: "POST",
      body: JSON.stringify(regbodydata),
      headers: {
        "content-type": "application/json",
      },
    });
    const regresposne = await senddatatoregapi.json();
    localStorage.setItem('user-info',JSON.stringify(regresposne))
    console.log(regresposne);
    alert(regresposne.message);
  };

  return (
    <>
      <section className="section">
        <div className="row">
          <center className="p-5 m-5">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Registation</h5>
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
                  <div className="row mb-3">
                    <label
                      htmlFor="first_name"
                      className="col-sm-2 col-form-label"
                    >
                      First Name
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        placeholder="First Name"
                        onChange={changeHandler}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      htmlFor="inputText"
                      className="col-sm-2 col-form-label"
                    >
                      Last Name
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        placeholder="Last Name"
                        onChange={changeHandler}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label htmlFor="role" className="col-sm-2 col-form-label">
                      Role
                    </label>
                    <div className="col-sm-10">
                      <select
                        className="form-select"
                        name="role"
                        onChange={changeHandler}
                      >
                        <option>Select Role</option>
                        <option value="1">Admin</option>
                      </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label htmlFor="email" className="col-sm-2 col-form-label">
                      Email
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="E-mail"
                        onChange={changeHandler}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label htmlFor="gender" className="col-sm-2 col-form-label">
                      Gender
                    </label>
                    <div className="col-sm-10">
                      <select
                        className="form-select"
                        name="gender"
                        onChange={changeHandler}
                      >
                        <option>Select Gender</option>

                        <option value="MALE">MALE</option>
                        <option value="FEMALE">FEMALE</option>
                      </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label htmlFor="bod" className="col-sm-2 col-form-label">
                      Date of Birth
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="date"
                        className="form-control"
                        name="DOB"
                        onChange={changeHandler}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      htmlFor="mobilenumber"
                      className="col-sm-2 col-form-label"
                    >
                      Mobile Number
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        name="mobilenumber"
                        placeholder="Mobile Number"
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
                      Register
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
};
export default Registation;



