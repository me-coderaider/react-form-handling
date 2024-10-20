import { useState, useEffect } from "react";
import axios from "axios";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");

        setBooks(response.data);
    };

    //CORRECT WAY ✅✅✅✅✅
    useEffect(() => {
        fetchBooks();
    }, []);

    //WRONG WAY ❌❌❌❌❌
    // fetchBooks(); // THIS WILL LEAD TO infinite loop of re-rendering App component,
    //thus resulting in too many network requests

    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books", {
            title: title,
        });
        // console.log(response);

        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);

        /*
        const updatedBooks = [
            ...books,
            { id: Math.round(Math.random() * 9999), title: title },
        ];
        setBooks(updatedBooks);
        */

        // BAD CODE -- WRONG WAY OF UPDATING 'STATE' IN CASE OF ARRAY or OBJECT
        /*
        books.push({ id: 123, title: title });
        console.log(books);
        setBooks(books);
        */
    };

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle };
            }
            return book;
        });
        setBooks(updatedBooks);
    };
    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList
                books={books}
                onDelete={deleteBookById}
                onEdit={editBookById}
            />
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;
