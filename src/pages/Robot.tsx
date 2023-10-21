import backGround from "../assets/background.jpeg";
import Typography from "@mui/material/Typography";
import CurrentDateTime from "../DefinedFunctions/CurrentDataTime";
import VideoComponent2 from "../components/CameraFeed2";

const Robot = () => {
  const containerStyle = {
    backgroundImage: `url(${backGround})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "100vw",
    height: "100vh",
    paddingLeft: "10px",
  };
  return (
    <div style={containerStyle}>
      <br />

      <div style={{}}>
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

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginRight: "10px",
          marginTop: "20px",
        }}
      >
        <VideoComponent2 />
      </div>
    </div>
  );
};

export default Robot;
