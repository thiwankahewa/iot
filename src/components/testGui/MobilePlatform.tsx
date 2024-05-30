import Inputs from "./Inputs";
import ManualController from "./ManualController";
import MobilePlatformSettings from "./MobilePlatformSettings";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import { Paper } from "@mui/material";
import ButtonType2 from "./ButtonType2";
import Typography from "@mui/material/Typography";

function MobilePlatform() {
  return (
    <Paper elevation={3} style={{ padding: "3%" }}>
      <Typography>Lifting Platform</Typography>
      <div style={{ display: "flex" }}>
        <div style={{ width: "45%", marginRight: "10%" }}>
          <Inputs title="P" path="p" />
          <Inputs title="I" path="i" />
          <Inputs title="D" path="d" />
        </div>
        <Paper
          elevation={4}
          style={{
            backgroundColor: "pink",
            width: "45%",
            paddingTop: "7%",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ManualController path="forward" logo={ArrowUpwardOutlinedIcon} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ marginRight: "20%" }}>
              <ManualController
                path="anticlockwise"
                logo={ArrowBackOutlinedIcon}
              />
            </div>

            <ManualController
              path="clockwisw"
              logo={ArrowForwardOutlinedIcon}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ManualController
              path="backward"
              logo={ArrowDownwardOutlinedIcon}
            />
          </div>
        </Paper>
      </div>
      <div
        style={{
          marginTop: "5%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <ButtonType2 title="Start" path="lineFollowing" state={true} />
        <ButtonType2 title="Stop" path="lineFollowing" state={false} />
        <MobilePlatformSettings title="Calibrate" path="calibrate" />
        <MobilePlatformSettings title="Recall" path="recall" />
      </div>
    </Paper>
  );
}

export default MobilePlatform;
