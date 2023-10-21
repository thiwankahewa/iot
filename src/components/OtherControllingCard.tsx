import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ToggleSwitch from "./ToogleSwich";

const card = (
  <React.Fragment>
    <CardContent>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography style={{ fontWeight: "bold" }}>
          Other Controlling
        </Typography>
      </div>
      <br />
      <div>
        <ToggleSwitch title="FanSwitch" path="fan" />
        <ToggleSwitch title="Stirring System" path="StirringSystem" />
        <ToggleSwitch title="Solenoid1" path="Solenoid1" />
      </div>
    </CardContent>
  </React.Fragment>
);

export default function OtherControlingCard() {
  return (
    <Paper
      elevation={2}
      style={{
        marginRight: "10px",
        width: "33%",
        opacity: "85%",
      }}
    >
      {card}
    </Paper>
  );
}
