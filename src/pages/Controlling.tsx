import ECSlider from "../components/ECSlider";
import HumiditySlider from "../components/HumiditySlider";
import PHSlider from "../components/PHSlider";
import TempSlider from "../components/TempSlider";
import WaterPumpSwitch from "../components/WaterPumpSwitch";
const Controlling = () => {
  return (
    <div>
      <h1>Welcome to the Controlling Page</h1>
      <br />
      <ECSlider />
      <PHSlider />
      <HumiditySlider />
      <TempSlider />
      <WaterPumpSwitch />
    </div>
  );
};

export default Controlling;
