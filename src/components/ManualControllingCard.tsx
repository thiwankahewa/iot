import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ToggleSwitch from "./ToogleSwich";
import Divider from "@mui/material/Divider";

export default function PumpControlingCard() {
  return (
    <Paper elevation={2}>
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography style={{ fontWeight: "bold" }} variant="subtitle1">
            Manual Controlling
          </Typography>
        </div>

        <div style={{ overflowY: "auto", maxHeight: "330px" }}>
          <Divider textAlign="left">Pump Controlling</Divider>
          <br />
          <ToggleSwitch title="Water Pump" path="waterPump" />
          <ToggleSwitch title="Nutrient Pump" path="NutrientPump" />
          <ToggleSwitch title="Acid Pump" path="AcidPump" />
          <ToggleSwitch title="Base Pump" path="BasePump" />
          <br />
          <Divider textAlign="left">Light Controlling</Divider>
          <br />
          <ToggleSwitch title="Grow Light 1" path="growLight1" />
          <ToggleSwitch title="Grow Light 2" path="growLight2" />
          <ToggleSwitch title="Grow Light 3" path="growLight3" />
          <br />
          <Divider textAlign="left">Other Controlling</Divider>
          <br />
          <ToggleSwitch title="Fan Switch" path="fan" />
          <ToggleSwitch title="Stirring System" path="StirringSystem" />
          <ToggleSwitch title="Solenoid 1" path="Solenoid1" />
          <ToggleSwitch title="Solenoid 2" path="Solenoid2" />
        </div>
      </CardContent>
    </Paper>
  );
}
