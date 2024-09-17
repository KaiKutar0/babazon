import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import data from "../data.json";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import Item from "../components/Item";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { decrement, reset } from "../app/cartSlice";

function Cart() {
  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Page title="Cart">
      <Stack spacing={1.5}>
        {cart.map((i, index) => (
          <Tile item={i} key={index} />
        ))}
      </Stack>
      {cart.length > 0 ? (
        <Box
          sx={{
            padding: "2vh 5vh 0vh 5vh",
            marginBottom: "auto",
          }}
        >
          <Typography variant="h3" fontWeight="bold">
            Total: {cart.reduce((sum, i) => sum + i.price, 0)}
          </Typography>
          <Stack direction="row">
            <Button variant="contained" size="large">
              Buy
            </Button>
            <Box flex={1}></Box>
            <Button
              color="error"
              size="large"
              onClick={() => dispatch(reset())}
            >
              Remove All
            </Button>
          </Stack>
        </Box>
      ) : (
        <Typography variant="h3" fontWeight="bold" textAlign="center">
          Empty
        </Typography>
      )}
    </Page>
  );
}

function Tile({
  item,
}: {
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
}) {
  const dispatch = useAppDispatch();
  return (
    <Card>
      <Stack direction="row" padding="0% 2%" alignItems="center" spacing={2}>
        <Box>
          <img src={item.image} height={80} width={80} />
        </Box>
        <Box>
          <Typography variant="h5" fontWeight="bold">
            {item.name}
          </Typography>
        </Box>
        <Box flex={1}></Box>
        <Box minWidth={200}>
          <Typography variant="h5" fontWeight="bold">
            Price: {item.price} $
          </Typography>
        </Box>
        <Box
          sx={{ cursor: "pointer" }}
          onClick={() => dispatch(decrement(item.id))}
        >
          <DeleteIcon color="error" fontSize="large" />
        </Box>
      </Stack>
    </Card>
  );
}

export default Cart;
