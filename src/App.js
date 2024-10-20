import { useEffect, useContext } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
    const { fetchBooks } = useContext(BooksContext);

    //CORRECT WAY ✅✅✅✅✅
    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    //WRONG WAY ❌❌❌❌❌
    // fetchBooks(); // THIS WILL LEAD TO infinite loop of re-rendering App component,
    //thus resulting in too many network requests

    /*
    // MOVING ALL OF THIS TO THE CONEXT FILE books.js
    const [books, setBooks] = useState([]);
    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");

        setBooks(response.data);
    }; 
    
    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books", {
            title: title,
        });
        // console.log(response);
 
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
 
        
        // const updatedBooks = [
        //     ...books,
        //     { id: Math.round(Math.random() * 9999), title: title },
        // ];
        // setBooks(updatedBooks);
        
 
        // BAD CODE -- WRONG WAY OF UPDATING 'STATE' IN CASE OF ARRAY or OBJECT
        // books.push({ id: 123, title: title });
        // console.log(books);
        // setBooks(books);
    }; 
 
    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
 
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    }; 
 
    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
        });
 
        // updating the all the properties of book record i.e complete book record
        const updatedBooks = books.map((book) => {
            if (book.id == id) {
                return { ...book, ...response.data };
            }
            return book;
        });
        setBooks(updatedBooks);
 
        
        // OLD code
        // const updatedBooks = books.map((book) => {
        //     if (book.id === id) {
        //         return { ...book, title: newTitle }; // it'll update only 1 property of the book record
        //     }
        //     return book;
        // });
        // setBooks(updatedBooks);
     };
     */

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    );
}

export default App;
