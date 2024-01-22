import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { database } from "../../firebase";
import { ref, onValue, update } from "firebase/database";

function PHSlider() {
  const [range, setRange] = useState<number[]>([0.0, 0.0]);

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === "object" && newValue.length === 2) {
      setRange(newValue);
      update(ref(database, "sliderValue/"), { phValue: newValue });
      update(ref(database, "flags/"), { flag: true });
    }
  };

  useEffect(() => {
    onValue(ref(database, "sliderValue"), (snapshot) => {
      const data = snapshot.val();
      setRange(data.phValue);
    });
  }, []);

  return (
    <div className="sliderContainer">
      <Typography className="rangeSliderName">
        PH Range: {range[0]} - {range[1]}
      </Typography>
      <Slider
        className="rangeSlider"
        value={range}
        onChange={handleSliderChange}
        min={4.0}
        max={7.0}
        step={0.1}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </div>
  );
}

export default PHSlider;
