import backGround from "../assets/background.jpeg";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ImageSlider from "../DefinedFunctions/ImageSlider";
import greeanhouse from "../assets/greenhouse.jpg";
import greeanhouse1 from "../assets/greenhouse1.webp";
import greeanhouse2 from "../assets/greenhouse2.webp";
import robot from "../assets/robot.jpg";
import robot1 from "../assets/robot1.jpg";
import robot2 from "../assets/robot2.jpg";
import controller from "../assets/intelligentcontroller.webp";
import controller1 from "../assets/intelligentcontroller1.webp";
import controller2 from "../assets/intelligentcontroller2.webp";
import PlaygroundSpeedDial from "../components/Contact";
import logo from "../assets/logo.png";

const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${backGround})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
    backgroundPosition: "center center",
    width: "100vw",
    height: "100vh",
    paddingLeft: "10px",
  };

  const images1 = [greeanhouse, greeanhouse1, greeanhouse2];
  const images2 = [controller, controller1, controller2];
  const images3 = [robot, robot1, robot2];
  return (
    <div style={containerStyle}>
      <br />
      <div
        style={{
          fontSize: "50px",
          fontWeight: "bolder",
          display: "flex",
          justifyContent: "center",
          marginTop: "-180px",
          marginBottom: "-120px",
        }}
      >
        <img src={logo} style={{ width: "400px" }} />
      </div>

      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Paper
          elevation={2}
          style={{
            marginRight: "10px",
            width: "33%",
            opacity: "95%",
            height: "100%",
          }}
        >
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
            }}
            fontSize={20}
          >
            Green House Structure
          </Typography>
          <ImageSlider images={images1} />

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            ></AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                A greenhouse is a specialized structure designed to cultivate
                plants in a controlled environment, primarily for optimizing
                growth and protection from adverse weather conditions. These
                structures typically feature transparent walls and roofs made of
                materials like glass or polycarbonate panels, allowing sunlight
                to enter while trapping heat. The greenhouse effect, where
                incoming solar radiation is absorbed and re-radiated as heat,
                maintains a warmer temperature within, fostering ideal
                conditions for plant growth. Greenhouses are equipped with
                ventilation systems to regulate temperature and humidity,
                ensuring plants receive optimal care. They play a pivotal role
                in agriculture, enabling year-round cultivation, research, and
                propagation of various plant species, contributing to food
                security and scientific advancement.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>
        <Paper
          elevation={2}
          style={{
            marginRight: "10px",
            width: "33%",
            opacity: "95%",
            height: "100%",
          }}
        >
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
            }}
            fontSize={20}
          >
            Intelligent Controller
          </Typography>
          <ImageSlider images={images2} />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            ></AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                A greenhouse is a specialized structure designed to cultivate
                plants in a controlled environment, primarily for optimizing
                growth and protection from adverse weather conditions. These
                structures typically feature transparent walls and roofs made of
                materials like glass or polycarbonate panels, allowing sunlight
                to enter while trapping heat. The greenhouse effect, where
                incoming solar radiation is absorbed and re-radiated as heat,
                maintains a warmer temperature within, fostering ideal
                conditions for plant growth. Greenhouses are equipped with
                ventilation systems to regulate temperature and humidity,
                ensuring plants receive optimal care. They play a pivotal role
                in agriculture, enabling year-round cultivation, research, and
                propagation of various plant species, contributing to food
                security and scientific advancement.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>
        <Paper
          elevation={2}
          style={{
            marginRight: "10px",
            width: "33%",
            opacity: "95%",
            height: "100%",
          }}
        >
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
            }}
            fontSize={20}
          >
            Robotic System
          </Typography>
          <ImageSlider images={images3} />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            ></AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                A greenhouse is a specialized structure designed to cultivate
                plants in a controlled environment, primarily for optimizing
                growth and protection from adverse weather conditions. These
                structures typically feature transparent walls and roofs made of
                materials like glass or polycarbonate panels, allowing sunlight
                to enter while trapping heat. The greenhouse effect, where
                incoming solar radiation is absorbed and re-radiated as heat,
                maintains a warmer temperature within, fostering ideal
                conditions for plant growth. Greenhouses are equipped with
                ventilation systems to regulate temperature and humidity,
                ensuring plants receive optimal care. They play a pivotal role
                in agriculture, enabling year-round cultivation, research, and
                propagation of various plant species, contributing to food
                security and scientific advancement.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </div>
      <div>
        <PlaygroundSpeedDial />
      </div>
    </div>
  );
};

export default Home;
