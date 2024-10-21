import { useState } from "react";
// import BooksContext from "../context/books";
import useBooksContext from "../hooks/use-books-context";

// Now, this BookCreate component won't be receiving any props now as it was receiving 'onCreate()' props
// Now, it can just reach to the CONTEXT and use the requried STATE or HANDLER-FUNCTION
function BookCreate() {
    const [title, setTitle] = useState("");

    // const { createBook } = useContext(BooksContext);
    const { createBook } = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        // onCreate(title);
        createBook(title);
        setTitle("");
    };

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={submitHandler}>
                <label>Enter book title:</label>
                <input
                    className="input"
                    value={title}
                    onChange={handleChange}
                />
                <button className="button">Create!</button>
            </form>
        </div>
    );
}

export default BookCreate;
