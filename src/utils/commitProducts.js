import { doc, writeBatch } from "firebase/firestore";
import { db } from "../config/firebase.config";

export const commitProducts = async (dataObject) => {
  const batch = writeBatch(db);
  Object.entries(dataObject).forEach(([category, products]) => {
    products.forEach((product, index) => {
      const docRef = doc(db, "productos", `${category}-item-0${index}`);
      batch.set(docRef, product);
    });
  });

  try {
    await batch.commit();
    console.log("Batch insert completed successfully!");
  } catch (error) {
    console.log("Error during batch insert:", error);
  }
};
