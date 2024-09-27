import { AppBar, Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        position: "absolute",
        width: "100%",
        height: "95px",
        backgroundColor: "#414141",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Typography color="#FFFFFF" variant="h3">
        Yurii Vasylchenko 2024
      </Typography>
    </Box>
  );
}

export default Footer;
