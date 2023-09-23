import React, { useState, useEffect } from "react";

const CurrentDateTime: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedDateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
      setCurrentDateTime(formattedDateTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return currentDateTime;
};

export default CurrentDateTime;
