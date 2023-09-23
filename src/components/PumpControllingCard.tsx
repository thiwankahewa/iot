import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import WaterPump from "./Switches/WaterPump";
import AirPump from "./Switches/AirPump";
import AcidPump from "./Switches/AcidPump";
import BasePump from "./Switches/BasePump";
import NutrientPump from "./Switches/NutrientPump";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import IconButton from "@mui/material/IconButton";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography style={{ fontWeight: "bold", fontSize: "16px" }}>
        <IconButton color="primary">
          <WaterDropIcon />
        </IconButton>
        Pump Controlling
      </Typography>
      <br />
      <div style={{ alignItems: "center" }}>
        <WaterPump />
        <AirPump />
        <NutrientPump />
        <AcidPump />
        <BasePump />
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
