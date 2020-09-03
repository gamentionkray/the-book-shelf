import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBookWithReviewer, clearBookWithReviewer } from "../../actions";

const BookView = ({ match }) => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookWithReviewer(match.params.id));

    return () => {
      dispatch(clearBookWithReviewer());
    };
  }, [dispatch, match]);

  const renderBook = (books) =>
    books.book ? (
      <div className="br_container">
        <div className="br_header">
          <h2>{books.book.name}</h2>
          <h5>{books.book.author}</h5>
          <div className="br_reviewer">
            <span>Reviewed by: </span>
            {books.reviewer.name} {books.reviewer.lastname}
          </div>
        </div>
        <div className="br_review">{books.book.review}</div>
        <div className="br_box">
          <div className="left">
            <div>
              <span>Pages: </span>
              {books.book.pages}
            </div>
            <div>
              <span>Price: </span>
              {books.book.price}
            </div>
          </div>
          <div className="right">
            <span>Rating</span>
            <div>{books.book.rating}/5</div>
          </div>
        </div>
      </div>
    ) : null;

  return (
    <div>
      <h1>{renderBook(books)}</h1>
    </div>
  );
};

export default BookView;
