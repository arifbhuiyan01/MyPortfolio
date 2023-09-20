import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <Box sx={{ bgcolor: "black", color: "white", pt: 12, pb: 8, px: 4 }}>
      <Box sx={{ display: { md: "flex" }, justifyContent: "space-around" }}>
        <Box>
          <Typography sx={{ fontWeight: "bold" }} variant="h5">
            ARIF RAHMAN
          </Typography>
          <Typography sx={{ maxWidth: "600px", mt: 2 }} variant="body1">
            A Frontend focused Web Developer building the Frontend of Websites and Web Applications
            that leads to the success of the overall product
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography sx={{ fontWeight: "bold" }} variant="h5">
            SOCIAL
          </Typography>
          <Box sx={{ mt: 2, gap: 2, display: "flex" }}>
            <FacebookIcon />
            <LinkedInIcon />
            <TwitterIcon />
            <YouTubeIcon />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: 6,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Divider
          sx={{
            width: "1300px",
            borderBottomWidth: 2,
            bgcolor: "#3F3F3F",
            mt: 2,
            mb: 2,
          }}
          variant="middle"
        />
        <Typography variant="body2">© Copyright 2023. Made by Arif Rahman</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
