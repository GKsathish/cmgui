import React from "react";
import { useState, useEffect } from "react";
import moment from 'moment'
import { Link } from 'react-router-dom';

const UserProfile = () => {

  const [editdata, setEditdata] = useState([{}]);
  const [data, setData] = useState([]);
 
  const [disabled, setDisabled] = useState(false);

  const [formdata, setformData] = useState({
    username: "",


  });

  const [firstname,setfirstname1]=useState("");
  const [lastname,setlastname1]=useState("");
  const [email,setemail1]=useState("");
  const [gender,setgender1]=useState("");
  const [roleid,setroleid1]=useState("");
  const [dob,setdob1]=useState("");
  const [mobilenumber,setmobilenumber1]=useState("");
  
   
  
    const update = async (e) => {
      e.preventDefault();
      let edititems = {
          firstname,
          lastname,
          email,
          gender,
          roleid,
          dob,
          mobilenumber,
      };
  
      var fname = edititems.firstname;
      var lname = edititems.lastname;
      var gmail = edititems.email;
      var gend = edititems.gender;
      var rol = edititems.roleid;
      var Dob = edititems.dob;
      var mob = edititems.mobilenumber;
      
  
      var fnamenew = "";
      if (fname == "") {
        fnamenew = editdata.first_name;
      } else {
        fnamenew = fname;
      }
  
      var lnamenew = "";
      if (lname == "") {
        lnamenew = editdata.last_name;
      } else {
        lnamenew = lname;
      }
  
      var gmailnew = "";
      if (gmail== "") {
        gmailnew = editdata.email;
      } else {
        gmailnew = gmail;
      }
  
      var gendnew = "";
      if (gend == "") {
        gendnew = editdata.gender;
      } else {
        gendnew = gend;
      }
  
      var Dobnew = "";
      if (Dob == "") {
        Dobnew = editdata.dob;
      } else {
        Dobnew = Dob;
      }
  
      var rolnew = "";
      if (rol == "") {
        rolnew = editdata.role_id;
      } else {
        rolnew = rol;
      }
  
      var mobnew = "";
      if (mob == "") {
        mobnew = editdata.mobile_number;
      } else {
        mobnew = mob;
      }
  
      
      if (mobnew == "" || mobnew == undefined) {
        mobnew = "null";
      }
      if (rolnew == "" || rolnew == undefined) {
        rolnew = "null";
      }
  
      if (fnamenew == "" || fnamenew == undefined) {
        fnamenew = "null";
      }
  
      if (lnamenew == "" || lnamenew == undefined) {
        lnamenew = "null";
      }
  
      if (Dobnew == "" || Dobnew == undefined) {
        Dobnew = "null";
      }
  
      if (gendnew == "" || gendnew == undefined) {
        gendnew = "null";
      }
  
      if (gmailnew == "" || gmailnew == undefined) {
        gmail = "null";
      }
  
      
  
      var newgmail = gmailnew.toString();
  
      var newgend = gendnew.toString();
      var newrolenew = rolnew.toString();
      var newmobnew = mobnew.toString();
      var newlnamenew = lnamenew.toString();
      var newfnamenew = fnamenew.toString();
      var newDobnew = Dobnew.toString();
     
  
      
  
      var editbodydata = {
        first_name: newfnamenew,
        last_name: newlnamenew,
        email: newgmail,
      
        gender: newgend,
        mobile_number: newmobnew,
        dob: newDobnew,
       
      };
  
  
   console.log(editbodydata);
  
  
      const response = await fetch(
        "http://172.10.70.140:9011/update",
  
        {
          method: "POST",
          body: JSON.stringify(editbodydata),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      console.log(response);
  
      const logindata = await response.json();
  
      console.log(logindata.data);
  
    
  
      
    };
  
  
  const handleClickEditMember = () => {
   
    setDisabled(true);
  };

  useEffect(() => {
    loaddata();

  }, []);

  const loaddata = async () => {
    
    const regbodydata = {
      username: formdata.username.toString()

    }

    const senddatatoregapi = await fetch("http://172.10.70.140:9011/userdetails", {
      method: "POST",
      body: JSON.stringify({ username: "Srinivas" }),
      headers: {
        "content-type": "application/json",
      },
    });

    const regresposne = await senddatatoregapi.json();
    console.log(regresposne);
    setData(regresposne.data);
    
  

  }

 
  return (
    <>
      <section className="section">
        <div className="row">
          <center className="p-5 m-5">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">User Field</h5>
                  <form autoComplete="off">
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
                          value={data.username} 
                          disabled={disabled}
                          required
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
                          onChange={(e) => {
                            setfirstname1(e.target.value);
                          }}
                          placeholder={data.first_name} disabled={disabled}/>
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
                          onChange={(e) => {
                            setlastname1(e.target.value);
                          }}
          
                          placeholder={data.last_name} disabled={disabled}
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
                          onChange={(e) => {
                            setgender1(e.target.value);
                          }}
                          placeholder={data.gender} disabled={disabled}

                        >
                          <option>Select Gender</option>

                          <option value="MALE">MALE</option>
                          <option value="FEMALE">FEMALE</option>
                        </select>
                      </div>
                    </div>


                    {/* <div className="row mb-3">
                      <label htmlFor="role" className="col-sm-2 col-form-label">
                        Role
                      </label>
                      <div className="col-sm-10">
                        <select
                          className="form-select"
                          name="role"
                          onChange={(e) => {
                            setroleid1(e.target.value);
                          }} 
                          placeholder={data.role_id} disabled={disabled}
                        >
                          <option>Select Role</option>
                          <option value="1">Admin</option>
                        </select>
                      </div>
                    </div> */}

                    <div className="row mb-3">
                      <label htmlFor="email" className="col-sm-2 col-form-label">
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
                        
                          placeholder={data.email} disabled={disabled}
                        />
                      </div>
                    </div>



                    <div className="row mb-3">
                      <label htmlFor="dob" className="col-sm-2 col-form-label">
                        Date of Birth
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="date"
                          className="form-control"
                          name="DOB"
                          onChange={(e) => {
                            setdob1(e.target.value);
                          }}
                          placeholder={data.dob} disabled={disabled}
                          
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
                          onChange={(e) => {
                            setmobilenumber1(e.target.value);
                          }}
                          placeholder={data.mobile_number} disabled={disabled}

                        />
                      </div>
                    </div>

                    

           
                    <div className='btn'>
                    <center>
                      <button
                        type="submit"
                        name="submit"
                        onClick={update}
                        className="btn btn-primary cust-bnt"
                      >
                        submit
                      </button>
                    </center>

                    <center>
                      <button
                        type="submit"
                        name="submit"
                        onClick={handleClickEditMember}
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
    </>
  )

}

export default UserProfile;



