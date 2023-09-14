import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

function TempSlider() {
  // State to store the selected range
  const [range, setRange] = useState<number[]>([0.0, 0.0]);

  // Function to handle the slider value change
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "object" && newValue.length === 2) {
      setRange(newValue);
      // Store the selected range in localStorage
      localStorage.setItem("selectedTempRange", JSON.stringify(newValue));
    }
  };

  // Load the last selected range from localStorage on component mount
  useEffect(() => {
    const storedRange = localStorage.getItem("selectedTempRange");
    if (storedRange) {
      setRange(JSON.parse(storedRange));
    }
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Typography id="range-slider" gutterBottom style={{ flex: 1 }}>
        Temperature Range: {range[0]} - {range[1]} °C
      </Typography>
      <Slider
        value={range}
        onChange={handleSliderChange}
        min={15}
        max={30}
        step={1}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        style={{ flex: 1, width: "100%" }}
      />
    </div>
  );
}

export default TempSlider;
