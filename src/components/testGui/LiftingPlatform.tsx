import { Paper } from "@mui/material";
import Inputs from "./Inputs";
import ButtonType2 from "./ButtonType2";
import Typography from "@mui/material/Typography";

function LiftingPlatform() {
  return (
    <Paper
      elevation={4}
      style={{
        padding: "3%",
      }}
    >
      <Typography>Lifting Platform</Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "45%",
            marginRight: "10%",
            flexDirection: "column",
          }}
        >
          <Inputs title="Speed" path="liftingSpeed" />
          <Inputs title="Marker" path="marker" />
        </div>
        <div
          style={{
            marginTop: "5%",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <ButtonType2 title="Start" path="lifting" state={true} />
          <ButtonType2 title="Stop" path="lifting" state={false} />
        </div>
      </div>
    </Paper>
  );
}

export default LiftingPlatform;
