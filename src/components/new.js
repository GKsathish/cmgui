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





const UserProfile = () => {
    const [data,setData]=useState([]);
  
    const [formdata, setformData] = useState({
      username: "",
    });
  
   
    useEffect(() => {
      loaddata();
     
    }, []);
    
    const loaddata= async()=>{
      const regbodydata = {
        username: formdata.username.toString()
  
      }
     
      const senddatatoregapi = await fetch("http://172.10.70.140:9011/userdetails", {
        method: "POST",
        body: JSON.stringify({username:"Srinivas"}),
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
    <div className="row">
      <Header />
      <SideMenu />

         
 <center>
  
  <div className="row">
    <div className="col-lg-6">
    <label>FirstName</label>
    </div>
     <div className="col-lg-6">
      <input type="text" value={data.first_name} disabled/>
     </div>
  </div>
  
  <div className="row">
    <div className="col-lg-6">
    <label>FirstName</label>
    </div>
     <div className="col-lg-6">
      <input type="text" value={data.first_name} disabled/>
     </div>
  </div>
  
  <div className="row">
    <div className="col-lg-6">
    <label>LastName</label>
    </div>
     <div className="col-lg-6">
      <input type="text" value={data.last_name} disabled/>
     </div>
  </div>
  
  <div className="row">
    <div className="col-lg-6">
    <label>Gender</label>
    </div>
     <div className="col-lg-6">
      <input type="text" value={data.gender} disabled/>
     </div>
  </div>
  
  
  
  <div className="row">
    <div className="col-lg-6">
    <label>Email</label>
    </div>
     <div className="col-lg-6">
      <input type="text" value={data.email} disabled/>
     </div>
  </div>
  
  
  
  <div className="row">
    <div className="col-lg-6">
    <label>RoleId</label>
    </div>
     <div className="col-lg-6">
      <input type="text" value={data.role_id} disabled/>
     </div>
  </div>
  
  
  <div className="row">
    <div className="col-lg-6">
    <label>DATE</label>
    </div>
     <div className="col-lg-6">
      <input type="date" value={data.dob} disabled/>
     </div>
  </div>
  
  
  <div className="row" >
    <div className="col-lg-12">
    <label>Mobile Number</label>
    </div>
     <div className="col-lg-6">
      <input type="text" value={data.mobile_number} disabled/>
     </div>
  </div>
  
  
  <div className="row">
    <div className="col-lg-6">
    <label>FirstName</label>
    </div>
     <div className="col-lg-6">
      <input type="text" value={data.first_name} disabled/>
     </div>
  </div>
  
  
  
  <div className="row pt-3">
    <div className="col-lg-6">
    <button
                        type="submit"
                        name="submit"
                        className="btn btn-primary cust-bnt"
                        
                      >
                        UserEdit
                      </button>
                    
    </div>
     
  </div>
  
                    
  </center>
      </div>
     
    </>
  );
}
export default UserProfile;