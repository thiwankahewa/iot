import Typography from "@mui/material/Typography";
import CurrentDateTime from "../DefinedFunctions/CurrentDataTime";
import VideoComponent2 from "../components/CameraFeed2";
import RobotNavigation from "../components/RobotNavigation";
import "../App.css";

const Robot = () => {
  return (
    <div className="pageBackground">
      <br />

      <div>
        <Typography
          style={{
            textAlign: "right",
            paddingRight: "20px",
            fontWeight: "bolder",
          }}
        >
          <CurrentDateTime />
        </Typography>
      </div>

      <div style={{ marginTop: "-2%" }}>
        <div className="robotControl">
          <RobotNavigation />
        </div>
        <div className="cameraFeed">
          <VideoComponent2 />
        </div>
      </div>
    </div>
  );
};

export default Robot;
