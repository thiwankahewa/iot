import LightControlingCard from "../components/LightControolingCard";
import SliderdCard from "../components/SliderCard";
import PumpControlingCard from "../components/PumpControllingCard";
import OtherControlingCard from "../components/OtherControllingCard";
import backGround from "../assets/background.jpeg";
import Typography from "@mui/material/Typography";
import CurrentDateTime from "../DefinedFunctions/CurrentDataTime";

const Controlling = () => {
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

      <div style={{ marginBottom: "10px" }}>
        <SliderdCard />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <PumpControlingCard />
        <LightControlingCard />
        <OtherControlingCard />
      </div>
    </div>
  );
};

export default Controlling;
