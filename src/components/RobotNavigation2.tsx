import { useEffect, useState } from "react";
import topView from "../assets/topView.png";
import sideView from "../assets/sideView.png";
import zoomedTopView from "../assets/zoomedTopView.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./ImageMap.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { database } from "../firebase";
import { ref, update, onValue } from "firebase/database";
import Lottie from "lottie-react";
import scanAni from "../assets/scanAni.json";
import robotRunning from "../assets/robotRunning.json";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import Typography from "@mui/material/Typography";

function RobotNavigation2() {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [cursorPosition, setCursorPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [images, _setImages] = useState<string[]>([
    topView,
    sideView,
    zoomedTopView,
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [inspect, setInspect] = useState<boolean>(false);
  const [transplant, setTransplant] = useState<boolean>(false);
  const [startTransplant, setStartTransplant] = useState<boolean>(false);
  const [dailyRoutine, setDailyRoutine] = useState<boolean>(false);
  const [dotsCount, setDotsCount] = useState(1);

  const generateDots = () => {
    const dots = Array.from({ length: dotsCount }, (_, index) => (
      <span key={index} style={{ marginRight: "4px" }}>
        .
      </span>
    ));

    return dots;
  };

  const handleMouseOver = (area: string) => {
    setHoveredArea(area);
  };

  const handleMouseOut = () => {
    setHoveredArea(null);
  };

  const handleClick = (displayValue: string, intValue: number) => {
    if (selectedAreas.length === 3) return;

    if (!selectedAreas.includes(displayValue)) {
      setSelectedAreas([...selectedAreas, displayValue]);

      if (selectedAreas.length === 0) {
        if (transplant) {
          update(ref(database, "robot/"), { area2: intValue });
        } else {
          update(ref(database, "robot/"), { area: intValue });
        }
        setCurrentImageIndex((currentIndex) => currentIndex + 1);
      } else if (selectedAreas.length === 1) {
        if (transplant) {
          update(ref(database, "robot/"), { rack2: intValue });
        } else {
          update(ref(database, "robot/"), { rack: intValue });
        }

        setCurrentImageIndex((currentIndex) => currentIndex + 1);
      } else if (selectedAreas.length === 2) {
        if (transplant) {
          update(ref(database, "robot/"), { channel2: intValue });
        } else {
          update(ref(database, "robot/"), { channel: intValue });
        }
        return;
      }
    }
  };

  const handleMouseMove = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const handleBreadcrumbClick = (index: number) => {
    setSelectedAreas(selectedAreas.slice(0, index));
    setCurrentImageIndex(index);
  };

  const handleInspect = () => {
    setTransplant(false);
    setSelectedAreas([]);
    setCurrentImageIndex(0);
    update(ref(database, "robot/"), { inspect: true });
  };

  const handleTransplant = () => {
    setSelectedAreas([]);
    setCurrentImageIndex(0);
    setTransplant(true);
  };

  const handleStartTransplant = () => {
    setSelectedAreas([]);
    setCurrentImageIndex(0);
    setTransplant(false);
    update(ref(database, "robot/"), { transplant: true });
  };

  useEffect(() => {
    setTransplant(false);
    onValue(ref(database, "robot"), (snapshot) => {
      const data = snapshot.val();
      setInspect(data.inspect);
      setDailyRoutine(data.dailyRoutine);
      setStartTransplant(data.transplant);
    });

    const intervalId = setInterval(() => {
      setDotsCount((prevCount) => (prevCount < 5 ? prevCount + 1 : 1));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Paper
      style={{ borderRadius: "10px", padding: "5px", position: "relative" }}
    >
      {inspect && !dailyRoutine && !startTransplant ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "5%",
          }}
        >
          <h3>Travelling to location{generateDots()}</h3>
          <Lottie
            animationData={robotRunning}
            style={{
              width: "80%",
            }}
          />
        </div>
      ) : !inspect && dailyRoutine && !startTransplant ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "5%",
          }}
        >
          <h3>Daily Routine{generateDots()}</h3>
          <Lottie
            animationData={scanAni}
            style={{
              width: "80%",
            }}
          />
        </div>
      ) : !inspect && !dailyRoutine && startTransplant ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "5%",
          }}
        >
          <h3>Transplanting{generateDots()}</h3>
          <Lottie
            animationData={scanAni}
            style={{
              width: "80%",
            }}
          />
        </div>
      ) : (
        <div>
          <Tooltip
            title={
              <Typography
                style={{
                  overflow: "hidden",
                  fontSize: "10px",
                }}
              >
                Select the position of a specific plant for
                inspection/transplant
              </Typography>
            }
            style={{ position: "absolute", top: 0, right: 0 }}
          >
            <IconButton color="primary">
              <ErrorOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1080 1080"
            onMouseMove={handleMouseMove}
          >
            <image width="100%" href={images[currentImageIndex]}></image>

            {currentImageIndex === 0 && (
              <>
                <text className="imageTitle" x="540" y="50">
                  Select the Area
                </text>

                <rect
                  x="306"
                  y="100"
                  fill="#000"
                  opacity={hoveredArea === "Area 1" ? "0.3" : "0"}
                  width="100"
                  height="100"
                  onMouseOver={() => handleMouseOver("Area 1")}
                  onMouseOut={handleMouseOut}
                  onClick={() => handleClick("Area 1", 1)}
                ></rect>
                <rect
                  x="642"
                  y="102"
                  fill="#000"
                  opacity={hoveredArea === "Area 2" ? "0.3" : "0"}
                  width="100"
                  height="100"
                  onMouseOver={() => handleMouseOver("Area 2")}
                  onMouseOut={handleMouseOut}
                  onClick={() => handleClick("Area 2", 2)}
                ></rect>
                <rect
                  x="306"
                  y="902"
                  fill="#000"
                  opacity={hoveredArea === "Area 3" ? "0.3" : "0"}
                  width="100"
                  height="100"
                  onMouseOver={() => handleMouseOver("Area 3")}
                  onMouseOut={handleMouseOut}
                  onClick={() => handleClick("Area 3", 3)}
                ></rect>
                <rect
                  x="642"
                  y="904"
                  fill="#000"
                  opacity={hoveredArea === "Area 4" ? "0.3" : "0"}
                  width="100"
                  height="100"
                  onMouseOver={() => handleMouseOver("Area 4")}
                  onMouseOut={handleMouseOut}
                  onClick={() => handleClick("Area 4", 4)}
                ></rect>
              </>
            )}
            {currentImageIndex === 1 && (
              <>
                <text className="imageTitle" x="540" y="50">
                  Select the Rack
                </text>

                <rect
                  x="286"
                  y="268"
                  fill="#000"
                  opacity={hoveredArea === "Rack 2" ? "0.3" : "0"}
                  width="513"
                  height="50"
                  onMouseOver={() => handleMouseOver("Rack 2")}
                  onMouseOut={handleMouseOut}
                  onClick={() => handleClick("Rack 2", 2)}
                />
                <rect
                  x="288"
                  y="463"
                  fill="#000"
                  opacity={hoveredArea === "Rack 1" ? "0.3" : "0"}
                  width="513"
                  height="50"
                  onMouseOver={() => handleMouseOver("Rack 1")}
                  onMouseOut={handleMouseOut}
                  onClick={() => handleClick("Rack 1", 1)}
                />
                <rect
                  x="288"
                  y="661"
                  fill="#000"
                  opacity={hoveredArea === "Nursary" ? "0.3" : "0"}
                  width="513"
                  height="50"
                  onMouseOver={() => handleMouseOver("Nursary")}
                  onMouseOut={handleMouseOut}
                  onClick={() => handleClick("Nursary", 0)}
                />
              </>
            )}
            {currentImageIndex === 2 && (
              <>
                <text className="imageTitle" x="540" y="50">
                  Select the Channel
                </text>

                <rect
                  x="281"
                  y="334"
                  fill="#000"
                  opacity={hoveredArea === "Channel 1" ? "0.3" : "0"}
                  width="518"
                  height="110"
                  onMouseOver={() => handleMouseOver("Channel 1")}
                  onMouseOut={handleMouseOut}
                  onClick={() => handleClick("Channel 1", 1)}
                />
                <rect
                  x="281"
                  y="609"
                  fill="#000"
                  opacity={hoveredArea === "Channel 2" ? "0.3" : "0"}
                  width="518"
                  height="110"
                  onMouseOver={() => handleMouseOver("Channel 2")}
                  onMouseOut={handleMouseOut}
                  onClick={() => handleClick("Channel 2", 2)}
                />
              </>
            )}
          </svg>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
              {selectedAreas.map((area, index) => (
                <Link
                  key={index}
                  color="text.primary"
                  underline="hover"
                  onClick={() => handleBreadcrumbClick(index)}
                >
                  {area}
                </Link>
              ))}
            </Breadcrumbs>
          </div>
          {hoveredArea && cursorPosition && (
            <div
              className="hoverEffect"
              style={{
                top: cursorPosition.y - 20,
                left: cursorPosition.x - 200,
              }}
            >
              {hoveredArea}
            </div>
          )}

          {selectedAreas.length === 3 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              {!transplant ? (
                <ButtonGroup variant="outlined" size="small">
                  <Tooltip
                    title={
                      <Typography
                        style={{
                          overflow: "hidden",
                          fontSize: "10px",
                        }}
                      >
                        Start Inspection of the selected plant
                      </Typography>
                    }
                    style={{ position: "absolute", top: 0, right: 0 }}
                  >
                    <Button
                      onClick={handleInspect}
                      style={{ marginBottom: "2%" }}
                    >
                      Inspect
                    </Button>
                  </Tooltip>
                  <Tooltip
                    title={
                      <Typography
                        style={{
                          overflow: "hidden",
                          fontSize: "10px",
                        }}
                      >
                        Click here and select next location for transplanting
                      </Typography>
                    }
                    style={{ position: "absolute", top: 0, right: 0 }}
                  >
                    <Button
                      onClick={handleTransplant}
                      style={{ marginBottom: "2%" }}
                    >
                      Transplant
                    </Button>
                  </Tooltip>
                </ButtonGroup>
              ) : (
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleStartTransplant}
                  style={{ marginBottom: "2%" }}
                >
                  Transplant
                </Button>
              )}
            </div>
          )}
        </div>
      )}
    </Paper>
  );
}

export default RobotNavigation2;
