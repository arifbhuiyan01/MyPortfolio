import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import bluecheck from "../public/bluecheck.png";
import ecom from "../public/ecom.png";

function Project() {
  return (
    <>
      <Box sx={{ bgcolor: "#FFFFFF", px: { xs: 2, lg: "300px" } }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", letterSpacing: 4, textAlign: "center", pt: 12 }}
        >
          Projects
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Divider
            sx={{ width: "100px", borderBottomWidth: 5, bgcolor: "#FACF0F", mt: 2, mb: 2 }}
            variant="middle"
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h6" sx={{ textAlign: "center", mt: 2, width: "700px", mb: 8 }}>
            Here you will find more information about me, what I do, and my current skills mostly in
            terms of programming and technology
          </Typography>
        </Box>
        <Box sx={{ py: 4, display: "flex", gap: 13 }}>
          <img
            style={{ boxShadow: 5 }}
            src={bluecheck.src}
            alt="bluecheck"
            width="600px"
            height="380px"
          />
          <Box sx={{ pt: 5 }}>
            <Typography variant="h4" sx={{ letterSpacing: 1, fontWeight: "bold" }}>
              BlueCheck
            </Typography>
            <Typography variant="body1" sx={{ pt: 2 }}>
              Blue Check is a new technology that uses unique codes to identify counterfeit products
              and protect businesses from fake goods. Building a business or brand can take a lot of
              time and effort, and counterfeiters can ruin that hard work by creating fake versions
              of your products. Blue Check is a smart solution that helps businesses protect their
              name, goods, and clients from counterfeiters.
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#FACF0F",
                letterSpacing: 2,
                color: "black",
                fontWeight: "bold",
                px: 4,
                py: 2,
                my: 5,
                "&:hover": {
                  color: "black",
                  backgroundColor: "#FACF0F",
                },
              }}
            >
              See details
            </Button>
          </Box>
        </Box>
        <Box sx={{ py: 6, display: "flex", gap: 13 }}>
          <img
            style={{ boxShadow: 5 }}
            src={ecom.src}
            alt="bluecheck"
            width="600px"
            height="380px"
          />
          <Box sx={{ pt: 5 }}>
            <Typography variant="h4" sx={{ letterSpacing: 1, fontWeight: "bold" }}>
              E-commerce Site
            </Typography>
            <Typography variant="body1" sx={{ pt: 2 }}>
              Blue Check is a new technology that uses unique codes to identify counterfeit products
              and protect businesses from fake goods. Building a business or brand can take a lot of
              time and effort, and counterfeiters can ruin that hard work by creating fake versions
              of your products. Blue Check is a smart solution that helps businesses protect their
              name, goods, and clients from counterfeiters.
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#FACF0F",
                letterSpacing: 2,
                color: "black",
                fontWeight: "bold",
                px: 4,
                py: 2,
                my: 5,
                "&:hover": {
                  color: "black",
                  backgroundColor: "#FACF0F",
                },
              }}
            >
              See details
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Project;
