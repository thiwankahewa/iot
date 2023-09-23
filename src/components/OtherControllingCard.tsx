import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Solenoid1 from "./Switches/Solenoid1";
import FanSwitch from "./Switches/fanSwitch";
import StirringSystem from "./Switches/StirringSystem";
import IconButton from "@mui/material/IconButton";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography style={{ fontWeight: "bold" }}>
        <IconButton color="primary">
          <SportsEsportsIcon />
        </IconButton>
        Other Controlling
      </Typography>
      <br />
      <div style={{ alignItems: "center" }}>
        <FanSwitch />
        <StirringSystem />
        <Solenoid1 />
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
