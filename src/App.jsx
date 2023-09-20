import BookForm from "./components/Form/BookForm";
import BookList from "./components/BookList/BookList";
import app from "./firebase/firebase.config";
import { getFirestore } from "firebase/firestore";
const db = getFirestore(app);
import { collection, addDoc, getDocs, deleteDoc , doc, updateDoc, setDoc  } from "firebase/firestore";
import { useEffect, useState } from "react";
function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("");
  const [books, setBooks] = useState([])
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const addBook = async (newBook) => {
    try {
      const docRef = await addDoc(collection(db, "books"), newBook);
      console.log("Document written with ID: ", docRef.id);
      setSuccess("Added a new book successfully")
      getAllBooks()

      //clear the form
      setTitle("")
      setAuthor("")
      setStatus("")
    } catch (e) {
      console.error("Error adding document: ", e);
      setError("Book Adding Error ", e.message)
    }
  };

  const getAllBooks = async()=>{
    const querySnapshot  = await getDocs(collection(db, "books"))
    const allBooks = []
    querySnapshot.forEach((doc) => allBooks.push({id:doc.id, ...doc.data()}));
    setBooks([...allBooks])
  }

  useEffect(()=>getAllBooks, [])

  const deleteBook = async(bookId)=>{
    await deleteDoc(doc(db, "books", bookId));
    //refetch
    getAllBooks()
  }





  return (
    <div>
      <BookForm
        addBook={addBook}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        status={status}
        setStatus={setStatus}
        error={error}
        success={success}
      ></BookForm>
      <BookList books={books} deleteBook={deleteBook}></BookList>
    </div>
  );
}

export default App;
