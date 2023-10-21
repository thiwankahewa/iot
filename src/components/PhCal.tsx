import React, { useState, useEffect } from "react";
import { database } from "../firebase";
import { ref, update, onValue } from "firebase/database";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Dialog from "@mui/material/Dialog";
import Tooltip from "@mui/material/Tooltip";

export default function PhCal() {
  const [value1, setValue1] = useState<number>(0);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleValue1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setValue1(newValue);
    }
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSubmit = () => {
    update(ref(database, "switchState"), { phCal: value1 });
    setIsDialogOpen(false);
  };

  useEffect(() => {
    onValue(ref(database, "switchState"), (snapshot) => {
      const data = snapshot.val();
      setValue1(data.phCal);
    });
  }, []);

  return (
    <div>
      <Tooltip title="Calibration">
        <IconButton onClick={openDialog}>
          <SettingsIcon />
        </IconButton>
      </Tooltip>
      <Dialog open={isDialogOpen} onClose={closeDialog}>
        <div
          style={{
            width: "90px",
            margin: "30px",
          }}
        >
          <Stack spacing={2}>
            <div>
              <TextField
                label="True value:"
                variant="outlined"
                value={value1}
                onChange={handleValue1Change}
                size="small"
              />
            </div>
            <Button onClick={handleSubmit} variant="contained">
              Submit
            </Button>
          </Stack>
        </div>
      </Dialog>
    </div>
  );
}
