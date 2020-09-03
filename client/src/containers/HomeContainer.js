import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../actions";
import BookItem from "../widgets/BookItem";

const HomeContainer = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks(1, 0, "desc"));
  }, [dispatch]);

  const renderItems = (books) =>
    books.list
      ? books.list.map((item) => <BookItem {...item} key={item._id} />)
      : null;

  const loadmore = () => {
    let count = books.list.length;
    dispatch(getBooks(1, count, "desc", books.list));
  };

  return (
    <div>
      {renderItems(books)}
      <div className="loadmore" onClick={loadmore}>
        Load More
      </div>
    </div>
  );
};

export default HomeContainer;
