import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Progress({ percentage }) {
  return (
    <div
      style={{  position: "relative" }}
      className="w-20 lg:w-20"
    >
      <CircularProgressbar
        styles={buildStyles({
          textColor: "#000", // Green color for the percentage text
          pathColor: "#23D5AA", // Light green color for the progress bar
          trailColor: "#D3F7EE", // Replace with your desired trail color
        })}
        value={percentage}
        text={`${percentage}`}
      />
      <span
        style={{
          position: "absolute",
          top: "40%",
          left: "65%",
          transform: "translate(-50%, -50%)",
          fontSize: "0.5rem",
          fontWeight: "bold",
        }}
      >
        %
      </span>
    </div>
  );
}

export default Progress;
