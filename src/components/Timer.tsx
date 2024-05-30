import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";

const Timer: React.FC<{
  title: string;
  pathOn: string;
  pathOff: string;
  setIsChecked2: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ title, pathOn, pathOff, setIsChecked2 }) => {
  const [On, setOn] = useState<number>(0);
  const [Off, setOff] = useState<number>(0);

  const handleOn = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setOn(newValue);
      setIsChecked2(false);
    }
  };

  const handleOff = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setOff(newValue);
      setIsChecked2(false);
    }
  };

  useEffect(() => {
    onValue(ref(database, "switchState"), (snapshot) => {
      const data = snapshot.val();
      setOn(data[pathOn]);
      setOff(data[pathOff]);
    });
  }, []);

  return (
    <div
      className="setting"
      style={{
        justifyContent: "space-around",
      }}
    >
      <Typography className="settingName">{title}</Typography>
      <div className="settingContainer">
        <TextField
          className="input1"
          label="ON Time (hrs)"
          variant="outlined"
          size="small"
          type="number"
          value={On}
          onChange={handleOn}
        />
        <TextField
          className="input1"
          label="OFF Time (hrs)"
          variant="outlined"
          size="small"
          type="number"
          value={Off}
          onChange={handleOff}
        />
      </div>
    </div>
  );
};

export default Timer;
