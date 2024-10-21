import { useState } from "react";
// import BooksContext from "../context/books";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
    // const { editBookById } = useContext(BooksContext);
    const { editBookById } = useBooksContext();

    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // onSubmit(book.id, title);
        onSubmit();

        editBookById(book.id, title);
    };

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;
