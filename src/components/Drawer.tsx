import { Link, useLocation } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import MonitorIcon from "@mui/icons-material/Visibility";
import ControlIcon from "@mui/icons-material/Settings";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import TuneIcon from "@mui/icons-material/Tune";

const routes = [
  { path: "/", text: "Home", icon: <HomeIcon /> },
  { path: "/monitoring", text: "Monitoring", icon: <MonitorIcon /> },
  { path: "/controlling", text: "Controlling", icon: <TuneIcon /> },
  { path: "/robot", text: "Robot", icon: <PrecisionManufacturingIcon /> },
];

function DrawerComponent() {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      style={{ width: "200px", zIndex: 1000 }}
    >
      <List>
        {routes.map((route, index) => (
          <Link
            to={route.path}
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
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
