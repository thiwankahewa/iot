import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { database } from "../../firebase";
import { ref, onValue, update } from "firebase/database";

function HumiditySlider() {
  const [value, setValue] = useState<number[]>([0, 0]);

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === "object" && newValue.length === 2) {
      setValue(newValue);
      update(ref(database, "sliderValue/"), { humidityValue: newValue });
      update(ref(database, "flags/"), { flag: true });
    }
  };

  useEffect(() => {
    onValue(ref(database, "sliderValue"), (snapshot) => {
      const data = snapshot.val();
      setValue(data.humidityValue);
    });
  }, []);

  return (
    <div className="sliderContainer">
      <Typography className="rangeSliderName" gutterBottom>
        Humidity Range: {value[0]}% - {value[1]}%
      </Typography>
      <Slider
        className="rangeSlider"
        value={value}
        onChange={handleSliderChange}
        min={0}
        max={100}
        step={5}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default HumiditySlider;
