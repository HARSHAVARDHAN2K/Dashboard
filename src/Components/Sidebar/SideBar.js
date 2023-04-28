import React from 'react'
import { useState } from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NavScript from '../Navbar/NavScript';
import Jumbo from '../Jumbo/Jumbo';
import './sidebar.css'
import s2 from '../images/s2.jpg'
import GraphPie from '../Graphs/GraphPie';
import GraphLinear from '../Graphs/GraphLinear';
import BarChart from '../Graphs/BarChart';
import axios from 'axios';
 
function SideBar(props) {
  console.log(props.data)
  console.log(props.h)
  const [dataBase,setDataBase] = useState(props.data)
  const [product,setProduct] = useState(dataBase[0])
  const [client,setClient] = useState(dataBase[0].client)
  const [proRevenue,setProRevenue] = useState(dataBase[0].revenue)
 
   
  
   

  const { collapseSidebar } = useProSidebar();

 
  

  function SetProduct(props){
    setProduct(props)
    setClient(props.client)
    setProRevenue(props.revenue)
    console.log(proRevenue)
    
  }

  function  GetProduct(props) {  
    const productLists = props.products; 
    const productItems = productLists.map((pro,i) =>  
      <li key={i} style={{listStyle: 'none', width: '90%', textAlign: 'center' }}><button onClick={() => SetProduct(pro)}> {pro.product_name} </button></li>  
    );  
    return (
         <div style={{height: '30vh'}}>  
         <ul style={{overflow: 'scroll'}}>{productItems}</ul>  
      </div>  
    );  
  }  

  function  GetClient(props) {  
    const ClientUsers = props.clinteUser
    const  Clients =   client.map((cliente,i) =>  
      <li key={i} style={{listStyle: 'none', width: '90%' }}> {cliente.client_name} </li>  
    );  
    return (
         <div style={{height: '30vh'}}>  
         <ul style={{overflow: 'scroll'}}>{Clients}</ul>  
      </div>  
    );  
  }  
  
  return (
    <div id="app" data-spy="scroll" style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar style={{ height: "100vh", position: 'initial' }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h4>Blue Marble</h4>
          </MenuItem>
          <h1>products</h1>         
           <GetProduct products={dataBase}></GetProduct>
        </Menu>
      </Sidebar> 
     <div className='container'>
        <NavScript></NavScript>
        <div id='product'> 
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-5">
              <Jumbo pname={product.product_name} pdesc={product.product_desc} puser={product.no_of_users}></Jumbo>
            </div>
          <div className="col-md-12 col-lg-4">
              <GraphPie></GraphPie> 
          </div>
          <div className="col-md-12 col-lg-3">
            <GraphLinear></GraphLinear>
          </div>
        </div>
        </div>
       
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4" style={{overflow: 'scroll', height: '45vh'}}>
              <h1>Clients</h1>
               {/* <GetClient ClientUsers={client}/> */}
            </div>
          <div className="col-md-12 col-lg-8">
               <BarChart></BarChart>
          </div>
          
        </div>
        </div>
      </div>
      
 
    </div>


    
    </div>
  );
}
export default SideBar