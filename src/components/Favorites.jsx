import React from "react";
import "../App.css";
import { useAppContext } from "./context/appContext";

const Favorites = () => {
  const { favorite, addToFavorite, removeFromFavorite } = useAppContext();
  console.log(favorite);

  const favoriteChecker = (id) => {
    const boolean = favorite.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className="favorite">
      {favorite.length > 0 ? (
        favorite.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h3>{book.title}</h3>
            </div>
            <div>
              <img src={book.image_url} alt="img" />
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
        ))
      ) : (
        <h1>You Don't have any favorite Books</h1>
      )}
    </div>
  );
};

export default Favorites;
