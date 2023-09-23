import { Link, useLocation } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import MonitorIcon from "@mui/icons-material/Visibility";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import TuneIcon from "@mui/icons-material/Tune";
import backGround from "../assets/1.jpg";
import Typography from "@mui/material/Typography";

const routes = [
  {
    path: "/",
    text: <Typography style={{ fontWeight: "bold" }}>Home</Typography>,
    icon: <HomeIcon />,
  },
  {
    path: "/monitoring",
    text: <Typography style={{ fontWeight: "bold" }}>Monitoring</Typography>,
    icon: <MonitorIcon />,
  },
  {
    path: "/controlling",
    text: <Typography style={{ fontWeight: "bold" }}>Controlling</Typography>,
    icon: <TuneIcon />,
  },
  {
    path: "/robot",
    text: <Typography style={{ fontWeight: "bold" }}>Robot</Typography>,
    icon: <PrecisionManufacturingIcon />,
  },
];

function DrawerComponent() {
  const location = useLocation();
  const containerStyle = {
    backgroundImage: `url(${backGround})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "167px",
    height: "100vh",
  };
  return (
    <Drawer variant="permanent" anchor="left" style={{ width: "167px" }}>
      <List style={containerStyle}>
        {routes.map((route, index) => (
          <Link
            to={route.path}
            key={index}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <ListItem button selected={location.pathname === route.path}>
              <ListItemIcon>{route.icon}</ListItemIcon>
              <ListItemText primary={route.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
}

export default DrawerComponent;
