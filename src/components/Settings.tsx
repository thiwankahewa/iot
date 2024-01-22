import { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import { database } from "../firebase";
import { ref, onValue, update } from "firebase/database";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";
import Tooltip from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Divider from "@mui/material/Divider";
import dayjs, { Dayjs } from "dayjs";
import { TimePicker } from "antd";

const convertEpochToDayjs = (epochTimeInSeconds: number) => {
  return dayjs.unix(epochTimeInSeconds);
};

const convertDayjsToEpoch = (dayjsTime: Dayjs) => {
  return dayjsTime.unix();
};

function Settings() {
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [waterPumpOn, setWaterPumpOn] = useState<number>(0);
  const [waterPumpOff, setWaterPumpOff] = useState<number>(0);
  const [fanOn, setFanOn] = useState<number>(0);
  const [fanOff, setFanOff] = useState<number>(0);
  const [lightOn, setLightOn] = useState<Dayjs | null>(dayjs());
  const [lightOff, setLightOff] = useState<Dayjs | null>(dayjs());
  const [lightOnE, setLightOnE] = useState<number>(0);
  const [lightOffE, setLightOffE] = useState<number>(0);
  const [phValue, setPhValue] = useState<number>(0);

  const handleSwitchChange = (
    _event: React.MouseEvent<HTMLElement>,
    newChecked: boolean
  ) => {
    console.log(newChecked);
    if (newChecked) {
      update(ref(database, "flags/"), { flag: true });
    } else {
      update(ref(database, "flags/"), { flag: false });
    }
    setIsChecked(newChecked);
    update(ref(database, "switchState/"), { iController: newChecked });
    update(ref(database, "robot/"), { scan: false });
    update(ref(database, "robot/"), { transplant: false });
  };

  const handleWaterPumpOn = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setWaterPumpOn(newValue);
    }
  };

  const handleWaterPumpOff = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setWaterPumpOff(newValue);
    }
  };

  const handleWaterPump = () => {
    update(ref(database, "switchState"), {
      waterPumpOnTime: waterPumpOn,
      waterPumpOffTime: waterPumpOff,
    });
    setAlertMessage("Water Pump Timer Set");
    setAlertOpen(true);
  };

  const handleFanOn = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setFanOn(newValue);
    }
  };

  const handleFanOff = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setFanOff(newValue);
    }
  };

  const handleFan = () => {
    update(ref(database, "switchState"), {
      fanOnTime: fanOn,
      fanOffTime: fanOff,
    });
    setAlertMessage("Fan Timer Set");
    setAlertOpen(true);
  };

  const handleLights = () => {
    update(ref(database, "switchState"), {
      lightOnTime: lightOnE,
      lightOffTime: lightOffE,
    });
    setAlertMessage("Grow Lights Timer Set");
    setAlertOpen(true);
  };

  const handlePhValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setPhValue(newValue);
    }
  };

  const savePhValue = () => {
    update(ref(database, "switchState"), { phCal: phValue });
    setAlertMessage("Ph calibration value Set");
    setAlertOpen(true);
  };

  useEffect(() => {
    onValue(ref(database, "switchState"), (snapshot) => {
      const data = snapshot.val();
      setIsChecked(data.iController);

      setWaterPumpOn(data.waterPumpOnTime);
      setWaterPumpOff(data.waterPumpOffTime);
      setFanOn(data.fanOnTime);
      setFanOff(data.fanOffTime);
      setLightOn(convertEpochToDayjs(data.lightOnTime));
      setLightOff(convertEpochToDayjs(data.lightOffTime));
      setPhValue(data.phCal);
    });
  }, []);

  return (
    <Paper elevation={2} style={{ marginBottom: "2%" }}>
      <Snackbar
        open={alertOpen}
        autoHideDuration={2000}
        onClose={() => setAlertOpen(false)}
        style={{ marginLeft: "182px" }}
      >
        <Alert
          onClose={() => setAlertOpen(false)}
          severity="success"
          variant="filled"
        >
          {alertMessage}
        </Alert>
      </Snackbar>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingTop: "15px",
          paddingBottom: "15px",
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
      <div style={{ overflowY: "auto", maxHeight: "330px" }}>
        <Divider textAlign="left">Timers</Divider>
        <br />

        <div
          className="setting"
          style={{
            justifyContent: "space-around",
          }}
        >
          <Typography className="settingName">Water Pump Timer</Typography>
          <div className="settingContainer">
            <TextField
              className="input1"
              label="ON Time (hrs)"
              variant="outlined"
              size="small"
              value={waterPumpOn}
              onChange={handleWaterPumpOn}
            />
            <TextField
              className="input1"
              label="OFF Time (hrs)"
              variant="outlined"
              size="small"
              value={waterPumpOff}
              onChange={handleWaterPumpOff}
            />
            <Tooltip title="Save">
              <IconButton onClick={handleWaterPump} color="primary">
                <SaveIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <br />
        <div
          className="setting"
          style={{
            justifyContent: "space-around",
          }}
        >
          <Typography className="settingName">Exhaust Fan Timer</Typography>
          <div className="settingContainer">
            <TextField
              className="input1"
              label="ON Time (hrs)"
              variant="outlined"
              size="small"
              value={fanOn}
              onChange={handleFanOn}
              disabled={isChecked}
            />
            <TextField
              className="input1"
              label="OFF Time (hrs)"
              variant="outlined"
              size="small"
              value={fanOff}
              onChange={handleFanOff}
              disabled={isChecked}
            />
            <Tooltip title="Save">
              <IconButton
                onClick={handleFan}
                color="primary"
                disabled={isChecked}
              >
                <SaveIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <br />
        <div
          className="setting"
          style={{
            justifyContent: "space-around",
          }}
        >
          <Typography className="settingName">Grow Lights Timer</Typography>
          <div className="settingContainer">
            <TimePicker
              className="input2"
              disabled={isChecked}
              value={lightOn}
              size="large"
              onChange={(newValue) => {
                setLightOn(newValue);
                if (newValue) {
                  console.log(newValue);
                  console.log(convertDayjsToEpoch(newValue));
                  setLightOnE(convertDayjsToEpoch(newValue));
                }
              }}
            />

            <TimePicker
              className="input2"
              disabled={isChecked}
              size="large"
              value={lightOff}
              onChange={(newValue) => {
                setLightOff(newValue);
                if (newValue) {
                  console.log(newValue);
                  console.log(convertDayjsToEpoch(newValue));
                  setLightOffE(convertDayjsToEpoch(newValue));
                }
              }}
            />

            <Tooltip title="Save">
              <IconButton
                onClick={handleLights}
                color="primary"
                disabled={isChecked}
              >
                <SaveIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <br />
        <Divider textAlign="left">Sensor Calibration</Divider>
        <br />
        <div
          className="setting"
          style={{
            justifyContent: "space-evenly",
          }}
        >
          <Typography className="settingName">PH calibration</Typography>
          <div className="settingContainer">
            <TextField
              className="input1"
              label="True value:"
              variant="outlined"
              value={phValue}
              onChange={handlePhValue}
              size="small"
            />
            <Tooltip title="Save">
              <IconButton onClick={savePhValue} color="primary">
                <SaveIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <br />
      </div>
    </Paper>
  );
}

export default Settings;
