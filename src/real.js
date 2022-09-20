import react, { useEffect, useState, submit } from "react";
import ReactDOM from "react-dom";
import { Modal, Button } from "react-bootstrap";
import "./App.css";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { useForm } from "react-hook-form";
import Moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import paginationfactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import ToolkitProvider, {
  CSVExport,
  Search,
} from "react-bootstrap-table2-toolkit";





const UserCreation = () => {
  const [formdata, setformData] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    role: "",
    email: "",
    gender: "",
    DOB: "",
    mobilenumber: "",
  });
  
  const [valid, setValid] = useState(false);
  const [notvalid, setNotvalid] = useState(false);
  const [inputValue, setInputValue] = useState();
  const changeHandler = async (e) => {
    setformData({ ...formdata, [e.target.name]: [e.target.value] });
  };

  const checkuser = async (e) => {
    setInputValue();
    setformData({ ...formdata, [e.target.name]: [e.target.value] });

    const usercheck = formdata.username.toString();

    const usercheckdata = { search_field: usercheck };
    const usercheckapi = await fetch("http://172.10.70.71:9011/usercheck", {
      method: "POST",
      body: JSON.stringify(usercheckdata),
 	     headers: {
        "content-type": "application/json",
      },
    });

    const usercheckresposne = await usercheckapi.json();
    

    if (usercheckresposne.message == "FAILED") {
      setValid(true);
      setNotvalid(false);
      setInputValue("");
    } else {
      setNotvalid(true);
      setValid(false);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
	  var dob= new Date(formdata.DOB);
    var date = Moment(dob).format("DD-MM-YYYY");
    const regbodydata = {


      username: formdata.username.toString(),
      password: formdata.password.toString(),
      first_name: formdata.first_name.toString(),
      last_name: formdata.last_name.toString(),
      role_id: formdata.role.toString(),
      email: formdata.email.toString(),
      gender: formdata.gender.toString(),
      dob: date.toString().slice(0,10),
      service_key: "GUI",
      mobile_number: formdata.mobilenumber.toString(),
    };

	  console.log(regbodydata);
    const senddatatoregapi = await fetch("http://172.10.70.71:9011/registor", {
      method: "POST",
      body: JSON.stringify(regbodydata),
      headers: {
        "content-type": "application/json",
},
    });
    const regresposne = await senddatatoregapi.json();
    console.log(regresposne);
if(regresposne.message == 'SUCCESS'){
    alert(regresposne.message);
    window.location.href = 'UserCreation';
}else{

alert(regresposne.data);
}

  };

  return (
    <>

    <div className="row">
      <Header />
      <SideMenu />
	      

      <section className="section sect2">
        <div className="row ">
	  <div className="sect1">
          
            <div className="col-lg-6 ">
              <div className="card">
                <div className="card-body">
                 <center> <h5 className="card-title">User Creation </h5></center>
                  <form autoComplete="off" onSubmit={submitHandler}>
                    <div className="row ">
                      <label
                        htmlFor="username"
                        className="col-sm-3 col-form-label"
                      >
                        username
                      </label>
                      <div className="col-sm-9">
                        <input
                          onBlur={checkuser}
                          type="text"
                          className="form-control"
                          name="username"
                          placeholder="User Name"
                          onChange={changeHandler}
                          required
                          value={inputValue}
                        />
                        {valid ? (
                          <span className="notvalid">
                            User name Already Exist
                          </span>
                        ) : null}
                        {notvalid ? (
                          <span className="valid">Valid User name</span>
                        ) : null}
                      </div>
                    </div>

                    <div className="row ">
                      <label
                        htmlFor="password"
                        className="col-sm-3 col-form-label"
                      >
                        password
                      </label>
                      <div className="col-sm-9">
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
                    <div className="row ">
                      <label
                        htmlFor="first_name"
                        className="col-sm-3 col-form-label"
                      >
                        First Name
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          name="first_name"
                          placeholder="First Name"
                          onChange={changeHandler}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <label
                        htmlFor="inputText"
                        className="col-sm-3 col-form-label"
                      >
                        Last Name
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          name="last_name"
                          placeholder="Last Name"
                          onChange={changeHandler}
                        />
                      </div>
                    </div>

                    <div className="row ">
                      <label htmlFor="role" className="col-sm-3 col-form-label">
                        Role
                      </label>
                      <div className="col-sm-9">
                        <select
                          className="form-select"
                          name="role"
                          onChange={changeHandler}
                        >
                          <option>Select Role</option>
                          <option value="1">ADMIN</option>
                          <option value="2">FINANCE</option>
                          <option value="3">SUPPORT</option>
                          <option value="4">USER</option>

                        </select>
                      </div>
                    </div>

                    <div className="row ">
                      <label
                        htmlFor="email"
                        className="col-sm-3 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          placeholder="E-mail"
                          onChange={changeHandler}
                        />
                      </div>
                    </div>

                    <div className="row ">
                      <label
                        htmlFor="gender"
                        className="col-sm-3 col-form-label"
                      >
                        Gender
                      </label>
                      <div className="col-sm-9">
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

                    <div className="row ">
                      <label htmlFor="bod" className="col-sm-3 col-form-label">
                        Date of Birth
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="date"
                          className="form-control"
                          name="DOB"
                          onChange={changeHandler}
                        />
                      </div>
                    </div>

                    <div className="row ">
                      <label
                        htmlFor="mobilenumber"
                        className="col-sm-3 col-form-label"
                      >
                        Mobile Number
                      </label>
                      <div className="col-sm-9">
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
          
	  
        </div>
	  </div>
      </section>
   
     </div> 
    </>
  );
}
export default UserCreation;
