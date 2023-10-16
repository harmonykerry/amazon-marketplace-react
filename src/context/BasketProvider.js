import React from "react";

import { createContext, useContext, useState } from "react";
import getFromLocalStorage from "../utils/getFromLocalStorage";

const BasketContext = createContext();
const BasketProvider = ({ children }) => {
  const [items, setItems] = useState(getFromLocalStorage("basket", []));

  const [results, setResults] = useState(getFromLocalStorage("wishList", []));

  const value = { items, setItems, results, setResults };

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};

export default BasketProvider;

export const useBasket = () => useContext(BasketContext);
