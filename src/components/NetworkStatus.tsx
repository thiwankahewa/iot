import Lottie from "lottie-react";
import "../App.css";
import offlineAni from "../assets/offlineAni.json";

function NetworkStatus() {
  return (
    <div id="offline">
      <div className="offlineContent">
        <h1>No internet connection</h1>
        <p>Your connection appears to be offline.Check the connection.</p>
      </div>
      <Lottie className="offlineContent" animationData={offlineAni} />
    </div>
  );
}

export default NetworkStatus;
