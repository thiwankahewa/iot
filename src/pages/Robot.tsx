import backGround from "../assets/background.jpeg";
import Typography from "@mui/material/Typography";
import CurrentDateTime from "../DefinedFunctions/CurrentDataTime";
import Lottie from "lottie-react";
import animation from "../assets/animation_lmxrlp6w.json";
import Paper from "@mui/material/Paper";

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
      <div style={{}}>
        <Lottie
          animationData={animation}
          style={{
            height: "300px",
            marginTop: "70px",
          }}
        />
        <Paper
          style={{ marginRight: "160px", marginLeft: "150px", opacity: "85%" }}
        >
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bolder",
              fontSize: "25px",
            }}
          >
            Page still under construction, please wait!
          </Typography>
        </Paper>
      </div>
    </div>
  );
};

export default Robot;
