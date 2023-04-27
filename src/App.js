import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { ProSidebarProvider } from 'react-pro-sidebar';
import SideBar from './Components/Sidebar/SideBar';
import Api from './Components/Api';

function App() {
  return (
     <div className='container-fluid' id='app'>
         
          <ProSidebarProvider>
            <SideBar></SideBar>
          </ProSidebarProvider>
          {/* <Api></Api> */}
         
     </div>
  );
}

export default App;
