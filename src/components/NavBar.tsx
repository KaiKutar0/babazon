import logo from "../img/logo.svg";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  SwipeableDrawer,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import data from "../data.json";
import { useAppSelector } from "../app/hooks";
import Search from "./Search";
import { theme } from "../theme";
import MenuIcon from "@mui/icons-material/Menu";
import { SyntheticEvent, useState } from "react";

function NavBar() {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const cartItems = useAppSelector((state) => state.cart.items.length);

  return (
    <Box flexGrow={1}>
      <AppBar
        position="static"
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
              <Typography variant={matches ? "h3" : "h4"}>Babazon</Typography>
            </Box>
          </Box>
          {matches ? (
            <>
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
            </>
          ) : (
            <>
              <Box flexGrow={1}></Box>
              <IconButton color="inherit" onClick={() => setOpenDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                anchor="top"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
              >
                <Button color="inherit" onClick={() => navigate("/cart")}>
                  Cart
                </Button>
                <Divider />
                <Button color="inherit" onClick={() => navigate("/log-in")}>
                  Log in
                </Button>
                <Divider />
                <Button color="inherit" onClick={() => navigate("/sign-up")}>
                  Sign up
                </Button>
              </SwipeableDrawer>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
