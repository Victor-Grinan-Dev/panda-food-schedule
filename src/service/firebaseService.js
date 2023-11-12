import { db } from "../firebase";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

export const postData = (data) => {};
export const getData = () => {
  fetch(process.env.REACT_APP_FIREBASE_SERVICE).then((data) => {
    console.log(data);
  });
};
