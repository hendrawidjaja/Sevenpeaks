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

const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case ACTIONS.ADD: {
      newState = { ...initialState.book, book: action.payload };

      console.log(newState);
      break;
    }

    case ACTIONS.REMOVE: {
      newState = { ...initialState.book, book: action.payload };
      console.log(newState);
      break;
    }

    case ACTIONS.ROUTE: {
      newState = { ...initialState.book, book: action.payload };
      console.log(newState);
      break;
    }

    default:
      return state;
  }
};

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  );
};
