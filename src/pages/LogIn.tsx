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
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box height={80} />
        <Card sx={{ padding: "2%", minWidth: "320px", maxWidth: "600px" }}>
          <Typography variant="h4">Authorization</Typography>
          <Box height={20} />
          <Box>
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
