import { Button, Card } from "@mui/material";
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
      style={{
        width: "200px",
        height: "400px",
        backgroundColor: "#F7F7F7",
      }}
    >
      <img width={200} height={200} src={item.image} />
      <div style={{ padding: "0px 10px" }}>
        <p>{item.name}</p>
        <p>{item.price + "$"}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" onClick={() => dispatch(increment(item))}>
            Add
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate(`/details/:${item.id}`)}
          >
            See
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default Item;
