import { Paper } from "@mui/material";
import Inputs from "./Inputs";
import ButtonType2 from "./ButtonType2";
import Typography from "@mui/material/Typography";
import { database } from "../../firebase";
import { ref, update } from "firebase/database";
import Button from "@mui/material/Button";

function SliderPlatform() {
  const handleClick = () => {
    update(ref(database, "robot/"), { sliderStart: false });
    update(ref(database, "robot/"), { sliderReverse: false });
  };

  return (
    <Paper
      elevation={4}
      style={{
        padding: "3%",
      }}
    >
      <Typography>Slider Platform</Typography>
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
          <Inputs title="Distance" path="sliderDistance" />
        </div>
        <div
          style={{
            marginTop: "5%",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <ButtonType2 title="Start" path="sliderStart" state={true} />

          <Button
            variant="contained"
            onClick={handleClick}
            style={{ width: "100px", marginBottom: "5px" }}
          >
            Stop
          </Button>
          <ButtonType2 title="Reverse" path="sliderReverse" state={true} />
          <br />
          <ButtonType2 title="Grip" path="grip" state={true} />
          <ButtonType2 title="Release" path="grip" state={false} />
        </div>
      </div>
    </Paper>
  );
}

export default SliderPlatform;
