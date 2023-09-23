import { useState, useEffect } from "react";
import { database } from "../../firebase";
import { ref, onValue, update } from "firebase/database";
import Typography from "@mui/material/Typography";
import CircularProgressWithLabel from "../../DefinedFunctions/CircularProgressBar";
import MapValueToPercentage from "../../DefinedFunctions/MapToPercentage";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function AirTemp() {
  const [range, setRange] = useState<number>(0);

  useEffect(() => {
    onValue(ref(database, "sensorData"), (snapshot) => {
      const data = snapshot.val();
      setRange(data.ec["123"]);
      console.log(data.ec["123"]);
    });
  }, []);

  return (
    <Paper
      elevation={2}
      style={{
        marginRight: "10px",
        width: "33%",
        opacity: "85%",
      }}
    >
      <div style={{}}>
        <Typography
          gutterBottom
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            fontWeight: "bold",
          }}
        >
          Room Temperature (15°C-30°C)
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
            value={MapValueToPercentage(5, 0, 14)}
            realValue={0}
            typo="°C"
            colr="blue"
          />
        </div>
        <Accordion style={{}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography>Past Data</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer>
              <Table
                sx={{ minWidth: 100 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Timestamp</TableCell>
                    <TableCell>Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell scope="row">15:30</TableCell>
                    <TableCell>3</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </div>
    </Paper>
  );
}

export default AirTemp;
