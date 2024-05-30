import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { database } from "../firebase";
import { ref, update, onValue } from "firebase/database";

function DailyRoutineButton() {
  const [open, setOpen] = useState(false);
  const [dailyRoutine, setDailyRoutine] = useState<boolean>(false);
  const [inspect, setInspect] = useState<boolean>(false);
  const [transplant, setTransplant] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    update(ref(database, "robot/"), { dailyRoutine: !dailyRoutine });
    setOpen(false);
  };

  useEffect(() => {
    onValue(ref(database, "robot"), (snapshot) => {
      const data = snapshot.val();
      setDailyRoutine(data.dailyRoutine);
      setInspect(data.inspect);
      setTransplant(data.transplant);
    });
  }, []);

  return (
    <div>
      {!dailyRoutine ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2%",
          }}
        >
          <Button
            disabled={inspect || transplant}
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
            style={{
              width: "100%",
              borderRadius: "20px",
              paddingLeft: "25px",
              paddingRight: "25px",
            }}
          >
            Start Daily Inspection Routine
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Confirmation</DialogTitle>
            <DialogContent>
              This action will initiate the daily routine inspection of the
              robot, which involves inspecting every plant and saving captured
              images of them.
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleConfirm} color="primary">
                Start
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2%",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
            style={{
              width: "100%",
              borderRadius: "20px",
              paddingLeft: "25px",
              paddingRight: "25px",
            }}
          >
            Stop Daily Inspection Routine
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Confirmation</DialogTitle>
            <DialogContent>
              This action will terminate the daily routine inspection of the
              robot
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleConfirm} color="primary">
                Terminate
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </div>
  );
}

export default DailyRoutineButton;
