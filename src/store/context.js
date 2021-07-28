import React, { useReducer, createContext, useMemo } from "react";

export const BookContext = createContext();

export const ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
  ROUTE: "route",
};

const initialState = {
  book: [],
};

const reducer = (book, action) => {
  switch (action.type) {
    case ACTIONS.ADD: {
      book = { ...book, book: action.payload };
      break;
    }

    case ACTIONS.REMOVE: {
      book = { book, book: action.payload };
      break;
    }

    default:
      return book;
  }
};

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  );
};
