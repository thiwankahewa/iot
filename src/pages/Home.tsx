import backGround from "../assets/background.jpeg";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

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

  return (
    <div style={containerStyle}>
      <div style={{ width: "100%" }}>
        <br />
        <Typography
          style={{
            fontSize: "50px",
            fontWeight: "bolder",
            display: "flex",
            justifyContent: "center",
          }}
        >
          GrowWise Automations
        </Typography>
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
          <img src="src\assets\greenhouse.jpg" width={"100%"} />
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
          <img src="src\assets\intelligent controller.webp" width={"100%"} />
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
          <img src="src\assets\robot1.jpg" width={"100%"} />
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
    </div>
  );
};

export default Home;
