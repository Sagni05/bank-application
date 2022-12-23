import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../API/api";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("Appcontext must be within appContextProvider");
  }

  return context;
};

const AppContexProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //add fav

  const addToFavorite = (book) => {
    setFavorite([...favorite, book]);
  };

  // remove from fav

  const removeFromFavorite = (id) => {
    const newFavorite = favorite.filter((book) => book.id !== id);
    setFavorite(newFavorite);
  };

  // search functionalty
  const searchBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query)
  );

  return (
    <AppContext.Provider
      value={{
        favorite,
        addToFavorite,
        removeFromFavorite,
        searchBooks,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContexProvider;
