import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";

const Prices = ({ checkoutItems }) => {
  const totalPrice = checkoutItems.reduce((acc, item) => {
    return (acc += item.quantity * item.price.current_price);
  }, 0);

  return (
    <Container maxWidth="md">
      <Card>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {checkoutItems.map((checkoutItem) => {
            return (
              <ListItem key={checkoutItem.asin}>
                <ListItemAvatar sx={{ flex: 1 }}>
                  <Avatar
                    alt={checkoutItem.title}
                    src={checkoutItem.thumbnail}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={checkoutItem.title}
                  secondary={`Qty. ${checkoutItem.quantity} x £${checkoutItem.price.current_price}`}
                  sx={{ flex: 4 }}
                />
                <ListItemText
                  primary={`£${
                    checkoutItem.quantity * checkoutItem.price.current_price
                  }`}
                  sx={{ flex: 1, textAlign: "end" }}
                />
              </ListItem>
            );
          })}
        </List>

        <Divider />

        <CardContent sx={{ textAlign: "end" }}>
          <Typography variant="h5" component="div">
            Total
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            £{totalPrice}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Prices;
