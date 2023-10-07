import EcData from "../components/SensorData/ECData";
import PhData from "../components/SensorData/PHData";
import WaterLevel from "../components/SensorData/WaterLevels";
import HumidityData from "../components/SensorData/Humidity";
import WaterTemp from "../components/SensorData/WaterTemp";
import AirTemp from "../components/SensorData/AirTemp";
import backGround from "../assets/background.jpeg";
import Typography from "@mui/material/Typography";
import CurrentDateTime from "../DefinedFunctions/CurrentDataTime";

const Monitoring = () => {
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
      <div></div>
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
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "10px",
        }}
      >
        <EcData />
        <PhData />
        <WaterLevel />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <HumidityData />
        <AirTemp />
        <WaterTemp />
      </div>
    </div>
  );
};

export default Monitoring;
