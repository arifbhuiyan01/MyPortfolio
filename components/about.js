import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import * as Scroll from "react-scroll";
import Link from "react-scroll/modules/components/Link";
import Container from "@mui/material/Container";

function About() {
  const Element = Scroll.Element;
  return (
    <Element id="About" name="About">
      <Box sx={{ bgcolor: "#F7F7F7", px: "10%" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", letterSpacing: 3, textAlign: "center", pt: 12 }}
        >
          ABOUT ME
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Divider
            sx={{ width: "80px", borderBottomWidth: 5, bgcolor: "#FACF0F", mt: 2 }}
            variant="middle"
          />
        </Box>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h6" sx={{ textAlign: "center", mt: 2, width: "700px" }}>
              Here you will find more information about me, what I do, and my current skills mostly
              in terms of programming and technology
            </Typography>
          </Box>
          <Box sx={{ display: { md: "flex" }, mt: 12, gap: 15 }}>
            <Box sx={{ width: { md: "65%" } }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                Get to know me!
              </Typography>
              <Typography variant="h6">
                I&apos;m a Frontend Web Developer building the Front-end of Websites and Web
                Applications that leads to the success of the overall product. Check out some of my
                work in the Projects section. I also like sharing content related to the stuff that
                I have learned over the years in Web Development so it can help other people of the
                Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful
                content related to Web Development and Programming I&apos;m open to Job
                opportunities where I can contribute, learn and grow. If you have a good opportunity
                that matches my skills and experience then don&apos;t hesitate to contact me.
              </Typography>

              <Link to="Contact" smooth={true} duration={1500} offset={-70}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#FACF0F",
                    letterSpacing: 2,
                    color: "black",
                    fontWeight: "bold",
                    px: 4,
                    py: 2,
                    mt: 5,
                    mb: 8,
                    "&:hover": {
                      color: "black",
                      backgroundColor: "#FACF0F",
                    },
                  }}
                >
                  CONTACT
                </Button>
              </Link>
            </Box>

            <Box sx={{ width: { md: "35%" }, pb: 8 }}>
              <Typography
                sx={{
                  bgcolor: "#E7E7E7",
                  display: "inline-block",
                  px: 3,
                  py: 1,
                  borderRadius: 1,
                  mr: 2,
                  my: 1,
                }}
              >
                HTML
              </Typography>
              <Typography
                sx={{
                  bgcolor: "#E7E7E7",
                  display: "inline-block",
                  px: 3,
                  py: 1,
                  borderRadius: 1,
                  mr: 2,
                }}
              >
                CSS
              </Typography>
              <Typography
                sx={{
                  bgcolor: "#E7E7E7",
                  display: "inline-block",
                  px: 3,
                  py: 1,
                  borderRadius: 1,
                  mr: 2,
                }}
              >
                JavaScript
              </Typography>
              <Typography
                sx={{
                  bgcolor: "#E7E7E7",
                  display: "inline-block",
                  px: 3,
                  py: 1,
                  mr: 2,
                  borderRadius: 1,
                }}
              >
                React
              </Typography>

              <Typography
                sx={{
                  bgcolor: "#E7E7E7",
                  display: "inline-block",
                  px: 3,
                  py: 1,
                  borderRadius: 1,
                  mr: 2,
                  my: 1,
                }}
              >
                Next.js
              </Typography>
              <Typography
                sx={{
                  bgcolor: "#E7E7E7",
                  display: "inline-block",
                  px: 3,
                  py: 1,
                  borderRadius: 1,
                  mr: 2,
                }}
              >
                MUI
              </Typography>
              <Typography
                sx={{
                  bgcolor: "#E7E7E7",
                  display: "inline-block",
                  px: 3,
                  py: 1,
                  borderRadius: 1,
                  mr: 2,
                }}
              >
                Tailwind
              </Typography>
              <Typography
                sx={{
                  bgcolor: "#E7E7E7",
                  display: "inline-block",
                  px: 3,
                  py: 1,
                  mr: 2,
                  borderRadius: 1,
                }}
              >
                SASS
              </Typography>

              <Typography
                sx={{
                  bgcolor: "#E7E7E7",
                  display: "inline-block",
                  px: 3,
                  py: 1,
                  borderRadius: 1,
                  mr: 2,
                  my: 1,
                }}
              >
                GIT
              </Typography>
              <Typography
                sx={{
                  bgcolor: "#E7E7E7",
                  display: "inline-block",
                  px: 3,
                  py: 1,
                  borderRadius: 1,
                  mr: 2,
                }}
              >
                Github
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Element>
  );
}

export default About;
