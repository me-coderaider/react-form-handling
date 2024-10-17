import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        // BAD CODE -- WRONG WAY OF UPDATING 'STATE' IN CASE OF ARRAY or OBJECT
        /*
        books.push({ id: 123, title: title });
        console.log(books);
        setBooks(books);
        */
        const updatedBooks = [
            ...books,
            { id: Math.round(Math.random() * 9999), title: title },
        ];
        setBooks(updatedBooks);
    };

    return (
        <div className="app">
            <BookList books={books} />
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;
