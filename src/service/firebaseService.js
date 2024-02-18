// import { app } from "../firebaseconfig";

// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   doc,
//   deleteDoc,
//   serverTimestamp,
// } from "firebase/firestore";

// const mealsCollection = collection(app, "meals");
// // const tagCollectionRef = collection(app, "tags");
// // // const deletedCollectionRef = collection(app, "deleted");

// export const createMeal = async (meals) => {
//   try {
//     await addDoc(mealsCollection, { ...meals, date: serverTimestamp() });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getAllMeals = async () => {
//   const data = await getDocs(mealsCollection);
//   return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
// };

// export const updateMeal = async (id, meals) => {
//   const mealsDoc = doc(app, "meals", id);
//   await updateDoc(mealsDoc, meals);
// };

// export const deleteMeal = async (id) => {
//   const mealsDoc = doc(app, "meals", id);
//   await deleteDoc(mealsDoc);
// };

/////////////////// TAG ////////////////
// export const addTag = async (tag) => {
//   try {
//     await addDoc(tagCollectionRef, tag);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getAllTags = async () => {
//   const data = await getDocs(tagCollectionRef);

//   return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
// };

// export const updateTag = async (id, tag) => {
//   // const tagDoc = doc(app, "tags", id);
//   await updateDoc(tagDoc, tag);
// };

// export const deleteTag = async (id) => {
// const tagDoc = doc(app, "tags", id);
// await deleteDoc(tagDoc);
// };

///////////////// DELETED ////////////////
// export const addDeleted = async (meals) => {
//   try {
//     await addDoc(deletedCollectionRef, meals);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const createDeleted = (/** meals */) => {
// get the meals wanted to be deleted
// save it in the deleted app
//delete the meals from meals app
// };

// export const getData = () => {
//   fetch(process.env.REACT_APP_FIREBASE_SERVICE).then((data) => {
//     console.log(data);
//   });
// };
