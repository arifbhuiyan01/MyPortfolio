import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as Scroll from "react-scroll";
import Link from "react-scroll/modules/components/Link";

function IntroBody() {
  const Element = Scroll.Element;
  return (
    <Element id="Home" name="Home">
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
            <Typography
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: { xs: 35, sm: 35, md: 50, xl: 60 },
                px: 1,
              }}
              variant="h2"
            >
              HEY, I&apos;M ARIF RAHMAN BHUIYAN
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Typography
                sx={{
                  width: { xs: "100%", sm: "520px", xl: "800px" },
                  textAlign: "center",
                  mt: 5,
                  px: { xs: 5 },
                }}
                variant="h6"
              >
                A Frontend focused Web Developer building the Frontend of Websites and Web
                Applications that leads to the success of the overall product
              </Typography>
            </Box>

            <Box sx={{ justifyContent: "center", display: "flex" }}>
              <Link to="Project" smooth={true} duration={1500}>
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
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Element>
  );
}

export default IntroBody;
