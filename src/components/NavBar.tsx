import React, { useContext, useEffect, useState } from "react";
import logo from "../img/logo.svg";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Autocomplete,
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import data from "../data.json";
import { useAppSelector } from "../app/hooks";
import Search from "./Search";

function NavBar() {
  const navigate = useNavigate();
  const cartItems = useAppSelector((state) => state.cart.items.length);

  return (
    <Box flexGrow={1}>
      <AppBar
        position="sticky"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <Box>
              <img height={80} width={80} src={logo} alt="" />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography variant="h3">Babazon</Typography>
            </Box>
          </Box>
          <Box flexGrow={1}></Box>

          <Search data={data} />

          <Box flexGrow={1}></Box>
          <Box>
            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton size="large" color="inherit">
                <Badge
                  color="secondary"
                  badgeContent={cartItems}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <ShoppingCartIcon
                    sx={{ cursor: "pointer" }}
                    fontSize="large"
                    onClick={() => navigate("/cart")}
                  />
                </Badge>
              </IconButton>
              <Button color="inherit" onClick={() => navigate("/log-in")}>
                Log In
              </Button>
              <Button color="inherit" onClick={() => navigate("/sign-up")}>
                Sign Up
              </Button>
              <Tooltip title="Guest">
                <Avatar />
              </Tooltip>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
