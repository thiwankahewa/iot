import React, { useState } from "react";
import { database } from "../../firebase";
import { ref, update } from "firebase/database";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const ManualController: React.FC<{
  path: string;
  logo: React.ElementType;
}> = ({ path, logo: LogoComponent }) => {
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
    <div>
      <Tooltip title={path}>
        <IconButton
          color="primary"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <LogoComponent />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default ManualController;
