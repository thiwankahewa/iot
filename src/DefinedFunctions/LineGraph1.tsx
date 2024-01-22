import React from "react";
// @ts-ignore
//import CanvasJSReact from "@canvasjs/react-charts";
import Typography from "@mui/material/Typography";
//import Dialog from "@mui/material/Dialog";
//import Paper from "@mui/material/Paper";

//const CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface HistoryItem {
  standardTime: string;
  value: number[];
  date: number;
}

const LineGraph1: React.FC<{
  title: string;
  dataPoints: HistoryItem[];
  yTitle: string;
  prefix: string;
  index: number;
}> = ({ title }) => {
  //const [isDialogOpen, setIsDialogOpen] = useState(false);

  /*const dataObjects = dataPoints.map((item) => ({
    x: item.date,
    y: item.value[index],
  }));

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const options = {
    animationEnabled: true,
    zoomEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text: "",
    },
    axisX: {
      valueFormatString: " DDD HH:mm:ss",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
      },
    },
    axisY: {
      title: yTitle,
    },
    data: [
      {
        xValueType: "dateTime",
        toolTipContent: "{y}" + prefix,
        type: "spline",
        dataPoints: dataObjects,
        color: "#2e86b3",
      },
    ],
  };
  
  onClick={openDialog}*/

  return (
    <div>
      <div>
        <Typography
          gutterBottom
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          className="hover-effect"
        >
          {title}
        </Typography>
      </div>
      {/*<Dialog
        open={isDialogOpen}
        onClose={closeDialog}
        fullWidth={true}
        maxWidth={"lg"}
      >
        <Paper
          style={{
            width: "100%",
            height: "460px",
            paddingTop: "20px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <CanvasJSChart options={options} />
        </Paper>
      </Dialog>
      <style>
        {`
          .hover-effect:hover {
            text-decoration: underline;
            color: #2e86b3;
          }
        `}
      </style>*/}
    </div>
  );
};

export default LineGraph1;
