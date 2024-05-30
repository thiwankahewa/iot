import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

function ImageGallery() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [imageUrls, setImageUrls] = useState<{ name: string; url: string }[]>(
    []
  );
  const [modalImage, setModalImage] = useState<string | null>(null);

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      const formattedDate = date.format("YYYYMMDD");
      setSelectedDate(formattedDate);
      console.log(formattedDate);
    } else {
      setSelectedDate(null);
    }
  };

  const searchImages = () => {
    if (selectedDate) {
      const storageRef = ref(storage, selectedDate);
      listAll(storageRef)
        .then((res) => {
          const imagePromises = res.items.map((itemRef) => {
            const name = itemRef.name;
            return getDownloadURL(itemRef).then((url) => ({ name, url }));
          });
          Promise.all(imagePromises).then((urls) => {
            setImageUrls(urls);
          });
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    }
  };

  const openModal = (url: string) => {
    setModalImage(url);
  };

  const closeModal = () => {
    setModalImage(null);
    console.log(3);
  };

  return (
    <Paper
      style={{
        borderRadius: "10px",
        padding: "5px",
        opacity: "92%",
      }}
    >
      <Typography className="infoCardTitle" variant="subtitle2">
        Daily Routine Image Gallery
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="Select the date" onChange={handleDateChange} />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <Button
          variant="contained"
          color="primary"
          style={{
            borderRadius: "20px",
            marginTop: "5px",
            width: "250px",
            marginBottom: "20px",
          }}
          onClick={searchImages}
        >
          Search Images
        </Button>
      </div>
      <div style={{ overflow: "auto" }}>
        {imageUrls.map((image, index) => (
          <div
            key={index}
            className="imageGrid"
            onClick={() => openModal(image.url)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={image.url}
              alt={image.name}
              style={{ width: "90%", height: "90%", margin: "5px" }}
            />

            <Typography variant="subtitle2">{image.name}</Typography>
          </div>
        ))}
        <Modal
          open={!!modalImage}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src={modalImage || ""}
              alt="modal"
              style={{ maxWidth: "95%", maxHeight: "100vh" }}
            />
          </div>
        </Modal>
      </div>
    </Paper>
  );
}

export default ImageGallery;
