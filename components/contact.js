import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import * as Scroll from "react-scroll";
import Link from "react-scroll/modules/components/Link";
import Modal from "@mui/material/Modal";

function Contact() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Element = Scroll.Element;
  const [data, setData] = useState({
    name: "",
    email: "",
    body: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    let info = {
      user_name: data.name,
      user_email: data.email,
      message: data.body,
    };

    emailjs.send("service_q600krg", "template_oymuq0a", info, "p1RpOJlO0qy5R_NZS").then(
      (result) => {
        console.log(result.text);
        if (result.text == "OK") {
          setOpen(true);
        }
      },
      (error) => {
        console.log(error.text);
      },
    );

    setData({ name: "", email: "", body: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => {
      const newData = { ...prevData };
      newData[`${name}`] = value;
      return newData;
    });
  };

  return (
    <Element id="Contact" name="Contact">
      <Box sx={{ px: "10%" }}>
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
            Feel free to Contact me by submitting the form below and I will get back to you as soon
            as possible
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 15, mt: 6 }}>
          <Box
            sx={{
              bgcolor: "white",
              width: { xs: "100%", md: "85%", lg: "800px" },
              borderRadius: 4,
            }}
          >
            <form
              onSubmit={sendEmail}
              style={{
                display: "flex",

                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                required
                sx={{ bgcolor: "#F0F0F0", width: "80%", mt: 6 }}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="name"
                value={data.name}
                onChange={(event) => handleChange(event)}
              />
              <TextField
                required
                type={"email"}
                sx={{ bgcolor: "#F0F0F0", width: "80%", mt: 6 }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                value={data.email}
                onChange={(event) => handleChange(event)}
              />
              <TextField
                required
                sx={{ bgcolor: "#F0F0F0", width: "80%", mt: 6 }}
                id="outlined-basic"
                label="Message"
                variant="outlined"
                rows={10}
                multiline
                name="body"
                value={data.body}
                onChange={(event) => handleChange(event)}
              />
              <Button
                variant="contained"
                type="submit"
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
                SUBMIT
              </Button>
            </form>
          </Box>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,

            bgcolor: "background.paper",

            boxShadow: 24,
            p: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Thanks for your feedback
          </Typography>
          <Typography id="modal-modal-description" variant="body2" sx={{ mt: 2 }}>
            We will back to you as soon as possible
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
            onClick={handleClose}
          >
            {" "}
            close
          </Button>
        </Box>
      </Modal>
    </Element>
  );
}

export default Contact;
