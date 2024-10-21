import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async () => {
        const response = await axios.get("http://localhost:3001/books");

        setBooks(response.data);
    }, []);

    /* // wrapping side  useCallback() hook
    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");

        setBooks(response.data);
    }; */

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
            if (book.id === id) {
                return { ...book, ...response.data };
            }
            return book;
        });
        setBooks(updatedBooks);

        /*
        // OLD code
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle }; // it'll update only 1 property of the book record
            }
            return book;
        });
        setBooks(updatedBooks);
        */
    };

    /*  Let's share actual data instead of static value 5;
    const [count, setCount] = useState(5);
    const valueToShare = {
        count,
        incrementCount: () => {
            setCount(count + 1);
        },
    }; */

    const valueToShare = {
        books: books,
        deleteBookById: deleteBookById,
        editBookById: editBookById,
        createBook: createBook,
        fetchBooks,
    };

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;

// import BooksContext from 'books.js'
// import {Provider} from 'books.js'
