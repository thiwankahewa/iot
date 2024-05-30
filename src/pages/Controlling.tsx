import PumpControlingCard from "../components/ManualControllingCard";
import Settings from "../components/Settings";
import CardContent from "@mui/material/CardContent";
import PHSlider from "../components/Sliders/HumiditySlider";
import TempSlider from "../components/Sliders/TempSlider";
import Paper from "@mui/material/Paper";
import StageSilders from "../components/Sliders/StageSilders";

const Controlling = () => {
  return (
    <div className="pageBackground">
      <br />

      <Paper elevation={2} className="sliders">
        <CardContent>
          <PHSlider />
          <TempSlider />
          <StageSilders />
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
