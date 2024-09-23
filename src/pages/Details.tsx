import data from "../data.json";
import { useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import comments from "../comments.json";
import { useAppDispatch } from "../app/hooks";
import { decrement, increment } from "../app/cartSlice";
import Page from "../components/Page";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { theme } from "../theme";

function Details() {
  const { id } = useParams();
  const item = data.filter((i) => i.id.toString() === id?.replace(":", ""))[0];
  const dispatch = useAppDispatch();

  return (
    <Page title="Details">
      <Stack spacing={8} sx={{ padding: "2% 0%" }}>
        <Stack direction="row" justifyContent="space-between">
          <Card sx={{ padding: "1.5%" }}>
            <Box sx={{ padding: "10px 0px" }}>
              <Typography variant="h3">{item.name}</Typography>
              <Divider />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "20px 0px",
              }}
            >
              <img width={400} height={400} src={item.image} />
            </Box>
            <Box>
              <Typography>Price: {item.price}</Typography>
              <Button
                variant="contained"
                onClick={() => dispatch(increment(item))}
              >
                Add
              </Button>
            </Box>
          </Card>
          <Box flex={1}></Box>
          <Card sx={{ flex: 1, padding: "1.5%" }}>
            <Typography>{item.description}</Typography>
          </Card>
        </Stack>

        <Card
          sx={{
            padding: "1% 1%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Stack spacing={1} flex={2}>
              <TextField multiline />
              <Box>
                <Button variant="outlined">Post</Button>
              </Box>
            </Stack>
            <Box flex={1}></Box>
          </Box>

          <Stack spacing={1}>
            {comments.map((i, key) => (
              <Comment comment={i} key={key} />
            ))}
          </Stack>
        </Card>
      </Stack>
    </Page>
  );
}

function Comment({
  comment,
}: {
  comment: {
    id: number;
    name: string;
    image: string;
    text: string;
    review: number;
  };
}) {
  return (
    <Card>
      <Box
        sx={{
          padding: "1% 1% 1% 1%",
        }}
      >
        <Stack justifyContent="space-between" direction="row">
          <Stack direction="row" spacing={1}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar alt={comment.name} src={comment.image} />
            </Box>
            <Box>
              <Typography>{comment.name}</Typography>
              <Rating readOnly value={comment.review} />
            </Box>
          </Stack>

          <Box
            sx={{
              padding: "0% 1% 0% 1%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography>{comment.text}</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <ThumbUpOffAltIcon color="success" />
            <ThumbDownOffAltIcon color="error" />
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}

export default Details;
