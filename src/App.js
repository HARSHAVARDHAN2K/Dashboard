import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { ProSidebarProvider } from 'react-pro-sidebar';
import SideBar from './Components/Sidebar/SideBar';
import Api from './Components/Api';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [dataRecord,setDataRecord] = useState([])


  
     axios.get('https://api.jsonbin.io/v3/qs/644b71f6b89b1e2299931f97').
     then(res => {
      console.log(res.data.record)
      setDataRecord(res.data.record)
     }).catch(e => {
      console.log(e)
     })
  

  return (
     <div className='container-fluid' id='app'>
      console.log({JSON.stringify(dataRecord)})
        
      
         
          <ProSidebarProvider>
            <SideBar data = {dataRecord} h={"hello"}></SideBar>
          </ProSidebarProvider> 
           {/* <Api></Api> */}
         
     </div>
  );
}

export default App;
