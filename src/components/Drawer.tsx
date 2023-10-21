import { Link, useLocation } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import MonitorIcon from "@mui/icons-material/Visibility";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import TuneIcon from "@mui/icons-material/Tune";
import backGround from "../assets/1.jpg";
import Tooltip from "@mui/material/Tooltip";

const routes = [
  {
    path: "/",
    icon: (
      <Tooltip title="Home">
        <HomeIcon />
      </Tooltip>
    ),
  },
  {
    path: "/monitoring",
    icon: (
      <Tooltip title="Monitoring">
        <MonitorIcon />
      </Tooltip>
    ),
  },
  {
    path: "/controlling",
    icon: (
      <Tooltip title="Controlling">
        <TuneIcon />
      </Tooltip>
    ),
  },
  {
    path: "/robot",
    icon: (
      <Tooltip title="Robot">
        <PrecisionManufacturingIcon />
      </Tooltip>
    ),
  },
  {
    path: "/test",
  },
];

const drawerWidth = 72;

function DrawerComponent() {
  const location = useLocation();

  const containerStyle = {
    backgroundImage: `url(${backGround})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "72px",
    height: "100vh",
  };
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      style={{ width: `${drawerWidth}px` }}
    >
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
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
}

export default DrawerComponent;
