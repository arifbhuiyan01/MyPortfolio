import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Construction() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: "5%",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: "20px", sm: "35px", md: "50px" }, fontWeight: "bold" }}
      >
        This page is under construction
      </Typography>
    </Box>
  );
}

export default Construction;
