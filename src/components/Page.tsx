import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

function Page({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}) {
  return (
    <Box sx={{ minHeight: "100vh", padding: "2vh 5vh" }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="#000000" href="/">
          Babazon
        </Link>
        <Typography sx={{ color: "text.primary" }}>Cart</Typography>
      </Breadcrumbs>
      <Typography variant="h3" fontWeight="bold">
        {title}
      </Typography>
      <Box
        sx={{ backgroundColor: "#F7F7F7", height: "100%", padding: "5vh 0vh" }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Page;
