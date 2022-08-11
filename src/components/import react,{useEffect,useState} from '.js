import react,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './Header';
import SideMenu from './SideMenu'
import ReactHtmlTableToExcel from 'react-html-table-to-excel';

function Current_Month_Accounts_Summary(){ 


const [data,setData] = useState([]);


  useEffect(()=>{
    fetch('http://151.51.71.77:3028/generate/report',{
      method:'POST',
      body: JSON.stringify({ key: 'REPORTCURMONSUM' })
    })
     .then(response => response.json())
     .then(json => setData(json.data))})

/*fetch('http://151.51.71.77:3028/generate/report',{
  method:'POST',
  body: JSON.stringify({ key: 'REPORTCURMONSUM' })})
  .then(response => response.json())
  .then(json => setData(json.data));
  //console.log(Object.keys(data));*/

return (

<div className="row">
<Header />
<SideMenu />
<div className="col-lg-10 table-row">
<p className="rep-name">Current Month Accounts Summary</p>
<p>{data.length && Object.keys(data[0]) ?data.length && Object.keys('') : <div className="dataload"><div class="spinner-border text-warning" role="status"><span class="sr-only"></span></div></div>  }</p>
<table className="table table-bordered" id="exportdata">
  <thead className="bg-warning">
    <tr>
      {data.length && Object.keys(data[0]).map((key) => (<th>{key}</th>))}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{data.map(item => <p key={item.id}>{item.nameordesc}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item.mobilenno}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item.currbal}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._01}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._02}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._03}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._04}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._05}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._06}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._07}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._08}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._09}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._10}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._11}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._12}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._13}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._14}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._15}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._16}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._17}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._18}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._19}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._20}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._21}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._22}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._23}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._24}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._25}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._26}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._27}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._28}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._29}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._30}</p>)}</td>
      <td>{data.map(item => <p key={item.id}>{item._31}</p>)}</td>
    </tr>
  </tbody>
</table>


<ReactHtmlTableToExcel 
  className="bnt export-bnt"
  table="exportdata"
  filename="Current_Month_Accounts_Summary"
  sheet="sheet"
  buttonText="Export"
/>
</div>

</div>



)
}
export default Current_Month_Accounts_Summary;







////


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

