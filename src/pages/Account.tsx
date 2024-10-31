import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddIcon from "@mui/icons-material/Add";
import HistoryIcon from "@mui/icons-material/History";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsIcon from "@mui/icons-material/Settings";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  ActualItems,
  AddNewItem,
  DeliveryStatus,
  History,
  Payment,
} from "../components/Account";
import Setting from "../components/Account/Setting";

function Account() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/items/get")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <Page>
      {message}
      <Drawer
        sx={{
          width: 200,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            position: "absolute",
            width: 200,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ height: 100 }} />
        <Divider />
        <List>
          <ListItemButton onClick={() => navigate("add-new-item")}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add new item" />
          </ListItemButton>

          <ListItemButton onClick={() => navigate("actual-items")}>
            <ListItemIcon>
              <FormatListBulletedIcon />
            </ListItemIcon>
            <ListItemText primary="Actual items" />
          </ListItemButton>

          <ListItemButton onClick={() => navigate("history")}>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="History" />
          </ListItemButton>

          <ListItemButton onClick={() => navigate("delivery-status")}>
            <ListItemIcon>
              <LocalShippingIcon />
            </ListItemIcon>
            <ListItemText primary="Delivery status" />
          </ListItemButton>

          <ListItemButton onClick={() => navigate("payment")}>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Payment" />
          </ListItemButton>

          <ListItemButton onClick={() => navigate("settings")}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
      </Drawer>
      <Routes>
        <Route path="add-new-item" element={<AddNewItem />} />
        <Route path="actual-items" element={<ActualItems />} />
        <Route path="history" element={<History />} />
        <Route path="delivery-status" element={<DeliveryStatus />} />
        <Route path="payment" element={<Payment />} />
        <Route path="settings" element={<Setting />} />
      </Routes>
    </Page>
  );
}

export default Account;
