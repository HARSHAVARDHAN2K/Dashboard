import React from "react";
import { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NavScript from "../Navbar/NavScript";
import Jumbo from "../Jumbo/Jumbo";
import "./sidebar.css";
import { Container } from "react-bootstrap";
import MiddleBar from "../Middle/MiddleBar.js";
import FinalBars from "../Final/FinalBars";
import axios from "axios";

function SideBar(props) {
  const [dataBase, setDataBase] = useState(props.data);
  const [product, setProduct] = useState(dataBase[0]);
  const [client, setClient] = useState(dataBase[0].client);
  const [proRevenue, setProRevenue] = useState(dataBase[0].revenue);
  const [nuser, setNuser] = useState(props.nuser);

  const fetchData = async (props) => {
    try {
    } catch (error) {}
  };

  function SetProduct(props) {
    setProduct(props);
    setClient(props.client);
    setProRevenue(props.revenue);
    // console.log();
    fetchData(props.product_id);
  }

  function Display(props) {
    const productLists = props.products;
    const productItems = productLists.map((pro, i) => (
      <MenuItem
        key={i}
        style={{ textAlign: "left" }}
        onClick={() => SetProduct(pro)}
      >
        {""}
        {i + 1} {pro.product_name}{" "}
      </MenuItem>
    ));
    return <Container>{productItems}</Container>;
  }

  const { collapseSidebar } = useProSidebar();

  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar style={{ height: "100vh", position: "initial" }}>
        <Menu>
          <MenuItem
            icon={<DashboardIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h4>Blue Marble</h4>
          </MenuItem>

          <Display products={dataBase}></Display>
        </Menu>
      </Sidebar>

      <div className="container">
        <NavScript pname={product.product_name}></NavScript>
        <div
          className="dashbody"
          style={{
            marginTop: "6vh",
            overflow: "scroll",
            height: "94vh",
          }}
        >
          <Jumbo
            pname={product.product_name}
            pid={product.product_id}
            pdes={product.product_desc}
            nuser={product.no_of_users}
            tuser={nuser.SumOfUsers}
          ></Jumbo>
          <MiddleBar Clients={client}></MiddleBar>
          <FinalBars></FinalBars>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
