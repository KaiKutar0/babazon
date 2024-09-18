import { Box, Button, Card, Divider, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { increment } from "../app/cartSlice";
function Item({
  item,
}: {
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
  };
}) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: "25vh",
        height: "45vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img style={{ width: "22.5vh" }} src={item.image} />
      </Box>
      <Box flex={1}></Box>
      <Divider />
      <Box>
        <Typography>{item.name}</Typography>
        <Divider />
        <Typography>Price: {item.price + "$"}</Typography>
      </Box>
      <Box textAlign="center">
        <Stack>
          <Button variant="contained" onClick={() => dispatch(increment(item))}>
            Add
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate(`/details/:${item.id}`)}
          >
            See
          </Button>
        </Stack>
      </Box>
    </Card>
  );
}

export default Item;
