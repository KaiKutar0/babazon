import React from "react";
import Page from "../components/Page";
import {
  Box,
  Button,
  Card,
  collapseClasses,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  return (
    <Page>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Card sx={{ padding: "2%", minWidth: "320px", maxWidth: "600px" }}>
          <Typography variant="h4">Registration</Typography>
          <Box sx={{ padding: "2% 5%" }}>
            <Stack spacing={2}>
              <Stack spacing={2}>
                <TextField label="email" />
                <TextField label="number" />
                <TextField label="adress" />
              </Stack>
              <Box flex={1}></Box>
              <Divider />
              <Stack spacing={2}>
                <TextField label="password" />
                <TextField label="repeat password" />
              </Stack>
            </Stack>
            <Box height={20}></Box>
            <Stack width={150} spacing={1}>
              <Button variant="contained">Sign Up</Button>
              <Typography variant="caption">You have account?</Typography>
              <Button variant="outlined" onClick={() => navigate("/log-in")}>
                Log In
              </Button>
            </Stack>
          </Box>
        </Card>
      </Box>
    </Page>
  );
}

export default SignUp;
