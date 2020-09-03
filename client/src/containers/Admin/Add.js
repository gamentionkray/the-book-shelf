import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addBook, clearNewBook } from "../../actions";

const AddBook = (props) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [review, setReview] = useState("");
  const [pages, setPages] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");

  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const showNewBook = (book) =>
    book.post ? (
      <div className="conf_link">
        Book Added!!! <Link to={`/books/${book.bookId}`}>Click here</Link>
      </div>
    ) : null;

  const submitForm = (e) => {
    e.preventDefault();
    let data = {
      name,
      author,
      review,
      pages,
      rating,
      price,
      ownerId: props.user.login.id,
    };
    dispatch(addBook(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearNewBook());
    };
  }, [dispatch]);

  return (
    <div className="rl_container article">
      <form onSubmit={submitForm}>
        <h2>Add a review</h2>

        <div className="form_element">
          <input
            type="text"
            placeholder="Enter book name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form_element">
          <input
            type="text"
            placeholder="Enter author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <textarea
          value={review}
          placeholder="Enter review"
          onChange={(e) => setReview(e.target.value)}
        />

        <div className="form_element">
          <input
            type="number"
            placeholder="Enter pages"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
        </div>

        <div className="form_element">
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option val="1">1</option>
            <option val="2">2</option>
            <option val="3">3</option>
            <option val="4">4</option>
            <option val="5">5</option>
          </select>
        </div>

        <div className="form_element">
          <input
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button type="submit">Add Review</button>

        {books.newBook ? showNewBook(books.newBook) : null}
      </form>
    </div>
  );
};

export default AddBook;
