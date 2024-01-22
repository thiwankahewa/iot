import { useState, useEffect } from "react";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";
import Typography from "@mui/material/Typography";
import CircularProgressWithLabel from "../DefinedFunctions/CircularProgressBar";
import MapValueToPercentage from "../DefinedFunctions/MapToPercentage";
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
import createData from "../DefinedFunctions/CreateData";
import LineGraph1 from "../DefinedFunctions/LineGraph1";

interface HistoryItem {
  standardTime: string;
  value: number[];
  date: number;
}

let history: HistoryItem[] = [];

const SensorData: React.FC<{
  index: number;
  minVal: number;
  maxVal: number;
  title: string;
  prefix: string;
}> = ({ index, minVal, maxVal, prefix, title }) => {
  const [range, setRange] = useState<number[]>([]);

  useEffect(() => {
    onValue(ref(database, "sensorData"), (snapshot) => {
      history = [];
      snapshot.forEach((childSnapshot) => {
        childSnapshot.forEach((babySnapshot) => {
          const babyData = babySnapshot.val();

          const value: number[] = [];
          for (let i = 0; i < 5; i++) {
            value[i] = Number(Object.values(babyData)[i]);
          }
          const timestamp = childSnapshot.key;
          history.unshift(createData(timestamp, value));
        });
      });
      console.log(history);

      setRange(history[0].value);
    });
  }, []);

  return (
    <Paper elevation={2}>
      <div style={{ paddingTop: "1%" }}>
        <LineGraph1
          title={
            title +
            " (" +
            String(minVal) +
            String(prefix) +
            " - " +
            String(maxVal) +
            String(prefix) +
            ")"
          }
          dataPoints={history}
          yTitle={title + " (" + String(prefix) + ")"}
          prefix={prefix}
          index={index}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5%",
            marginBottom: "5%",
          }}
        >
          <CircularProgressWithLabel
            value={MapValueToPercentage(range[index], minVal, maxVal)}
            realValue={range[index]}
            typo={prefix}
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
            <TableContainer style={{ maxHeight: "200px" }}>
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
                    <TableCell style={{ fontWeight: "bold" }}>
                      Value ({prefix})
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {history.map((row) => (
                    <TableRow>
                      <TableCell scope="row">{row.standardTime}</TableCell>
                      <TableCell>{row.value[index]}</TableCell>
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
};

export default SensorData;
