import { useState, useEffect } from "react";
import { database } from "../../firebase";
import { ref, onValue, remove } from "firebase/database";
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
import createData from "../../DefinedFunctions/CreateData";
import PhCal from "../PhCal";
import LineGraph1 from "../../DefinedFunctions/LineGraph1";
import { Stack } from "@mui/material";

interface HistoryItem {
  standardTime: string;
  value: number;
  date: number;
}
const PastData = 20;
let history: HistoryItem[] = [];

function PhData() {
  const [_range, setRange] = useState<number>(0);

  useEffect(() => {
    onValue(ref(database, "sensorData/ph"), (snapshot) => {
      const data = snapshot.val();
      if (Object.keys(data).length >= PastData + 1) {
        for (let i = 0; i < Object.keys(data).length - PastData + 1; i++) {
          remove(ref(database, "sensorData/ph/" + Object.keys(data)[i]));
        }
      }
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        const value = Number(Object.values(childData)[0]);
        const timestamp = childSnapshot.key;
        history.unshift(createData(timestamp, value));
      });
      if (history.length > PastData) {
        history.splice(PastData - 1);
      }

      setRange(history[0].value);
    });
  }, []);

  return (
    <Paper
      elevation={2}
      style={{
        marginRight: "10px",
        width: "33%",
        opacity: "85%",
        height: "100%",
      }}
    >
      <div>
        <Stack
          direction="row"
          justifyContent="center"
          style={{ marginBottom: "9px" }}
          spacing={1}
        >
          <LineGraph1
            title="PH Value (0-14)"
            dataPoints={history}
            yTitle="PH Value"
            prefix=""
          />
          <PhCal />
        </Stack>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-5px",
            marginBottom: "15px",
          }}
        >
          <CircularProgressWithLabel
            value={MapValueToPercentage(_range, 0, 14)}
            realValue={_range}
            typo=""
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
            <TableContainer sx={{ maxHeight: 200 }}>
              <Table
                sx={{ minWidth: 100 }}
                size="small"
                aria-label="a dense table"
                stickyHeader
              >
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Timestamp
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {history.map((row) => (
                    <TableRow>
                      <TableCell scope="row">{row.standardTime}</TableCell>
                      <TableCell>{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </div>
    </Paper>
  );
}

export default PhData;
