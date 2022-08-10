import * as fs from "fs";
import firebase from "firebase-admin";

export const init = () => {
  let firebaseConfig: string;

  if (process.env.NODE_ENV === "production") {
    firebaseConfig = process.env.FIREBASE_CONFIG as string;
  } else {
    firebaseConfig = fs.readFileSync("../firebaseconfig.json", {
      encoding: "utf8",
    });
  }

  const credential = firebase.credential.cert(JSON.parse(firebaseConfig));
  firebase.initializeApp({ credential });
};
