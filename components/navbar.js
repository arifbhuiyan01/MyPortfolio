import React from "react";

import Link from "react-scroll/modules/components/Link";
import * as Scroll from "react-scroll";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import avatar from "../public/image/avatar.jpg";

const pages = ["Home", "About", "Project", "Contact"];

function Navbar() {
  const scroller = Scroll.scroller;
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (destination) => {
    let off = {
      Home: 0,
      About: -70,
      Project: -70,
      Contact: -70,
    };
    scroller.scrollTo(`${destination}`, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: off[destination],
    });
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#FFFFFF", boxShadow: "none", height: "9vh" }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ mt: 1.6 }} disableGutters>
          <Avatar alt="Remy Sharp" src={avatar.src} sx={{ width: 40, height: 40, mr: 2 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 10,
              display: { xs: "none", md: "flex" },
              alignItems: "center",

              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
              "&:hover": {
                color: "#FACF0F",
              },
            }}
          >
            Arif Bhuiyan
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "none" },
              justifyContent: "end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="Black"
              sx={{
                "&:hover": {
                  color: "#FACF0F",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", sm: "none", top: 23 },
              }}
            >
              {pages.map((page) => (
                <MenuItem sx={{ width: "100vw" }} key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="end">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "end",
            }}
          >
            {pages.map((page) => (
              <Link to={""} key={page}>
                <Button
                  onClick={() => {
                    scrollToSection(`${page}`);
                  }}
                  sx={{
                    m: 2,
                    color: "white",
                    display: "block",
                    color: "black",
                    "&:hover": {
                      color: "#FACF0F",
                      backgroundColor: "#FFFFFF",
                    },
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
