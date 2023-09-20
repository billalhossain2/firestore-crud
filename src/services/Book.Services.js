import app from "../firebase/firebase.config";
import { getFirestore } from "firebase/firestore";
const db = getFirestore(app);
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

class BookServices {
  getAllBooks = () => getDocs(collection(db, "books"));

  addNewBook = (newBook) => addDoc(collection(db, "books"), newBook);

  deleteBook = (bookId) => deleteDoc(doc(db, "books", bookId));

  updateBook = (bookId, toBeUpdateBook) =>
    setDoc(doc(db, "books", bookId), toBeUpdateBook);
}

export default new BookServices();
