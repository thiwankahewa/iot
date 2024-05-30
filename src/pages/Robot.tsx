import VideoComponent2 from "../components/CameraFeed2";
import RobotNavigation2 from "../components/RobotNavigation2";
import "../App.css";
import DailyRoutineButton from "../components/DailyRoutineButton";
import ImageGallery from "../components/ImageGallery";

const Robot = () => {
  return (
    <div
      className="pageBackground"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div style={{ marginTop: "-2%" }}>
        <div className="robotControl">
          <DailyRoutineButton />
          <RobotNavigation2 />
        </div>
        <div className="cameraFeed">
          <VideoComponent2 />
        </div>
      </div>
      <div className="ImageGallery">
        <ImageGallery />
      </div>
    </div>
  );
};

export default Robot;
