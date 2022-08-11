import react,{useEffect,useState,submit} from 'react';  
import ReactDOM from 'react-dom';
import logo from './wallet.png';
import './App.css';
import Header from './Header';
import { NavLink } from 'react-router-dom';

import { Route, Link, BrowserRouter } from 'react-router-dom'
import Current_Month_Accounts_Summary from './Current_Month_Accounts_Summary';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem,Container,Accordion} from 'react-bootstrap';
import *  as FaIcons from 'react-icons/fa';
import *  as AiIcons from 'react-icons/ai';
import *  as IoIcons from 'react-icons/io';
import *  as RiIcons from 'react-icons/ri';
import *  as MdIcons from 'react-icons/md';
import POSHisotry from './POSHisotry';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import 	styled from 'styled-components';



function SideMenu() {



        var  role_id = sessionStorage.getItem('role_id');
        const [showadmin,setShowadmin] = useState(false);
        if(role_id ==2){
            setShowadmin(true)
        }

	const [show,setShow] =useState(false);

  return (
  		 	<div>
  		 	<div className="mainside" onClick={()=>setShow(!show)}>
  		 	<div class="sidemenu2"></div>
			<div class="sidemenu2"></div>
			<div class="sidemenu2"></div>
		  	</div>
  		 	{
  		 		show?

  		 		<div class="sidemenu">
  		 		<p className="close" onClick={()=>setShow(false)}>
  		 		<div class="sidemenu2"></div>
				<div class="sidemenu2"></div>
				<div class="sidemenu2"></div>
  		 		</p>

  		 		<CDBSidebar textColor="#fff" backgroundColor="#333">
  		 			<CDBSidebarHeader  class="menubar">
        	
       
        	</CDBSidebarHeader>
        	
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
           
  		            <Accordion defaultActiveKey="0">
  		            	 <Accordion.Item eventKey="1">
					  
					    <Accordion.Header>	
  		 					<MdIcons.MdOutlineManageAccounts className="icon-cus"/><span className="navname">Reports </span> <p className='icon'> <AiIcons.AiFillDownCircle/></p>
  		 				</Accordion.Header>

				            <Accordion.Body>
                                                <NavLink exact to="/Sales_Report">Sales Report</NavLink>
                                            </Accordion.Body>

                                              <Accordion.Body>
                                                <NavDropdown.Item href="Summary">Summary Report</NavDropdown.Item>
                                            </Accordion.Body>



					    <Accordion.Body>
                                                <NavDropdown.Item href="Inventory">Inventory</NavDropdown.Item>
                                            </Accordion.Body>

				          
					    </Accordion.Item>

					      <Accordion.Item eventKey="9">
					    <Accordion.Header><MdIcons.MdInventory className="icon-cus"/><span className="navname">MOQ Settings </span> <p className='icon'> <AiIcons.AiFillDownCircle/></p></Accordion.Header>
					    

					
					    <Accordion.Body>
					     	<NavLink exact to="/Single_Uploading_MOQ">Single MOQ setting for Dealer</NavLink>
					    </Accordion.Body>

					     <Accordion.Body>
					     	<NavLink exact to="/Bulk_Uploading_MOQ">Bulk Uploading of Dealer having same MOQ</NavLink>
					    </Accordion.Body>
					 
					  </Accordion.Item>





  
	
				{showadmin?	
				                <Accordion.Item eventKey="3" >
	                                            <Accordion.Header><MdIcons.MdInventory className="icon-cus"/><span className="navname">User Management </span> <p className='icon'> <AiIcons.AiFillDownCircle/></p></Accordion.Header>



	                                            <Accordion.Body>
	                                                <NavLink exact to="/UserProfile">UserProfile</NavLink>
	                                            </Accordion.Body>

	                                             <Accordion.Body>
	                                                <NavLink exact to="/UserCreation">UserCreation</NavLink>
	                                            </Accordion.Body>
                               
			<Accordion.Body>		                                                        <NavLink exact to="/UserCheck">UserCheck</NavLink>                                                    </Accordion.Body>



	                                          </Accordion.Item>:null}
    











  			

					        <Accordion.Item eventKey="2">
					    <Accordion.Header>
					    <MdIcons.MdHomeFilled className="icon-cus"/><span className="navname">Mapping Salesman to Dealer</span><p className='icon'><AiIcons.AiFillDownCircle/></p></Accordion.Header>
					    
					    <Accordion.Body>
					     	<NavDropdown.Item href="Mapping_Salesman_to_Dealer">Change Dealer to  Salesman</NavDropdown.Item>
					    </Accordion.Body>
					    <Accordion.Body>
					     	<NavDropdown.Item href="Bulk_Mapping_Salesman_to_Dealer">Bulk Uploading Dealer under a Salesman</NavDropdown.Item>  
					    </Accordion.Body>
					
					  </Accordion.Item>

				</Accordion>

          </CDBSidebarMenu>
        </CDBSidebarContent>
  
      </CDBSidebar>
	         </div>:null
	     }
	        <div className="icon-bar">
	        <p className="close close2" onClick={()=>setShow(true)}>
  		 		<div class="sidemenu2"></div>
				<div class="sidemenu2"></div>
				<div class="sidemenu2"></div>
  		 		</p>
  		 		<div className="icon-list">
  		 			<MdIcons.MdOutlineManageAccounts className="icon-cus"/>
  		 		</div>

  		 		<div className="icon-list">
  		 		<MdIcons.MdInventory className="icon-cus"/>
  		 		</div>

  		 		<div className="icon-list">
  		 			<MdIcons.MdHomeFilled className="icon-cus"/>
  		 		</div>

  		 		<div className="icon-list">
  		 			
					<RiIcons.RiMindMap className="icon-cus"/>
  		 		</div>



				<div className="icon-list">
				<AiIcons.AiOutlineNotification className="icon-cus"/>
					
				</div>

				<div className="icon-list">
				<RiIcons.RiAdminLine className="icon-cus"/>
				</div>
  			 </div>  
  		 </div>  		 
    )
}
export default SideMenu;
