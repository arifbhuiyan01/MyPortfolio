import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          letterSpacing: 4,
          textAlign: "center",
          pt: 12,
          textTransform: "capitalize",
        }}
      >
        CONTACT
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Divider
          sx={{ width: "60px", borderBottomWidth: 5, bgcolor: "#FACF0F", mt: 2, mb: 2 }}
          variant="middle"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h6" sx={{ textAlign: "center", mt: 2, width: "700px", mb: 5 }}>
          Feel free to Contact me by submitting the form below and I will get back to you as soon as
          possible
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 15, mt: 6 }}>
        <Box sx={{ bgcolor: "white", width: "45%", borderRadius: 4 }}>
          <form
            style={{
              display: "flex",

              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              sx={{ bgcolor: "#F0F0F0", width: "80%", mt: 6 }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              sx={{ bgcolor: "#F0F0F0", width: "80%", mt: 6 }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <TextField
              sx={{ bgcolor: "#F0F0F0", width: "80%", mt: 6 }}
              id="outlined-basic"
              label="Message"
              variant="outlined"
              rows={10}
              multiline
            />
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
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
