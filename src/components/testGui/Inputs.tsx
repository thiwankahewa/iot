import { useState, useEffect } from "react";
import { database } from "../../firebase";
import { ref, onValue, update } from "firebase/database";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const Inputs: React.FC<{ title: string; path: string }> = ({ title, path }) => {
  const [value, setValue] = useState<string>("0");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  const handleSave = () => {
    const numericValue = parseFloat(value);
    update(ref(database, "robot/"), { [path]: numericValue });
  };

  useEffect(() => {
    onValue(ref(database, "robot"), (snapshot) => {
      const data = snapshot.val();
      setValue(data[path]);
    });
  }, []);

  return (
    <div>
      <TextField
        label={title}
        variant="outlined"
        type="number"
        size="small"
        style={{ width: "50%", marginBottom: "20px" }}
        value={value}
        onChange={handleInputChange}
      />
      <Tooltip title="Save">
        <IconButton color="primary" onClick={handleSave}>
          <ArrowCircleRightOutlinedIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default Inputs;
