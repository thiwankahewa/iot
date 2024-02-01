import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import Lottie from "lottie-react";
import plantingAni from "../assets/plantingAni.json";
import { database } from "../firebase";
import { ref, update } from "firebase/database";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function AddPlantsButton() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [openTransplant, setOpenTransplant] = useState(false);
  const [openHarvest, setOpenHarvest] = useState(false);

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
    setOpenTransplant(false);
    setOpenHarvest(false);
    update(ref(database, "robot/"), { scan: false });
    update(ref(database, "robot/"), { transplant: false });
  };

  const handleAdd = () => {
    setOpen1(false);
    setOpen2(true);
  };

  const handleDone = () => {
    update(ref(database, "robot/"), { scan: true });
    setOpen2(false);
  };

  const handleTransplant = () => {
    setOpenTransplant(true);
  };

  const handleStart1 = () => {
    update(ref(database, "robot/"), { transplant: true });
    setOpenTransplant(false);
  };

  const handleHarvest = () => {
    setOpenHarvest(true);
  };

  const handleStart2 = () => {
    update(ref(database, "robot/"), { harvest: true });
    setOpenHarvest(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <Tooltip title="Add new plants">
          <IconButton size="large" onClick={handleOpen1} color="primary">
            <ControlPointIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
        <Dialog open={open1} onClose={handleClose1}>
          <DialogTitle>{"Add new nursery plants to the system"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              After clicking "ADD" you have to put your new plants/seeds in any
              available location on the ground floor.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose1}>Close</Button>
            <Button onClick={handleAdd}>Add</Button>
          </DialogActions>
        </Dialog>
        <Dialog open={open2}>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Click "Done" after finish planting.
            </DialogContentText>
          </DialogContent>
          <Lottie
            animationData={plantingAni}
            style={{
              width: "100%",
              marginTop: "-100px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              onClick={handleDone}
              style={{
                width: "100px",
                marginTop: "25px",
                marginBottom: "20px",
                borderRadius: "20px",
              }}
            >
              Done
            </Button>
          </div>
        </Dialog>
      </div>
      <div>
        <Tooltip title="Transplanting">
          <IconButton size="large" onClick={handleTransplant} color="primary">
            <PrecisionManufacturingIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
        <Dialog open={openTransplant} onClose={handleClose1}>
          <DialogTitle>{"Transplanting the system"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              After clicking "START" robot will start the planting the nursery
              level plants in upper levels.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose1}>Close</Button>
            <Button onClick={handleStart1}>Start</Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <Tooltip title="Harvesting">
          <IconButton size="large" onClick={handleHarvest} color="primary">
            <AddShoppingCartIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
        <Dialog open={openHarvest} onClose={handleClose1}>
          <DialogTitle>{"Harvesting"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              After clicking "START" robot will start the harvesting the grown
              plants in upper levels.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose1}>Close</Button>
            <Button onClick={handleStart2}>Start</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default AddPlantsButton;