function UserProfile() {
  const [formInput, setFormInput] = useState("");
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);

  const [editdata, setEditdata] = useState([{}]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([{}]);

  const [msisdnshow, setMsisdnshow] = useState(false);

  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div class="exp-bnt">
        <button className="btn btn-success cust-btn" onClick={handleClick}>
          Export
        </button>
      </div>
    );
  };

  const pagination = paginationfactory({
    page: 1,
    sizePerpage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
  });

  const rowEvents = {
    onClick: (e, row) => {
      //	console.log(row);

      setEditdata(row);
      setModalInfo(row);
      toggleTrueFalse();
    },
  };

  const [datanew, setDatanew] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    role_id: "",
    dob: "",
    mobile_number: "",
    
  });

  const toggleTrueFalse = () => {
    setShowModal(handleShow);
  };

  const ModalContent = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inventory List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{modalInfo.retailer_NAME}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
    const { SearchBar } = Search;

  const [formdata, setformData] = useState({
    username: "",
  });

  const { username } = formdata;
  const changeHandler = (e) => {
    setformData({ ...formdata, [e.target.name]: [e.target.value] });
    console.log(formdata);
  };

  const [formdata2, setformData2] = useState({
    uname: "",
  });

  const { uname } = formdata2;

  const onChange = (e) => {
    setformData2({ ...formdata2, [e.target.name]: [e.target.value] });
  };

  const {
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const [loading, setLoading] = useState(false);

  const submitHandleredit = async (e) => {
    console.log(formdata2);
    alert("ok");
    const retailer_NAME = uname.toString();
    console.log(uname + "name" + username);
  };

  const submitHandler = async (e) => {
    const newsearch = username.toString();

    var bodydata = { userField: newsearch};

    setColumns([
      { dataField: "username", text: "username", sort: true },
      { dataField: "first_name", text: "FirstName", sort: true },
      { dataField: "last_name", text: "LastName", sort: true },
      { dataField: "mobile_number", text: "MobileNumber", sort: true },
      { dataField: "email", text: "Email", sort: true },
      { dataField: "role_id", text: "Roleid", sort: true },
      { dataField: "gender", text: "Gender", sort: true },
      { dataField: "dob", Date: "dob", sort: true },
    
    ]);
    setLoading(false);

    const response = await fetch(
      "http://172.10.70.140:9011/userdetails",
      {
        method: "POST",
        body: JSON.stringify(bodydata),
      }
    );

    const logindata = await response.json();

    console.log(logindata.data);

    const logindataa = setData(logindata.data);
    setLoading(false);

    var doc = document.getElementById("myForm").reset();
    var res = logindata.data;
    console.log(res);
    if (res.length === 0) {
      alert("No data Found");
    }
    var hed = data.length && Object.keys(data[0]);
  };

  //updateapp

const [input, setInput] = useState("");
const [firstname,setfirstname1]=useState("");
const [lastname,setlastname1]=useState("");
const [email,setemail1]=useState("");
const [gender,setgender1]=useState("");
const [roleid,setroleid1]=useState("");
const [dob,setdob1]=useState("");
const [mobilenumber,setmobilenumber1]=useState("");

 

  const update = async () => {
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
	  if (fname === "") {
      fnamenew = editdata.first_name;
    } else {
      fnamenew = fname;
    }

    var lnamenew = "";
    if (lname === "") {
      lnamenew = editdata.last_name;
    } else {
      lnamenew = lname;
    }

    var gmailnew = "";
    if (gmail=== "") {
      gmailnew = editdata.email;
    } else {
      gmailnew = gmail;
    }

    var gendnew = "";
    if (gend === "") {
      gendnew = editdata.gender;
    } else {
      gendnew = gend;
    }

    var Dobnew = "";
    if (Dob === "") {
      Dobnew = editdata.dob;
    } else {
      Dobnew = Dob;
    }

    var rolnew = "";
    if (rol === "") {
      rolnew = editdata.role_id;
    } else {
      rolnew = rol;
    }

    var mobnew = "";
    if (mob === "") {
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
      role_id: newrolenew,
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
      }
    );

    const logindata = await response.json();

    console.log(logindata.sd);

    alert(logindata.sd + "---" + logindata.desc);

    window.location.href = "userdetails";
  };


	const style = {
	'search-label':'',
	}
  return (
    <div className="row">
      <Header />
      <SideMenu />
      {show ? (
        <div class="model-cust">
          <div class="model-box">
            <div>
              <label  class="lb"htmlfor="first_name">FirstName</label>
              <input
                type="text"
                class="form-control blur "
                id="first_name"
                name="first_name"
                onChange={(e) => {
                  setfirstname1(e.target.value);
                }}
                placeholder={editdata.first_name}
              />
            </div>

            <div>
              <label htmlfor="last_name" class="lb">LastName</label>
              <input
                 type="text"
                class="form-control blur"
                id="last_name"
                name="last_name"
                onChange={(e) => {
                  setlastname1(e.target.value);
                }}
                placeholder={editdata.last_name}
              />
            </div>

            <div>
              <label htmlfor="gender" class="lb">gender</label>
              <input
                type="text"
                class="form-control blur"
                id="gender"
                name="gender"
                onChange={(e) => {
                  setgender1(e.target.value);
                }}
                placeholder={editdata.gender}
              />
            </div>

            <div>
              <label htmlfor="role_id"   class="lb">Roleid</label>
              <input
                type="text"
                class="form-control blur"
                id="role_id"
                onChange={(e) => {
                  setroleid1(e.target.value);
                }}
                name="role_id"
                placeholder={editdata.role_id}
              />
            </div>

           

            <div>
              <label htmlfor="email" class="lb" >email</label>
              <input
                type="text"
                class="form-control blur"
                id="email"
                name="email"
                onChange={(e) => {
                  setemail1(e.target.value);
                }}
                placeholder={editdata.email}
              />
            </div>


            <div>
              <label htmlfor="mobile_number" class="lb" >MobileNumber</label>
              <input
                type="text"
                class="form-control blur"
                id="mobile_number"
                name="mobile_number"
                onChange={(e) => {
                  setmobilenumber1(e.target.value);
                }}
                placeholder={editdata.mobile_number}
              />
            </div>
     

            <div>
              <label htmlfor="dob" class="lb" >DOB</label>
              <input
                type="text"
                class="form-control blur"
                id="dob"
                name="dob"
                onChange={(e) => {
                  setdob1(e.target.value);
                }}
                placeholder={editdata.dob}
              />
            </div>



          

            <button
              onClick={update}
              type="submit"
              name="submit"
              className="btn btn-primary px-5  m-2"
            >
              Save
            </button>

            <button
              name="close"
              className="btn btn-danger  px-5 m-2"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}

      <p className="rep-name">UserDetails</p>
      <div class="form-box form_box_cust">
        {loading ? (
          <p className="loads">
            {data.length && Object.keys(data[0]) ? (
              data.length && Object.keys("")
            ) : (
              <div className="dataload">
                <div class="spinner-border text-warning" role="status">
                  <span class="sr-only"></span>
                </div>
                <p class="loadtext">Loading please wait...</p>
              </div>
            )}
          </p>
        ) : null}

        <div class="form-section">
          <form onSubmit={handleSubmit(submitHandler)} id="myForm">
            <div class="form-group">
             
              <input
                type="text"
                class="form-control"
                onChange={changeHandler}
                name="username"
                required
                value={username}
	  	placeholder="Search with username"
              />
            </div>

            <button
              type="submit"
              name="submit"
              className="btn btn-primary login-bnt"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="row">
	  
        <div className="col-lg-10 table-row table-row2">
          <ToolkitProvider
            keyField="id"
            columns={columns}
            data={data}
            search
            fileName="currontmonth"
            exportCSV={{
              fileName: "Sales_Person_wise.csv",
            }}
          >
            {(props) => (
              <react.Fragment>
                <SearchBar {...props.searchProps} />
                <MyExportCSV {...props.csvProps} />
                <BootstrapTable
                  pagination={pagination}
                  rowEvents={rowEvents}
                  {...props.baseProps}
                />
              </react.Fragment>
            )}
          </ToolkitProvider>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
