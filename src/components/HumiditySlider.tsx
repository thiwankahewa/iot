import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

function HumiditySlider() {
  const [value, setValue] = useState<number>(0);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
      localStorage.setItem("selectedHumidityValue", JSON.stringify(newValue));
    }
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("selectedHumidityValue");
    if (storedValue) {
      setValue(JSON.parse(storedValue));
    }
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Typography id="range-slider" gutterBottom style={{ flex: 1 }}>
        Humidity: {value} %
      </Typography>
      <Slider
        value={value}
        onChange={handleSliderChange}
        min={0}
        max={100}
        step={5}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        style={{ flex: 1, width: "100%" }}
      />
    </div>
  );
}

export default HumiditySlider;
