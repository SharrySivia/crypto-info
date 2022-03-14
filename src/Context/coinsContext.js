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
        ...state,
        coinsData: action.payload.coinsData,
        coinsIndex: action.payload.coinsIndex,
      };
    case "UPDATE_COINS_DATA":
      return {
        ...state,
        coinsData: action.payload,
        isLoading: false,
      };
    default:
      throw new Error("Undefined action type");
  }
};

export const CoinsDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const coinsState = state;
  return (
    <CoinsContext.Provider value={[coinsState, dispatch]}>
      {children}
    </CoinsContext.Provider>
  );
};
