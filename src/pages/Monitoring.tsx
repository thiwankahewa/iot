import WaterLevel from "../components/WaterLevelsData";
import Typography from "@mui/material/Typography";
import CurrentDateTime from "../DefinedFunctions/CurrentDataTime";
import SensorData from "../components/SensorData";

const Monitoring = () => {
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
      <br />
      <div>
        <div className="monitoring">
          <SensorData
            index={0}
            minVal={0}
            maxVal={5}
            title="EC value"
            prefix=" mS/cm"
          />
        </div>
        <div className="monitoring">
          <SensorData
            index={2}
            minVal={4}
            maxVal={7}
            title="PH value"
            prefix=""
          />
        </div>
        <div className="monitoring">
          <SensorData
            index={1}
            minVal={0}
            maxVal={100}
            title="Humidity"
            prefix="%"
          />
        </div>
        <div className="monitoring">
          <SensorData
            index={3}
            minVal={15}
            maxVal={30}
            title="Room Temperature"
            prefix="°C"
          />
        </div>
        <div className="monitoring">
          <SensorData
            index={4}
            minVal={15}
            maxVal={30}
            title="Solution Temperature"
            prefix="°C"
          />
        </div>
        <div className="monitoring">
          <WaterLevel />
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
