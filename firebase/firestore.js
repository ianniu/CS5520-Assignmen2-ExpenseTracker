import { collection, addDoc, deleteDoc, doc, setDoc } from "firebase/firestore"
import { firestore } from "./firebase-setup"

export const addExpenseToDB = async (data) => {
  try {
    await addDoc(collection(firestore, "Expenses"), data)
  } catch (e) {
    console.log(e)
  }
}

export const deleteExpenseFromDB = async (id) => {
  try {
    await deleteDoc(doc(firestore, "Expenses", id))
  } catch (e) {
    console.log(e)
  }
}

export const markImportantInDB = async (id) => {
  try {
    await setDoc(
      doc(firestore, "Expenses", id),
      { important: true },
      { merge: true }
    )
  } catch (e) {
    console.log(e)
  }
}

export const markUnimportantInDB = async (id) => {
  try {
    await setDoc(
      doc(firestore, "Expenses", id),
      { important: false },
      { merge: true }
    )
  } catch (e) {
    console.log(e)
  }
}
