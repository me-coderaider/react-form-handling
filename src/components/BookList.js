// import { useContext } from "react";
// import BooksContext from "../context/books";
import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

// function BookList({ books, onDelete, onEdit }) {
function BookList() {
    //const { count, incrementCount } = useContext(BooksContext);
    // const { books } = useContext(BooksContext); // using hook instead of this
    const { books } = useBooksContext(); // using hook instead of this

    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} />;
    });

    return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
