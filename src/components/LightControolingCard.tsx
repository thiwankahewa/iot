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
          Light Controlling
        </Typography>
      </div>
      <br />
      <div style={{ alignItems: "center" }}>
        <ToggleSwitch title="Grow Light 1" path="growLight1" />
        <ToggleSwitch title="Grow Light 2" path="growLight2" />
        <ToggleSwitch title="Grow Light 3" path="growLight3" />
      </div>
    </CardContent>
  </React.Fragment>
);

export default function LightControlingCard() {
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
