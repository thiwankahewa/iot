import React, { useState } from "react";
import Button from "@mui/material/Button";
import { database } from "../../firebase";
import { ref, update } from "firebase/database";

const MobilePlatformSettings: React.FC<{ title: string; path: string }> = ({
  title,
  path,
}) => {
  const [value, setValue] = useState<boolean>(false);

  const handleMouseDown = () => {
    setValue(true);
    update(ref(database, "robot/"), { [path]: !value });
  };

  const handleMouseUp = () => {
    setValue(false);
    update(ref(database, "robot/"), { [path]: !value });
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Button
        variant="contained"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {title}
      </Button>
    </div>
  );
};

export default MobilePlatformSettings;
