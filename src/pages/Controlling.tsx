import PumpControlingCard from "../components/ManualControllingCard";
import Settings from "../components/Settings";
import CardContent from "@mui/material/CardContent";
import ECSlider from "../components/Sliders/ECSlider";
import HumiditySlider from "../components/Sliders/PHSlider";
import PHSlider from "../components/Sliders/HumiditySlider";
import TempSlider from "../components/Sliders/TempSlider";
import Paper from "@mui/material/Paper";

const Controlling = () => {
  return (
    <div className="pageBackground">
      <br />

      <Paper elevation={2} className="sliders">
        <CardContent>
          <ECSlider />
          <PHSlider />
          <HumiditySlider />
          <TempSlider />
        </CardContent>
      </Paper>

      <div className="controlling">
        <PumpControlingCard />
      </div>
      <div className="settings">
        <Settings />
      </div>
    </div>
  );
};

export default Controlling;
