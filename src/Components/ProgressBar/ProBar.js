import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProBar(props) {
  const value = props.pusers;
  return (
    <div
      style={{
        width: 140,
        maxHeight: "inherit",
      }}
    >
      <CircularProgressbar
        value={value}
        maxValue={props.total}
        text={`${value}`}
      />
    </div>
  );
}

export default ProBar;
