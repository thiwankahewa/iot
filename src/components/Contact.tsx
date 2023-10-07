import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Lottie from "lottie-react";
import phoneAni from "../assets/phoneRingAni.json";
import emailAni from "../assets/emailAni.json";
import fbAni from "../assets/fbAni.json";
import helloHandAni from "../assets/helloHandAni.json";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",

  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

export default function PlaygroundSpeedDial() {
  const [isDialogOpen1, setIsDialogOpen1] = React.useState(false);
  const openDialog1 = () => {
    setIsDialogOpen1(true);
  };

  const closeDialog1 = () => {
    setIsDialogOpen1(false);
  };
  const [isDialogOpen2, setIsDialogOpen2] = React.useState(false);
  const openDialog2 = () => {
    setIsDialogOpen2(true);
  };

  const closeDialog2 = () => {
    setIsDialogOpen2(false);
  };
  const [isDialogOpen3, setIsDialogOpen3] = React.useState(false);
  const openDialog3 = () => {
    setIsDialogOpen3(true);
  };

  const closeDialog3 = () => {
    setIsDialogOpen3(false);
  };
  return (
    <Box sx={{ position: "relative", mt: "-25px", height: 150 }}>
      <div>
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          icon={
            <Lottie animationData={helloHandAni} style={{ width: "70%" }} />
          }
          direction={"left"}
          sx={{
            "& .MuiFab-primary": { backgroundColor: "" },
          }}
        >
          <SpeedDialAction
            icon={<PhoneIcon />}
            tooltipTitle={"Call"}
            onClick={openDialog1}
          />
          <SpeedDialAction
            icon={<MailIcon />}
            tooltipTitle={"Email"}
            onClick={openDialog2}
          />
          <SpeedDialAction
            icon={<FacebookIcon />}
            tooltipTitle={"Follow"}
            onClick={openDialog3}
          />
        </StyledSpeedDial>
      </div>
      <Dialog open={isDialogOpen1} onClose={closeDialog1}>
        <Paper
          style={{
            width: "500px",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Lottie animationData={phoneAni} style={{ width: "15%" }} />
          <Typography> Mobile No: +94 70 523 6050</Typography>
        </Paper>
      </Dialog>
      <Dialog open={isDialogOpen2} onClose={closeDialog2}>
        <Paper
          style={{
            width: "500px",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Lottie animationData={emailAni} style={{ width: "15%" }} />
          <Typography>
            {" "}
            Email:{" "}
            <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">
              growwiserobotics@gmail.com
            </Link>
          </Typography>
        </Paper>
      </Dialog>
      <Dialog open={isDialogOpen3} onClose={closeDialog3}>
        <Paper
          style={{
            width: "500px",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Lottie animationData={fbAni} style={{ width: "10%" }} />
          <Typography>
            {" "}
            Visit Our Facebook Page :{" "}
            <Link href="https://www.facebook.com/profile.php?id=100032604936877">
              GrowWiseRobotics
            </Link>
          </Typography>
        </Paper>
      </Dialog>
      ;
    </Box>
  );
}
