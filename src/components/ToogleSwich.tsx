import { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { database } from "../firebase";
import { ref, onValue, update } from "firebase/database";
import Typography from "@mui/material/Typography";
import { Switch, switchClasses } from "@mui/base/Switch";
import Grid from "@mui/material/Grid";

const ToggleSwitch: React.FC<{ title: string; path: string }> = ({
  title,
  path,
}) => {
  const label = { slotProps: { input: { "aria-label": "Demo switch" } } };
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleSwitchChange = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    update(ref(database, "switchState/"), { [path]: newState });
  };

  useEffect(() => {
    onValue(ref(database, "switchState"), (snapshot) => {
      const data = snapshot.val();
      setIsChecked(data[path]);
    });
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={6} md={8} sm={7} lg={9}>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item xs={6} sm={5} md={4} lg={3} style={{}}>
        <div>
          <Switch
            style={{
              marginTop: "0px",
            }}
            checked={isChecked}
            onChange={handleSwitchChange}
            slots={{
              root: Root,
            }}
            {...label}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default ToggleSwitch;

const blue = {
  500: "#007FFF",
};

const grey = {
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
};

const Root = styled("span")(
  ({ theme }) => `
    font-size: 0;
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
    margin: 10px;
    cursor: pointer;
  
    &.${switchClasses.disabled} {
      opacity: 0.4;
      cursor: not-allowed;
    }
  
    & .${switchClasses.track} {
      background: ${theme.palette.mode === "dark" ? grey[600] : grey[400]};
      border-radius: 16px;
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
    }
  
    & .${switchClasses.thumb} {
      display: block;
      width: 16px;
      height: 16px;
      top: 4px;
      left: 4px;
      border-radius: 16px;
      background-color: #fff;
      position: relative;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 120ms;
    }
  
    &.${switchClasses.focusVisible} .${switchClasses.thumb} {
      background-color: ${grey[500]};
      box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
    }
  
    &.${switchClasses.checked} {
      .${switchClasses.thumb} {
        left: 20px;
        top: 4px;
        background-color: #fff;
      }
  
      .${switchClasses.track} {
        background: ${blue[500]};
      }
    }
  
    & .${switchClasses.input} {
      cursor: inherit;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: 1;
      margin: 0;
    }
    `
);
