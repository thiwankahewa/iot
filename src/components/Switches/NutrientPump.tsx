import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { database } from "../../firebase";
import { ref, onValue, update } from "firebase/database";
import Typography from "@mui/material/Typography";

function NutrientPump() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleSwitchChange = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    update(ref(database, "switchState/"), { NutrientPump: newState });
  };

  useEffect(() => {
    onValue(ref(database, "switchState"), (snapshot) => {
      const data = snapshot.val();
      setIsChecked(data.NutrientPump);
    });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Typography gutterBottom style={{ flex: 1 }}>
        Nutrient Pump
      </Typography>
      <Switch
        style={{ flex: 1 }}
        checked={isChecked}
        onChange={handleSwitchChange}
      />
    </div>
  );
}

export default NutrientPump;
