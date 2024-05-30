import { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import { database } from "../firebase";
import { ref, onValue, update } from "firebase/database";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

function Settings() {
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [waterPumpOn, setWaterPumpOn] = useState<number>(0);
  const [waterPumpOff, setWaterPumpOff] = useState<number>(0);
  const [fanOn, setFanOn] = useState<number>(0);
  const [fanOff, setFanOff] = useState<number>(0);
  const [lightOn, setLightOn] = useState<number>(0);
  const [lightOff, setLightOff] = useState<number>(0);
  const [phValue, setPhValue] = useState<number>(0);
  const [isChecked2, setIsChecked2] = useState<boolean>(false);

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
  };

  const handleWaterPumpOn = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setWaterPumpOn(newValue);
      setIsChecked2(false);
    }
  };

  const handleWaterPumpOff = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setWaterPumpOff(newValue);
      setIsChecked2(false);
    }
  };

  const handleFanOn = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setFanOn(newValue);
      setIsChecked2(false);
    }
  };

  const handleFanOff = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setFanOff(newValue);
      setIsChecked2(false);
    }
  };

  const handleLightsOn = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setLightOn(newValue);
      setIsChecked2(false);
    }
  };

  const handleLightsOff = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setLightOff(newValue);
      setIsChecked2(false);
    }
  };

  const handlePhValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setPhValue(newValue);
      setIsChecked2(false);
    }
  };

  const save = () => {
    update(ref(database, "switchState"), {
      phCal: phValue,
      lightOnTime: lightOn,
      lightOffTime: lightOff,
      fanOnTime: fanOn,
      waterPumpOnTime: waterPumpOn,
      waterPumpOffTime: waterPumpOff,
      fanOffTime: fanOff,
      settings: true,
    });
    setIsChecked2(true);
    setAlertMessage("Settings saved successfully");
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
      setLightOn(data.lightOnTime);
      setLightOff(data.lightOffTime);
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
          justifyContent: "space-between",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
      >
        <ToggleButtonGroup
          value={isChecked}
          exclusive
          onChange={handleSwitchChange}
          color="primary"
          style={{ margin: "0 auto" }}
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
      <div style={{ overflowY: "auto", maxHeight: "275px" }}>
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
              type="number"
              value={waterPumpOn}
              onChange={handleWaterPumpOn}
            />
            <TextField
              className="input1"
              label="OFF Time (hrs)"
              variant="outlined"
              size="small"
              type="number"
              value={waterPumpOff}
              onChange={handleWaterPumpOff}
            />
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
              type="number"
              value={fanOn}
              onChange={handleFanOn}
            />
            <TextField
              className="input1"
              label="OFF Time (hrs)"
              variant="outlined"
              size="small"
              type="number"
              value={fanOff}
              onChange={handleFanOff}
            />
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
            <TextField
              className="input1"
              label="ON Time (hrs)"
              variant="outlined"
              size="small"
              type="number"
              value={lightOn}
              onChange={handleLightsOn}
            />
            <TextField
              className="input1"
              label="OFF Time (hrs)"
              variant="outlined"
              size="small"
              type="number"
              value={lightOff}
              onChange={handleLightsOff}
            />
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
              type="number"
              value={phValue}
              onChange={handlePhValue}
              size="small"
            />
          </div>
        </div>
        <br />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          onClick={save}
          color="primary"
          disabled={isChecked2}
          style={{
            borderRadius: "15px",
            margin: "10px 10px",
          }}
        >
          save
        </Button>
      </div>
    </Paper>
  );
}

export default Settings;
