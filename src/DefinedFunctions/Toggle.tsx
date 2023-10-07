import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import { database } from "../firebase";
import { ref, onValue, update } from "firebase/database";
import Typography from "@mui/material/Typography";

const Toggle: React.FC<{ key: string; name: string }> = ({ key, name }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleSwitchChange = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    const dataRef = ref(database, "switchState/");
    update(dataRef, { [key]: newState });
    console.log("o");
  };

  useEffect(() => {
    onValue(ref(database, "switchState"), (snapshot) => {
      const data = snapshot.val();
      setIsChecked(data[key]);
      console.log();
    });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Typography gutterBottom style={{ flex: 1 }}>
        {name}
      </Typography>
      <Switch
        style={{ flex: 1 }}
        checked={isChecked}
        onChange={handleSwitchChange}
      />
    </div>
  );
};

export default Toggle;
