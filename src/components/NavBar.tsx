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
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import data from "../data.json";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { increment } from "../app/cartSlice";
function NavBar() {
  const navigate = useNavigate();
  const cartItems = useAppSelector((state) => state.cart.items.length);

  return (
    <Box flexGrow={1}>
      <AppBar position="static">
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
          <Box>
            {/* move to separate component */}
            <Autocomplete
              sx={{ width: 720 }}
              aria-placeholder="Type to search..."
              options={data.map((i) => ({ label: i.name, id: i.id }))}
              renderInput={(params) => <TextField {...params} />}
              //value={}
              onChange={(_, i) => {
                i && navigate(`/details/${i.id}`);
              }}
            />
          </Box>

          <Box flexGrow={1}></Box>
          <Box>
            <Stack direction="row" alignItems="center">
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
              <Button color="inherit">Log In</Button>
              <Button color="inherit">Sign Up</Button>
              <Avatar className="" />
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
