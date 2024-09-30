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
import axios from "axios";

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

  return (
    <Page>
      {message}
      <Drawer variant="permanent">
        <Toolbar sx={{ height: 100 }} />
        hi
        <Toolbar sx={{ height: 250 }} />
      </Drawer>
    </Page>
  );
}

export default Account;
