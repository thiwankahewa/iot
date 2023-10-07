// VideoComponent.js (inside your React app)
import { useEffect, useRef } from "react";

const VideoComponent = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3001"); // WebSocket connection to your Python server

    ws.onmessage = (event) => {
      // Handle received video frames

      const frameData = event.data; // Assuming you receive base64 encoded video frames

      // Decode frameData
      const decodedFrameData = atob(frameData);
      const uint8Array = new Uint8Array(decodedFrameData.length);
      for (let i = 0; i < decodedFrameData.length; i++) {
        uint8Array[i] = decodedFrameData.charCodeAt(i);
      }

      if (videoRef.current) {
        // Create a blob from the Uint8Array
        const blob = new Blob([uint8Array], { type: "image/jpg" });

        // Create a URL for the blob
        const blobUrl = URL.createObjectURL(blob);

        // Set the src attribute of the videoRef to the created URL
        videoRef.current.src = blobUrl;

        console.log(videoRef.current);
      }
    };

    ws.onclose = () => {
      console.log("Connection closed");
    };

    return () => {
      ws.close(); // Close the WebSocket connection when component unmounts
    };
  }, []);

  return (
    <video ref={videoRef} width="640" height="480" autoPlay controls></video>
  );
};

export default VideoComponent;
