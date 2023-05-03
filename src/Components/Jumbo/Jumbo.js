import { Container } from "react-bootstrap";
import "./jumbo.css";
import ProBar from "../ProgressBar/ProBar";

function Jumbo(props) {
  // console.log(props.tuser);
  return (
    <div class="container text-center">
      <div className="row" id="jumbo">
        <div className="col-xs-12 col-md-4 col-lg-4">
          <span>
            <h1 style={{ padding: "5vh" }}>ProId: #{props.pid}</h1>
          </span>
        </div>
        <div className="col-xs-12 col-md-4 col-lg-4">
          <span style={{ overflow: "scroll" }}>
            <b>
              {props.pname}
              <br></br>
            </b>
            <p style={{ textAlign: "justify", margin: "5px" }}>{props.pdes}</p>
          </span>
        </div>
        <div className="col-xs-12 col-md-4 col-lg-4">
          <span style={{ display: "flex", justifyContent: "space-around" }}>
            <ProBar pusers={props.nuser} total={props.tuser}></ProBar>
            <p
              style={{
                textAlign: "center",
                fontSize: "1.5rem",
                padding: "5.5vh",
              }}
            >
              <b> Number of users</b>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Jumbo;
