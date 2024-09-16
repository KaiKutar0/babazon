import { Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <div
      style={{
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
    </div>
  );
}

export default Footer;
