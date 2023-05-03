import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import SideBar from "./Components/Sidebar/SideBar";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [numUser, setNumUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://api.jsonbin.io/v3/qs/64511f6e8e4aa6225e94d815"
        );
        //http://localhost:8080/products/no-of-users
        const response1 = await axios.get(
          "https://api.jsonbin.io/v3/qs/6451e019b89b1e229995d67d"
        );
        setNumUser(response1.data.record);
        setData(response.data.record);
        // console.log(response1.data.record);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* {JSON.stringify(data)} */}
      {data && (
        <ProSidebarProvider>
          <SideBar data={data} nuser={numUser}></SideBar>
        </ProSidebarProvider>
      )}
    </div>
  );
}

export default App;
