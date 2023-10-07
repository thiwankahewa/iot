import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { database } from "../../firebase";
import { ref, onValue, update } from "firebase/database";

function ECSlider() {
  const [range, setRange] = useState<number[]>([0.0, 0.0]);

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === "object" && newValue.length === 2) {
      setRange(newValue);
      update(ref(database, "sliderValue/"), { ecValue: newValue });
    }
  };

  useEffect(() => {
    onValue(ref(database, "sliderValue"), (snapshot) => {
      const data = snapshot.val();
      setRange(data.ecValue);
    });
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Typography id="range-slider" gutterBottom style={{ flex: 1 }}>
        EC Range: {range[0]} - {range[1]}
      </Typography>
      <Slider
        value={range}
        onChange={handleSliderChange}
        min={0.0}
        max={5.0}
        step={0.1}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        style={{ flex: 1, width: "100%", marginBottom: "7px" }}
      />
    </div>
  );
}

export default ECSlider;
