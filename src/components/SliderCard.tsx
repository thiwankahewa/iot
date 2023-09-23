import * as React from "react";
import CardContent from "@mui/material/CardContent";
import ECSlider from "./Sliders/ECSlider";
import HumiditySlider from "./Sliders/HumiditySlider";
import PHSlider from "./Sliders/PHSlider";
import TempSlider from "./Sliders/TempSlider";
import Paper from "@mui/material/Paper";

const card = (
  <React.Fragment>
    <CardContent>
      <ECSlider />
      <PHSlider />
      <HumiditySlider />
      <TempSlider />
    </CardContent>
  </React.Fragment>
);

export default function SliderdCard() {
  return (
    <Paper
      elevation={2}
      style={{
        marginRight: "10px",
        opacity: "85%",
      }}
    >
      {card}
    </Paper>
  );
}
