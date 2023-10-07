import { useState, useEffect } from "react";
import { database } from "../../firebase";
import { ref, onValue } from "firebase/database";
import Typography from "@mui/material/Typography";
import CircularProgressWithLabel from "../../DefinedFunctions/CircularProgressBar";
import MapValueToPercentage from "../../DefinedFunctions/MapToPercentage";
import Paper from "@mui/material/Paper";

function WaterLevel() {
  const [_range, setRange] = useState<number>(0);

  useEffect(() => {
    onValue(ref(database, "sensorData"), (snapshot) => {
      const data = snapshot.val();
      setRange(data.ec["123"]);
    });
  }, []);

  return (
    <Paper
      elevation={2}
      style={{
        width: "33%",
        marginRight: "10px",
        opacity: "85%",
        height: "247px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 1 }}>
          <Typography
            gutterBottom
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "5px",
              marginTop: "10px",
              fontWeight: "bold",
            }}
          >
            Water Level 1
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              marginBottom: "15px",
            }}
          >
            <CircularProgressWithLabel
              value={MapValueToPercentage(5, 0, 5)}
              realValue={0}
              typo=" %"
              colr="blue"
            />
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <Typography
            gutterBottom
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              marginLeft: "5px",
              fontWeight: "bold",
            }}
          >
            Water Level 2
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              marginBottom: "15px",
            }}
          >
            <CircularProgressWithLabel
              value={MapValueToPercentage(5, 0, 5)}
              realValue={0}
              typo=" %"
              colr="blue"
            />
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default WaterLevel;
