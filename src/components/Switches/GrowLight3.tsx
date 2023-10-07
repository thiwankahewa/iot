import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import { database } from "../../firebase";
import { ref, onValue, update } from "firebase/database";
import Typography from "@mui/material/Typography";

function GrowLight3() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleSwitchChange = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    update(ref(database, "switchState/"), { growLight3: newState });
  };

  useEffect(() => {
    onValue(ref(database, "switchState"), (snapshot) => {
      const data = snapshot.val();
      setIsChecked(data.growLight3);
    });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Typography gutterBottom style={{ flex: 1 }}>
        Grow Light 3
      </Typography>
      <Switch
        style={{ flex: 1 }}
        checked={isChecked}
        onChange={handleSwitchChange}
      />
    </div>
  );
}

export default GrowLight3;
