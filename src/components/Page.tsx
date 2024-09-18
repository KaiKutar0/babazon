import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

function Page({
  children,
  title,
}: {
  children?: React.ReactNode;
  title?: string;
}) {
  return (
    <Box sx={{ minHeight: "100vh", padding: "2vh 5vh" }}>
      <Typography variant="h3" fontWeight="bold">
        {title}
      </Typography>

      {children}
    </Box>
  );
}

export default Page;
