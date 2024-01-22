import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";

export default function FloorSlider() {
  return (
    <Stack sx={{ height: 300 }} spacing={1} direction="row">
      <Slider
        orientation="vertical"
        defaultValue={2}
        valueLabelDisplay="auto"
        min={0}
        max={2}
        disabled={false}
      />
    </Stack>
  );
}
