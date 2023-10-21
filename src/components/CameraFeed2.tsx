import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import * as React from "react";

function VideoComponent2() {
  const [imageSrc, setImageSrc] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isDialogOpen1, setIsDialogOpen1] = React.useState(false);

  const closeDialog1 = () => {
    setIsDialogOpen1(false);
  };

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3001");

    socket.addEventListener("message", (event) => {
      setImageSrc(`data:image/jpeg;base64,${event.data}`);
    });

    return () => {
      socket.close();
    };
  }, []);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    setIsDialogOpen1(true);
  };

  return (
    <div onClick={toggleFullScreen} style={{ cursor: "pointer" }}>
      {isFullScreen ? (
        <Dialog open={isDialogOpen1} onClose={closeDialog1}>
          <Paper
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={imageSrc} alt="camera feed" style={{ width: "100%" }} />
          </Paper>
        </Dialog>
      ) : (
        <img src={imageSrc} alt="camera feed" width={300} />
      )}
    </div>
  );
}

export default VideoComponent2;
