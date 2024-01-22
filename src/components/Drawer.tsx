import { Link, useLocation } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import MonitorIcon from "@mui/icons-material/Visibility";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import TuneIcon from "@mui/icons-material/Tune";
import Tooltip from "@mui/material/Tooltip";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { useMediaQuery } from "@mui/material";
import logo from "../assets/logo.png";
import bGround from "../assets/1.jpg";

const routes = [
  {
    icon: (
      <div>
        <img
          src={logo}
          style={{
            display: "flex",
            width: "150px",
            justifyContent: "center",
            marginTop: "-45%",
            marginBottom: "-20%",
          }}
        />
      </div>
    ),
  },
  {
    path: "/",
    icon: (
      <div>
        <Tooltip title="Home">
          <HomeIcon />
        </Tooltip>
        <span style={{ marginLeft: "20px", textDecoration: "none" }}>Home</span>
      </div>
    ),
  },
  {
    path: "/monitoring",
    icon: (
      <div>
        <Tooltip title="Monitoring">
          <MonitorIcon />
        </Tooltip>
        <span style={{ marginLeft: "20px" }}>Monitoring</span>
      </div>
    ),
  },
  {
    path: "/controlling",
    icon: (
      <div>
        <Tooltip title="Controlling">
          <TuneIcon />
        </Tooltip>
        <span style={{ marginLeft: "20px" }}>Controlling</span>
      </div>
    ),
  },
  {
    path: "/robot",
    icon: (
      <div>
        <Tooltip title="Robot">
          <PrecisionManufacturingIcon />
        </Tooltip>
        <span style={{ marginLeft: "20px" }}>Robot</span>
      </div>
    ),
  },

  {
    path: "/test",
  },
];

function DrawerComponent() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width:768px)");

  const containerStyle = {
    backgroundImage: `url(${bGround})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "100%",
    height: "100vh",
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleItemClick = () => {
    if (!isLargeScreen) setOpen(false);
  };

  return (
    <div>
      {isLargeScreen ? (
        <Drawer variant="permanent" open style={{ width: "182px" }}>
          <List style={containerStyle}>
            {routes.map((route, index) =>
              route.path ? (
                <Link to={route.path} key={index}>
                  <ListItem
                    button
                    selected={location.pathname === route.path}
                    onClick={handleItemClick} // Close drawer on item click
                  >
                    <ListItemIcon>{route.icon}</ListItemIcon>
                  </ListItem>
                </Link>
              ) : (
                <ListItem key={index}>
                  <ListItemIcon>{route.icon}</ListItemIcon>
                </ListItem>
              )
            )}
          </List>
        </Drawer>
      ) : (
        <div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            style={{
              position: "fixed",
              top: "20px",
              left: "20px",
              zIndex: 999,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            anchor="left"
            open={open}
            onClose={toggleDrawer}
          >
            <List style={containerStyle}>
              {routes.map((route, index) =>
                route.path ? (
                  <Link to={route.path} key={index}>
                    <ListItem
                      button
                      selected={location.pathname === route.path}
                      onClick={handleItemClick} // Close drawer on item click
                    >
                      <ListItemIcon>{route.icon}</ListItemIcon>
                    </ListItem>
                  </Link>
                ) : (
                  <ListItem key={index}>
                    <ListItemIcon>{route.icon}</ListItemIcon>
                  </ListItem>
                )
              )}
            </List>
          </Drawer>
        </div>
      )}
    </div>
  );
}

export default DrawerComponent;
