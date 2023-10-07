import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function CircularProgressWithLabel(
  props: CircularProgressProps & {
    value: number;
    realValue: number;
    typo: string;
    colr: string;
  }
) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
      }}
    >
      <CircularProgress
        variant="determinate"
        {...props}
        size={140}
        thickness={2}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body1"
          component="div"
          color="text.secondary"
          style={{ fontWeight: "bolder" }}
        >
          {`${props.realValue}${props.typo}`}
        </Typography>
      </Box>
    </Box>
  );
}
