import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { database } from "../../firebase";
import { ref, onValue, update } from "firebase/database";

function TempSlider() {
  const [range, setRange] = useState<number[]>([0.0, 0.0]);

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === "object" && newValue.length === 2) {
      setRange(newValue);
      update(ref(database, "sliderValue/"), { tempValue: newValue });
      update(ref(database, "flags/"), { flag: true });
    }
  };

  useEffect(() => {
    onValue(ref(database, "sliderValue"), (snapshot) => {
      const data = snapshot.val();
      setRange(data.tempValue);
    });
  }, []);

  return (
    <div className="sliderContainer">
      <Typography className="rangeSliderName" gutterBottom>
        Room Temp. Range: {range[0]} - {range[1]} °C
      </Typography>
      <Slider
        className="rangeSlider"
        value={range}
        onChange={handleSliderChange}
        min={15}
        max={30}
        step={1}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </div>
  );
}

export default TempSlider;
