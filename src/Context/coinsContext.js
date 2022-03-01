import { createContext, useReducer } from "react";

export const CoinsContext = createContext();

const initialState = {
  coinsData: [],
  coinsIndex: {},
  isLoading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_COINS_DATA":
      return {
        coinsData: action.payload.coinsData,
        coinsIndex: action.payload.coinsIndex,
      };
    case "UPDATE_COINS_DATA":
      return {
        ...state,
        coinsData: action.payload,
      };
    default:
      throw new Error("Undefined action type");
  }
};

export const CoinsDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CoinsContext.Provider value={[state, dispatch]}>
      {children}
    </CoinsContext.Provider>
  );
};
