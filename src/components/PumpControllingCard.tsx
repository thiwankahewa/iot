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
        <Typography style={{ fontWeight: "bold", fontSize: "16px" }}>
          Pump Controlling
        </Typography>
      </div>
      <br />
      <div style={{}}>
        <ToggleSwitch title="Water Pump" path="waterPump" />
        <ToggleSwitch title="Air Pump" path="AirPump" />
        <ToggleSwitch title="Nutrient Pump" path="NutrientPump" />
        <ToggleSwitch title="Acid Pump" path="AcidPump" />
        <ToggleSwitch title="Base Pump" path="BasePump" />
      </div>
    </CardContent>
  </React.Fragment>
);

export default function PumpControlingCard() {
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
