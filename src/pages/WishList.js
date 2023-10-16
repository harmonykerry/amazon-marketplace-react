import React, { useEffect } from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import { Alert, Container } from "@mui/material";
import SearchResults from "../components/SearchResults";
import { useBasket } from "../context/BasketProvider";
import getFromLocalStorage from "../utils/getFromLocalStorage";

const WishList = () => {
  const { results, setResults } = useBasket();
  // const [results, setResults] = useState(getFromLocalStorage("wishList", []));

  useEffect(() => {
    const wishListFromLS = getFromLocalStorage("wishList", []);
    setResults(wishListFromLS);
  }, []);

  
  return (
    <Container maxWidth="lg">
      <Box>
        {results.length === 0 && (
          <Alert severity="info">
            You have no items in your wish list. Please continue browsing and
            add items to your wish-list.
          </Alert>
        )}
        {results.length > 0 && (
          <SearchResults results={results} mode="wishList" />
        )}
      </Box>
    </Container>
  );
};

export default WishList;
