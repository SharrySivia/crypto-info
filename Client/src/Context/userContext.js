import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("User")) || null,
  watchlist: JSON.parse(localStorage.getItem("watchlist")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        watchlist: [],
      };
    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [...action.payload],
      };
    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: action.payload,
      };
    default:
      throw new Error("Undefined action type");
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
