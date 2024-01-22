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
import "../App.css";

const Home = () => {
  const images1 = [greeanhouse, greeanhouse1, greeanhouse2];
  const images2 = [controller, controller1, controller2];
  const images3 = [robot, robot1, robot2];
  return (
    <div className="pageBackground">
      <br />
      <div id="logo">
        <img src={logo} id="logo_size" />
      </div>

      <br />
      <div>
        <Paper className="infoCard" elevation={5}>
          <Typography className="infoCardTitle" variant="subtitle2">
            Green House Structure
          </Typography>

          <ImageSlider images={images1} />

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            ></AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
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
        <Paper className="infoCard" elevation={5}>
          <Typography className="infoCardTitle" variant="subtitle2">
            Intelligent Controller
          </Typography>
          <ImageSlider images={images2} />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            ></AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
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
        <div>
          <Paper
            className="infoCard"
            elevation={5}
            style={{ marginBottom: "2%" }}
          >
            <Typography className="infoCardTitle" variant="subtitle2">
              Robotic System
            </Typography>
            <ImageSlider images={images3} />
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
              ></AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  A greenhouse is a specialized structure designed to cultivate
                  plants in a controlled environment, primarily for optimizing
                  growth and protection from adverse weather conditions. These
                  structures typically feature transparent walls and roofs made
                  of materials like glass or polycarbonate panels, allowing
                  sunlight to enter while trapping heat. The greenhouse effect,
                  where incoming solar radiation is absorbed and re-radiated as
                  heat, maintains a warmer temperature within, fostering ideal
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
      </div>
      <div style={{ position: "fixed", bottom: "0%", right: "0%" }}>
        <PlaygroundSpeedDial />
      </div>
    </div>
  );
};

export default Home;
