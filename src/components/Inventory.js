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

function Inventory() {
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
    retailer_NAME: "",
    retailer_NUMBER: "",
    imei: "",
    serial_NUMBER: "",
    sim_NUMBER: "",
    device_TYPE: "",
    pos_MODEL: "",
    pos_ID: "",
    printer_IEMI: "",
    status: "",
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
    search: "",
  });

  const { search } = formdata;
  const changeHandler = (e) => {
    setformData({ ...formdata, [e.target.name]: [e.target.value] });
    console.log(formdata);
  };

  const [formdata2, setformData2] = useState({
    rname: "",
  });

  const { rname } = formdata2;

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
    const retailer_NAME = rname.toString();
    console.log(rname + "name" + retailer_NAME);
  };

  const submitHandler = async (e) => {
    const newsearch = search.toString();

    var bodydata = { searchField: newsearch };

    setColumns([
      { dataField: "retailer_NAME", text: "RetailerName", sort: true },
      { dataField: "imei", text: "IMEI", sort: true },
      { dataField: "retailer_NUMBER", text: "RetailerNumber", sort: true },
      { dataField: "serial_NUMBER", text: "SerialNumber", sort: true },
      { dataField: "sim_NUMBER", text: "SimNumber", sort: true },
      { dataField: "device_TYPE", text: "DeviceType", sort: true },
      { dataField: "pos_MODEL", text: "Pos_MODEL", sort: true },
      { dataField: "printer_IEMI", text: "Printer_IEMI", sort: true },
      { dataField: "pos_ID", text: "POS_ID", sort: true },
      { dataField: "status", text: "Status", sort: true },
      {dataField: "Edit", text: "Edit", sort: true }
    ]);
    setLoading(false);

    const response = await fetch(
      "http://172.10.70.71:3029/generate/getPOSInfo",
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

  const {
    retailer_NUMBER,
    imei,
    serial_NUMBER,
    sim_NUMBER,
    device_TYPE,
    pos_MODEL,
    pos_ID,
    printer_IEMI,
    status,
  } = datanew;

  const [input, setInput] = useState("");

  const [retailername, setretailerName] = useState("");
  const [retailernumber, setretailerNumber] = useState("");
  const [iimei, setImei] = useState("");
  const [posid, setposid] = useState("");
  const [posmodel, setposmodel] = useState("");
  const [printeriemi, setprinteriemi] = useState("");

  const [serialnumber, setserialNumber] = useState("");
  const [simnumber, setsimNumber] = useState("");

  const [devicetype, setDevicetype] = useState("");
  const [status1, setstatus1] = useState("");

  const update = async () => {
    let edititems = {
      retailernumber,
      iimei,
      posmodel,
      serialnumber,
      simnumber,
      devicetype,
      printeriemi,
      status1,
    };

    var rnum = edititems.retailernumber;
    var imei = edititems.iimei;
    var snum = edititems.serialnumber;
    var simnum = edititems.simnumber;
    var device = edititems.devicetype;
    var status2 = edititems.status1;
    var piemi = edititems.printeriemi;
    var pmodel = edititems.posmodel;

    var rnamenew = "";
    if (rname == "") {
      rnamenew = editdata.retailer_NAME;
    } else {
      rnamenew = rname;
    }

    var status2new = "";
    if (status2 == "") {
      status2new = editdata.status2;
    } else {
      status2new = status2;
    }

    var rnumnew = "";
    if (rnum == "") {
      rnumnew = editdata.retailer_NUMBER;
    } else {
      rnumnew = rnum;
    }

    var snumnew = "";
    if (snum == "") {
      snumnew = editdata.serial_NUMBER;
    } else {
      snumnew = snum;
    }

    var simnumnew = "";
    if (simnum == "") {
      simnumnew = editdata.sim_NUMBER;
    } else {
      simnumnew = simnum;
    }

    var imeinew = "";
    if (iimei == "") {
      imeinew = editdata.imei;
    } else {
      imeinew = iimei;
    }

    var devicenew = "";
    if (device == "") {
      devicenew = editdata.device_TYPE;
    } else {
      devicenew = device;
    }

    var posmodelnew = "";

    if (pmodel == "" || pmodel == undefined) {
      posmodelnew = editdata.pos_MODEL;
    } else {
      posmodelnew = pmodel;
    }

    var pieminew = "";
    if (piemi == "") {
      pieminew = editdata.printer_IEMI;
    } else {
      pieminew = piemi;
    }

    if (posmodelnew == "" || posmodelnew == undefined) {
      posmodelnew = "null";
    }
    if (devicenew == "" || devicenew == undefined) {
      devicenew = "null";
    }

    if (imeinew == "" || imeinew == undefined) {
      imeinew = "null";
    }

    if (pieminew == "" || pieminew == undefined) {
      pieminew = "null";
    }

    if (simnumnew == "" || simnumnew == undefined) {
      simnumnew = "null";
    }

    if (snumnew == "" || snumnew == undefined) {
      snumnew = "null";
    }

    if (rnumnew == "" || rnumnew == undefined) {
      rnumnew = "null";
    }

    if (status2new == "" || status2new == undefined) {
      status2new = "null";
    }

    var newserialnumber = snumnew.toString();

    var newsimnumber = simnumnew.toString();
    var newstatus1 = status2new.toString();
    var newretailernumber = rnumnew.toString();
    var newdevicetype = devicenew.toString();
    var newiimei = imeinew.toString();
    var newposmodel = posmodelnew.toString();
    var newprinteriemi = pieminew.toString();

    console.log(newdevicetype);
    console.log(newserialnumber);
    console.log(newsimnumber);
    console.log(newstatus1);
    console.log(newiimei);
    console.log(newprinteriemi);
    console.log(newposmodel);
    console.log(newretailernumber);

    var editbodydata = {
      serialNo: newserialnumber,
      simNo: newsimnumber,
      status: newstatus1,
      retailerNo: newretailernumber,
      deviceType: newdevicetype,
      imei: newiimei,
      pos_model: newposmodel,
      printer_iemi: newprinteriemi,
    };

    console.log(editbodydata);

    const response = await fetch(
      "http://172.10.70.71:3029/generate/editupdate",

      {
        method: "POST",
        body: JSON.stringify(editbodydata),
      }
    );

    const logindata = await response.json();

    console.log(logindata.sd);

    alert(logindata.sd + "---" + logindata.desc);

    window.location.href = "Inventory";
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
              <label  class="lb"htmlfor="retailer_NUMBER">Retailer Number</label>
              <input
                type="text"
                class="form-control blur "
                id="retailer_NUMBER"
                name="retailer_NUMBER"
                onChange={(e) => {
                  setretailerNumber(e.target.value);
                }}
                placeholder={editdata.retailer_NUMBER}
              />
            </div>

            <div>
              <label htmlfor="imei" class="lb">IMEI</label>
              <input
                 type="text"
                class="form-control blur"
                id="imei"
                name="imei"
                onChange={(e) => {
                  setImei(e.target.value);
                }}
                placeholder={editdata.imei}
              />
            </div>

            <div>
              <label htmlfor="serial_NUMBER" class="lb">Serial Number</label>
              <input
                type="text"
                class="form-control blur"
                id="serial_NUMBER"
                name="serial_NUMBER"
                onChange={(e) => {
                  setserialNumber(e.target.value);
                }}
                placeholder={editdata.serial_NUMBER}
              />
            </div>

            <div>
              <label htmlfor="sim_NUMBER"   class="lb">Sim Number</label>
              <input
                type="text"
                class="form-control blur"
                id="sim_NUMBER"
                onChange={(e) => {
                  setsimNumber(e.target.value);
                }}
                name="sim_NUMBER"
                placeholder={editdata.sim_NUMBER}
              />
            </div>

            <div>
              <label htmlfor="device_TYPE"class="lb" >Device Type </label>
	        <select
                        class="form-control blur"
                id="device_TYPE"
                onChange={(e) => {
                  setDevicetype(e.target.value);
                }}
                name="device_TYPE">
                        <option selected>{editdata.device_TYPE}</option>
                       	<option value="Sunmi">Sunmi</option>
	                <option value="Mobilot">Mobilot</option>
           	        <option value="Telpo">Telpo</option>
                      </select>
            </div>

            <div>
              <label htmlfor="status" class="lb" >Status</label>
              <input
                type="text"
                class="form-control blur"
                id="status"
                name="status"
                onChange={(e) => {
                  setstatus1(e.target.value);
                }}
                placeholder={editdata.status}
              />
            </div>

            <div>
              <label htmlfor="pos_MODEL" class="lb" >Pos Model</label>
              <select
                        class="form-control blur"
                id="pos_MODEL"
                name="pos_MODEL"
                onChange={(e) => {
                  setposmodel(e.target.value);
                }}
                placeholder={editdata.pos_MODEL}
                name="device_TYPE">
                        <option selected>{editdata.pos_MODEL}</option>
                        <option value="v2">v2</option>
                        <option value="V2 Pro">V2 Pro</option>
                        <option value="Mp3+">Mp3</option>
	      		<option value="mp4+">mp4</option>
                      </select>

            </div>

            <div>
              <label htmlfor="printer_IEMI" class="lb" >Printer Iemi</label>
              <input
                type="text"
                class="form-control blur"
                id="printer_IEMI"
                name="printer_IEMI"
                onChange={(e) => {
                  setprinteriemi(e.target.value);
                }}
                placeholder={editdata.printer_IEMI}
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

      <p className="rep-name">Inventory Report</p>
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
                name="search"
                required
                value={search}
	  	placeholder="Search with Mobile Number"
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
export default Inventory;
