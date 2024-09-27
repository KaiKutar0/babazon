import {
  Box,
  Button,
  Card,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Page from "../components/Page";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();

  return (
    <Page>
      <Box sx={{ padding: "5% 40%" }}>
        <Card sx={{ padding: "5%" }}>
          <Typography variant="h4">Authorization</Typography>
          <Divider />
          <Box sx={{ padding: "5% 5%" }}>
            <Stack direction="column" spacing={2}>
              <TextField label="email" />
              <TextField label="password" />
              <Button variant="contained">Log In</Button>
              <Typography variant="caption">
                You don't have account yet?
              </Typography>
              <Button variant="outlined" onClick={() => navigate("/sign-up")}>
                Sign Up
              </Button>
            </Stack>
          </Box>
        </Card>
      </Box>
    </Page>
  );
}

export default LogIn;
