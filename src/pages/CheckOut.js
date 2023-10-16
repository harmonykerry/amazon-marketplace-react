import React from "react";
import { useBasket } from "../context/BasketProvider";

import { Alert, Container } from "@mui/material";
import Prices from "../components/Prices";

const CheckOut = () => {
  const { items } = useBasket();

  const checkoutItems = items.reduce((acc, item) => {
    //check if item in accumalator

    const itemIndex = acc.findIndex((each) => each.asin === item.asin);

    if (itemIndex !== -1) {
      //if present increment quantity
      const itemToEdit = acc[itemIndex];
      itemToEdit.quantity += 1;

      return acc;
    } else {
      //else push to acc with quantity as 1
      return [...acc, { ...item, quantity: 1 }];
    }
    //return acc
  }, []);

  return (
    <Container maxWidth="lg">
      {items.length === 0 ? (
        <Alert severity="info">
          You have no items in your basket. Please continue browsing and add
          items to your basket.
        </Alert>
      ) : (
        <Prices checkoutItems={checkoutItems} />
      )}
    </Container>
  );
};

export default CheckOut;
