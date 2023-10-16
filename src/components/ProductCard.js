import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useBasket } from "../context/BasketProvider";
import getFromLocalStorage from "../utils/getFromLocalStorage";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const ProductCard = ({ result, mode }) => {
  const { items, setItems, setResults } = useBasket();

  const handleAddToCart = () => {
    const newItems = [...items, result];

    localStorage.setItem("basket", JSON.stringify(newItems));

    setItems(newItems);
  };

  const handleAddToWishList = () => {
    const wishListFromLS = getFromLocalStorage("wishList", []);

    const isPresent = wishListFromLS.find((each) => each.asin === result.asin);

    if (!isPresent) {
      wishListFromLS.push(result);

      localStorage.setItem("wishList", JSON.stringify(wishListFromLS));
    }
  };

  const handleRemoveFromWishList = () => {
    const wishListFromLS = getFromLocalStorage("wishList", []);

    const newItems = wishListFromLS.filter((each) => each.asin !== result.asin);

    localStorage.setItem("wishList", JSON.stringify(newItems));

    setResults(newItems);
  };

  return (
    <Card sx={{ width: "18rem", m: 1 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={result.thumbnail}
        title={result.title}
      />
      <CardContent sx={{ minHeight: 150 }}>
        <Typography gutterBottom variant="h5" component="div">
          £{result.price.current_price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {result.title}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        {mode === "wishList" ? (
          <IconButton aria-label="delete" onClick={handleRemoveFromWishList}>
            <RemoveCircleIcon />
          </IconButton>
        ) : (
          <IconButton aria-label="delete" onClick={handleAddToWishList}>
            <FavoriteIcon />
          </IconButton>
        )}

        <IconButton aria-label="delete" onClick={handleAddToCart}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
