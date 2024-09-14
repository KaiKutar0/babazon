import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Item({
  item,
}: {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  };
}) {
  const navigate = useNavigate();
  const handleAddingItem = (id: string, item: Object) => {
    sessionStorage.setItem(id, JSON.stringify(item));
  };

  return (
    <div
      style={{
        width: "200px",
        height: "400px",
        backgroundColor: "grey",
        boxShadow: "#00000026 1.95px 1.95px 2.6px",
      }}
    >
      <img width={200} height={200} src={item.image} />
      <div style={{ padding: "0px 10px" }}>
        <p>{item.name}</p>
        <p>{item.price + "$"}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            onClick={() => handleAddingItem(item.id.toString(), item)}
          >
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
    </div>
  );
}

export default Item;
