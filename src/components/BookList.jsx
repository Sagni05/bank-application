import React from "react";
import "../App.css";

import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router-dom";

const BookList = () => {
  const navigate = useNavigate();

  const { favorite, addToFavorite, removeFromFavorite, searchBooks } =
    useAppContext();

  const favoriteChecker = (id) => {
    const boolean = favorite.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className="book-list">
      {searchBooks.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h3>{book.title}</h3>
          </div>
          <div>
            <img
              src={book.image_url}
              alt="img"
              onClick={() => navigate(`/books/${book.id}`)}
            />
          </div>
          <div>
            {favoriteChecker(book.id) ? (
              <button onClick={() => removeFromFavorite(book.id)}>
                Remove from Favourites
              </button>
            ) : (
              <button onClick={() => addToFavorite(book)}>
                Add to Favourites
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
