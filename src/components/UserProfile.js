import React from "react";
import { useState, useEffect } from "react";
import Moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import SideMenu from "./SideMenu";
const UserProfile = () => {
  var usernameedit = sessionStorage.getItem("uname");
  const [editdata, setEditdata] = useState([{}]);
  const [data, setData] = useState([]);

  const [formdata, setformData] = useState({
    username: "",
  });

  const [firstname, setfirstname1] = useState("");
  const [lastname, setlastname1] = useState("");
  const [email, setemail1] = useState("");
  const [gender, setgender1] = useState("");
  const [roleid, setroleid1] = useState("");
  const [dob, setdob1] = useState("");
  const [mobilenumber, setmobilenumber1] = useState("");

  const update = async (e) => {
    e.preventDefault();
    const edititems = {
      firstname,
      lastname,
      email,
      gender,
      roleid,
      dob,
      mobilenumber,
    };

    console.log(edititems);

    var fname = edititems.firstname.toString();
    var lname = edititems.lastname.toString();
    var gmail = edititems.email.toString();
    var gend = edititems.gender.toString();
    var rol = edititems.roleid.toString();
    var now = new Date(edititems.dob).toString();
    var Dob = Moment(now).format("DD-MM-YYYY").toString();
    var mob = edititems.mobilenumber;

    var editbodydata = {
      username: usernameedit,
      first_name: fname,
      last_name: lname,
      email: gmail,

      gender: gend,
      mobile_number: mob,
    };

    Object.keys(editbodydata).forEach((key) => {
      if (editbodydata[key] === null || editbodydata[key] === "") {
        delete editbodydata[key];
      }
    });

    editbodydata.username = usernameedit;
    console.log(editbodydata);
    const response = await fetch(
      "http://172.10.70.140:9011/update",

      {
        method: "POST",
        body: JSON.stringify(editbodydata),
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response);

    const logindata = await response.json();
    if (logindata.data.message == "SUCCESS") {
      alert(logindata.data.message);
      window.location.href = "UserProfile";
    } else {
      alert(logindata.data);
      window.location.href = "UserProfile";
    }
  };


	const [disabled, setDisabled] = useState(true);
  const handleClickEditMember = (e) => {
    e.preventDefault();


 
    setDisabled(false);
  };

  useEffect(() => {
    loaddata();
  }, []);

  const loaddata = async () => {
    const regbodydata = {
      username: formdata.username.toString(),
    };

    const senddatatoregapi = await fetch(
      "http://172.10.70.140:9011/userdetails",
      {
        method: "POST",
        body: JSON.stringify({ username: usernameedit }),
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const regresposne = await senddatatoregapi.json();
    console.log(regresposne);
    setData(regresposne.data);
  };

  return (
    <>
      <Header />
 <SideMenu />
      <section className="section">
        <div className="row">
          <center className="p-5 m-5">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Edit Profile</h5>
                  <form autoComplete="off">
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
                          onChange={(e) => {
                            setfirstname1(e.target.value);
                          }}
                          placeholder={data.first_name}
                          disabled={disabled}
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
                          onChange={(e) => {
                            setlastname1(e.target.value);
                          }}
                          placeholder={data.last_name}
                          disabled={disabled}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="gender"
                        className="col-sm-2 col-form-label"
                      >
                        Gender
                      </label>
                      <div className="col-sm-10">
                        <select
                          className="form-select"
                          name="gender"
                          onChange={(e) => {
                            setgender1(e.target.value);
                          }}
                          placeholder={data.gender}
                          disabled={disabled}
                        >
                          <option>Select Gender</option>

                          <option value="MALE">MALE</option>
                          <option value="FEMALE">FEMALE</option>
                        </select>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="email"
                        className="col-sm-2 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          onChange={(e) => {
                            setemail1(e.target.value);
                          }}
                          placeholder={data.email}
                          disabled={disabled}
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
                          onChange={(e) => {
                            setmobilenumber1(e.target.value);
                          }}
                          placeholder={data.mobile_number}
                          disabled={disabled}
                        />
                      </div>
                    </div>

                    <div className="buttn">
                      <center >
                        <button
                          type="submit"
                          name="submit"
                          onClick={update}
                          className="btn btn-primary cust-bnt m-2"
                        >
                          submit
                        </button>
                      </center>

                      <center>
                        <button
                          type="button"
                          name="submit"
                          onClick={handleClickEditMember}
                          className="btn btn-warning cust-bnt m-2"
                        >
                          Edit
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
    </>
  );
};

export default UserProfile;
