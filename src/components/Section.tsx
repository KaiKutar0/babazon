import { Box, Container, Pagination, Stack, Typography } from "@mui/material";
import { title } from "process";
import React, { PropsWithChildren } from "react";

function Section({
  children,
  title,
}: {
  title: string;
  children: JSX.Element[];
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "10px 40px",
      }}
    >
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Stack direction="row" spacing={5}>
        {children}
      </Stack>
      <Pagination
        count={(children.length % 5) + 1}
        onChange={(e, value) => {}}
      />
    </Box>
  );
}

export default Section;
