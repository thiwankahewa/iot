import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { database } from "../firebase";
import { ref, onValue, update } from "firebase/database";
import { useState, useEffect } from "react";
import frame from "../assets/frame2.png";
import "../App.css";
import IconButton from "@mui/material/IconButton";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Slider from "@mui/material/Slider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AddPlantsButton from "./AddPlantsButton";
import Lottie from "lottie-react";
import scanAni from "../assets/scanAni.json";

export default function RobotNavigation() {
  const [row, setRow] = useState<number>(0);
  const [floor, setFloor] = useState<number>(0);
  const [column, setColumn] = useState<number>(0);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [scan, setScan] = useState<boolean>(false);
  const [transplant, setTransplant] = useState<boolean>(false);
  const [dotsCount, setDotsCount] = useState(1);

  const handleRowChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setRow(newValue);
      update(ref(database, "robot/"), { row: newValue });
    }
  };

  const handleFloorChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setFloor(newValue);
      update(ref(database, "robot/"), { floor: newValue });
    }
  };

  const handleColumnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setColumn(newValue);
      update(ref(database, "robot/"), { column: newValue });
    }
  };

  const handleSwitchChange = (
    _event: React.MouseEvent<HTMLElement>,
    newChecked: boolean
  ) => {
    setIsChecked(newChecked);
    update(ref(database, "robot/"), { mode: newChecked });
  };

  useEffect(() => {
    onValue(ref(database, "robot"), (snapshot) => {
      const data = snapshot.val();
      setRow(data.row);
      setFloor(data.floor);
      setColumn(data.column);
      setIsChecked(data.mode);
      setScan(data.scan);
      setTransplant(data.transplant);
    });
    const intervalId = setInterval(() => {
      setDotsCount((prevCount) => (prevCount < 5 ? prevCount + 1 : 1));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const generateDots = () => {
    const dots = Array.from({ length: dotsCount }, (_, index) => (
      <span key={index} style={{ marginRight: "4px" }}>
        .
      </span>
    ));

    return dots;
  };

  return (
    <Paper style={{ display: "flex", flexDirection: "column" }}>
      {scan ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "5%",
          }}
        >
          <h1>Scanning{generateDots()}</h1>
          <Lottie
            animationData={scanAni}
            style={{
              width: "80%",
            }}
          />
        </div>
      ) : transplant ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "5%",
          }}
        >
          <h1>Transplanting{generateDots()}</h1>
          <Lottie
            animationData={scanAni}
            style={{
              width: "80%",
            }}
          />
        </div>
      ) : (
        <div>
          <Typography className="infoCardTitle" variant="subtitle2">
            Robot Controlling
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2%",
            }}
          >
            <ToggleButtonGroup
              value={isChecked}
              exclusive
              onChange={handleSwitchChange}
              color="primary"
            >
              <ToggleButton
                value={false}
                aria-label="left aligned"
                size="small"
                style={{ fontWeight: "bold" }}
              >
                Manual
              </ToggleButton>
              <ToggleButton
                value={true}
                aria-label="centered"
                size="small"
                style={{ fontWeight: "bold" }}
              >
                Automatic
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Slider
              style={{
                marginTop: "1%",
                width: "80%",
              }}
              disabled={isChecked}
              valueLabelDisplay="auto"
              onChange={handleRowChange}
              value={row}
              min={0}
              max={5}
              step={1}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                width: "25%",
                justifyContent: "center",
                display: "flex",
                marginLeft: "-2%",
              }}
            >
              <Slider
                id="verticalSlider"
                orientation="vertical"
                disabled={isChecked}
                valueLabelDisplay="auto"
                onChange={handleFloorChange}
                value={floor}
                min={0}
                max={2}
                step={1}
                style={{ height: "100%" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "75%",
                backgroundColor: "#A4C9DD",
                marginLeft: "-7%",
                borderRadius: "20px",
              }}
            >
              <img src={frame} id="frame" style={{ marginLeft: "10%" }} />
              <div style={{ marginLeft: "-5%", marginTop: "10px" }}>
                <AddPlantsButton />
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "5%",
              display: "flex",
              justifyContent: "center",
              marginBottom: "2%",
            }}
          >
            <TextField
              select
              label="Column"
              style={{ width: "25%" }}
              size="small"
              value={column}
              onChange={handleColumnChange}
              disabled={isChecked}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </TextField>
            <Divider style={{ width: "1%" }} orientation="vertical" flexItem />
            <IconButton disabled={isChecked}>
              <PlayArrowRoundedIcon />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton disabled={isChecked}>
              <StopRoundedIcon />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton>
              <CameraAltRoundedIcon />
            </IconButton>
          </div>
        </div>
      )}
    </Paper>
  );
}
