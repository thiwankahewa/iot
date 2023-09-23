import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import GrowLight1 from "./Switches/GrowLight1";
import GrowLight2 from "./Switches/GrowLight2";
import GrowLight3 from "./Switches/GrowLight3";
import IconButton from "@mui/material/IconButton";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography style={{ fontWeight: "bold" }}>
        <IconButton color="primary">
          <LightbulbIcon />
        </IconButton>
        Light Controlling
      </Typography>
      <br />
      <div style={{ alignItems: "center" }}>
        <GrowLight1 />
        <GrowLight2 />
        <GrowLight3 />
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
