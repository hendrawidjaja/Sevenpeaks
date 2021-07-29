import React, { useReducer, createContext, useMemo } from "react";

export const BookContext = createContext();

export const ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
  TOGGLE: "toggle",
};

const initial = {
  books: [],
  sortedBy: "Newest first",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE: {
      return state.books.push(action.payload);
    }

    case ACTIONS.REMOVE: {
      break;
    }

    default:
      return state;
  }
};

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  );
};
