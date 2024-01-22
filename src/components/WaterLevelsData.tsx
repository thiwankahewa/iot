import { useState, useEffect } from "react";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";
import Typography from "@mui/material/Typography";
import CircularProgressWithLabel from "../DefinedFunctions/CircularProgressBar";
import MapValueToPercentage from "../DefinedFunctions/MapToPercentage";
import Paper from "@mui/material/Paper";

function WaterLevel() {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    onValue(ref(database, "waterLevels"), (snapshot) => {
      const data = snapshot.val();
      setValue(data.mainContainer);
    });
  }, []);

  return (
    <Paper elevation={2}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 1 }}>
          <Typography
            gutterBottom
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "5px",
              marginTop: "10%",
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
              value={MapValueToPercentage(value, 0, 5)}
              realValue={value}
              typo="%"
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
              marginTop: "10%",
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
