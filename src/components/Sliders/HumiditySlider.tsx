import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { database } from "../../firebase";
import { ref, onValue, update } from "firebase/database";

function HumiditySlider() {
  const [value, setValue] = useState<number>(0);

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
      update(ref(database, "sliderValue/"), { humidityValue: newValue });
    }
  };

  useEffect(() => {
    onValue(ref(database, "sliderValue"), (snapshot) => {
      const data = snapshot.val();
      setValue(data.humidityValue);
    });
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
        style={{ flex: 1, width: "100%", marginBottom: "7px" }}
      />
    </div>
  );
}

export default HumiditySlider;
