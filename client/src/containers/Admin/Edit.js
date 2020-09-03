import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getBook, updateBook, clearBook, deleteBook } from "../../actions";

const EditBook = (props) => {
  const [_id, set_id] = useState("");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [review, setReview] = useState("");
  const [pages, setPages] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");

  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    let data = {
      name,
      author,
      review,
      pages,
      rating,
      price,
      _id,
    };
    dispatch(updateBook(data));
  };

  const deletePost = () => {
    dispatch(deleteBook(props.match.params.id));
  };

  const redirectUser = () => {
    setTimeout(() => {
      props.history.push("/user/userReviews");
    }, 1000);
  };

  useEffect(() => {
    dispatch(getBook(props.match.params.id));
    return () => {
      dispatch(clearBook());
    };
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    if (Object.keys(books).length !== 0) {
      let book = books.book;

      set_id(book._id);
      setName(book.name);
      setAuthor(book.author);
      setReview(book.review);
      setPages(book.pages);
      setRating(book.rating);
      setPrice(book.price);
    }
  }, [books]);

  return (
    <div className="rl_container article">
      {books.updateBook ? (
        <div className="edit_confirm">
          Post Updated!!!{" "}
          <Link to={`/books/${books.book._id}`}>Click here</Link>
        </div>
      ) : null}

      {books.postDeleted ? (
        <div className="red_tag">
          Post Deleted
          {redirectUser()}
        </div>
      ) : null}

      <form onSubmit={submitForm}>
        <h2>Edit review</h2>

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

        <button type="submit">Edit Review</button>

        <div className="delete_post" onClick={deletePost}>
          <div className="button">Delete Review</div>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
