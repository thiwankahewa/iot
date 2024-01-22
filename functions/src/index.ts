import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
const pastData = 50;
export const onMessageCreate = functions.database
  .ref("/sensorData/{timestamp}")
  .onCreate(async (snapshot, context) => {
    const otherPathRef = admin.database().ref("sensorData/");
    const otherPathSnapshot = await otherPathRef.once("value");
    const otherPathData = otherPathSnapshot.val();
    console.log(Object.keys(otherPathData).length);
    const length = Object.keys(otherPathData).length;

    if (length >= pastData) {
      for (let i = 0; i < length - pastData; i++) {
        admin
          .database()
          .ref("sensorData/" + Object.keys(otherPathData)[i])
          .remove();
      }
    }
  });
