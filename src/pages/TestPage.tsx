import MobilePlatform from "../components/testGui/MobilePlatform";
import LiftingPlatform from "../components/testGui/LiftingPlatform";
import SliderPlatform from "../components/testGui/SliderPlatform";

export default function TestPage() {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ width: "58%", margin: "1%" }}>
          <MobilePlatform />
        </div>
        <div style={{ width: "38%", margin: "1%" }}>
          <LiftingPlatform />
        </div>
      </div>
      <div style={{ width: "38%", margin: "1%" }}>
        <SliderPlatform />
      </div>
    </div>
  );
}
