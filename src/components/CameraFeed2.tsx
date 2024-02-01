import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function VideoComponent2() {
  const [imageSrc, _setImageSrc] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://192.168.118.85:3001");

    socket.addEventListener("message", (event) => {
      _setImageSrc(`data:image/jpeg;base64,${event.data}`);
      console.log(event.data);
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <Paper>
        <Typography className="infoCardTitle" variant="subtitle2">
          Live Camera Feed
        </Typography>
        <img
          src={imageSrc}
          style={{
            width: "100%",
            borderRadius: 20,
            padding: "1.5%",
          }}
        />
      </Paper>
    </div>
  );
}

export default VideoComponent2;
