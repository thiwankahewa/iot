import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ToggleSwitch from "./ToogleSwich";
import ToggleSwitch2 from "./ToggleSwitch2";
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
          <ToggleSwitch2 title="Water Pump" path="WaterPump" />
          <ToggleSwitch title="Nutrient Pump" path="NutrientPump" />
          <ToggleSwitch title="Acid Pump" path="AcidPump" />
          <ToggleSwitch title="Base Pump" path="BasePump" />
          <br />
          <Divider textAlign="left">Light Controlling</Divider>
          <br />
          <ToggleSwitch2 title="Grow Light 1" path="growLight1" />
          <ToggleSwitch2 title="Grow Light 2" path="growLight2" />
          <ToggleSwitch2 title="Grow Light 3" path="growLight3" />
          <br />
          <Divider textAlign="left">Other Controlling</Divider>
          <br />
          <ToggleSwitch2 title="Fan Switch" path="fan" />
          <ToggleSwitch2 title="Stirring System" path="StirringSystem" />
          <ToggleSwitch title="Solenoid 1" path="Solenoid1" />
        </div>
      </CardContent>
    </Paper>
  );
}
