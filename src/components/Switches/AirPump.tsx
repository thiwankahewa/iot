import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import { database } from "../../firebase";
import { ref, onValue, update } from "firebase/database";
import Typography from "@mui/material/Typography";

function AirPump() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleSwitchChange = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    update(ref(database, "switchState/"), { AirPump: newState });
  };

  useEffect(() => {
    onValue(ref(database, "switchState"), (snapshot) => {
      const data = snapshot.val();
      setIsChecked(data.AirPump);
    });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Typography gutterBottom style={{ flex: 1 }}>
        Air Pump
      </Typography>
      <Switch
        style={{ flex: 1 }}
        checked={isChecked}
        onChange={handleSwitchChange}
      />
    </div>
  );
}

export default AirPump;
