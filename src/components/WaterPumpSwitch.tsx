import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { firestore } from "../firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";
function WaterPumpSwitch() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const docRef = doc(firestore, "state", "WMMQHF9kkCQEVeg9Wdfc");
  const handleSwitchChange = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    updateDoc(docRef, {
      waterPump: newState,
    });
  };

  useEffect(() => {
    async function getDocState() {
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        const docData = docSnapshot.data();
        if (docData && typeof docData.waterPump !== "undefined") {
          console.log(docData.waterPump);
          setIsChecked(docData.waterPump);
        }
      }
    }
    getDocState();
  }, []);

  return (
    <div>
      <FormControlLabel
        control={<Switch checked={isChecked} onChange={handleSwitchChange} />}
        label="Water Pump"
        labelPlacement="start"
      />
    </div>
  );
}

export default WaterPumpSwitch;
