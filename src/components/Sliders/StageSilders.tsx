import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import { database } from "../../firebase";
import { ref, onValue, update } from "firebase/database";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

interface Stage {
  ec: number;
  ph: number;
}

function StageSilders() {
  const [plantList, setPlantList] = useState<string[]>([]);
  const [stageNames, setStageNames] = useState<string[]>([]);
  const [selectedPlant, setSelectedPlant] = useState<string>("");
  const [selectedStage, setSelectedStage] = useState<string>("");
  const [ph, setPh] = useState<number[]>([0.0, 0.0]);
  const [ec, setEc] = useState<number[]>([0.0, 0.0]);

  const handleChange = (event: SelectChangeEvent) => {
    update(ref(database, "plants/"), { selectedPlant: event.target.value });
  };

  const handleChange2 = (event: SelectChangeEvent) => {
    update(ref(database, "plants/"), { selectedStage: event.target.value });
  };

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === "object" && newValue.length === 2) {
      update(ref(database, `plants/types/${selectedPlant}/${selectedStage}/`), {
        ec: newValue,
      });
      update(ref(database, "sliderValue/"), {
        ecValue: newValue,
      });
    }
  };

  const handleSliderChange2 = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === "object" && newValue.length === 2) {
      update(ref(database, `plants/types/${selectedPlant}/${selectedStage}/`), {
        ph: newValue,
      });
      update(ref(database, "sliderValue/"), {
        phValue: newValue,
      });
    }
  };

  useEffect(() => {
    onValue(ref(database, "plants"), (snapshot) => {
      const data = snapshot.val();
      setSelectedPlant(data.selectedPlant);
      setSelectedStage(data.selectedStage);
      setPlantList(Object.keys(data.types));
      const plantIndex = Object.keys(data.types).indexOf(data.selectedPlant);
      let stages = Object.values(data.types)[plantIndex] as Stage[];
      const stageIndex = Object.keys(stages).indexOf(data.selectedStage);
      setStageNames(Object.keys(stages));
      const ecValue = Object.values(stages)[stageIndex].ec;
      const phValue = Object.values(stages)[stageIndex].ph;
      if (Array.isArray(ecValue) && Array.isArray(phValue)) {
        setEc(ecValue);
        setPh(phValue);
        update(ref(database, "sliderValue/"), {
          phValue: phValue,
        });
        update(ref(database, "sliderValue/"), {
          ecValue: ecValue,
        });
      } else {
        console.error("EC or PH value is not an array.");
      }

      //console.log("plantIndex", Object.values(phValue));
      //console.log("stageIndex", Object.values(stages)[stageIndex]);
    });
  }, []);

  return (
    <div
      style={{
        marginLeft: "5%",
        marginRight: "5%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <InputLabel>Plant Type</InputLabel>
          <Select value={selectedPlant} onChange={handleChange} size="small">
            {plantList.map((plant) => (
              <MenuItem key={plant} value={plant}>
                {plant}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <InputLabel>Stages</InputLabel>
          <Select value={selectedStage} onChange={handleChange2} size="small">
            {stageNames.map((stage) => (
              <MenuItem key={stage} value={stage}>
                {stage}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <div style={{}}>
        <Typography>
          EC: {ec[0]} - {ec[1]} ppm
        </Typography>
        <Slider
          value={ec}
          onChange={handleSliderChange}
          min={0}
          max={10}
          step={0.1}
          valueLabelDisplay="auto"
        />
      </div>
      <div>
        <Typography>
          PH:{ph[0]} - {ph[1]} ppm
        </Typography>
        <Slider
          value={ph}
          onChange={handleSliderChange2}
          min={0}
          max={14}
          step={0.5}
          valueLabelDisplay="auto"
        />
      </div>
    </div>
  );
}

export default StageSilders;
