import { Box, Typography, useMediaQuery } from "@mui/material";
import { theme } from "../theme";

function Footer() {
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
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
      <Typography color="#FFFFFF" variant={matches ? "h3" : "h4"}>
        Yurii Vasylchenko 2024
      </Typography>
    </Box>
  );
}

export default Footer;
