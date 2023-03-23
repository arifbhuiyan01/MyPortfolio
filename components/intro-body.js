import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function IntroBody() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "91vh",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: "bold", textAlign: "center" }} variant="h2">
            HEY, I'M ARIF RAHMAN BHUIYAN
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <Typography sx={{ width: "800px", textAlign: "center", mt: 5 }} variant="h6">
              A Frontend focused Web Developer building the Frontend of Websites and Web
              Applications that leads to the success of the overall product
            </Typography>
          </Box>

          <Box sx={{ justifyContent: "center", display: "flex" }}>
            <Button
              sx={{
                px: 6,
                py: 2,
                mt: 5,
                bgcolor: "#FACF0F",
                color: "black",
                fontWeight: "bold",
                letterSpacing: 4,
                "&:hover": {
                  color: "black",
                  backgroundColor: "#FACF0F",
                },
              }}
              variant="contained"
            >
              PROJECTS
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default IntroBody;
