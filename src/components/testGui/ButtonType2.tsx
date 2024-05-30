import React from "react";
import { database } from "../../firebase";
import { ref, update } from "firebase/database";
import Button from "@mui/material/Button";

const ButtonType2: React.FC<{
  path: string;
  title: string;
  state: boolean;
}> = ({ path, title, state }) => {
  const handleClick = () => {
    update(ref(database, "robot/"), { [path]: state });
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClick}
        style={{ width: "100px", marginBottom: "5px" }}
      >
        {title}
      </Button>
    </div>
  );
};

export default ButtonType2;
