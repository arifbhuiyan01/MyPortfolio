import Head from "next/head";
import Box from "@mui/material/Box";
import IntroBody from "../../components/intro-body";
import Navbar from "../../components/navbar";
import About from "../../components/about";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ width: "100%", position: "fixed", zIndex: 50 }}>
        <Navbar />
      </Box>

      <IntroBody />
      <About />
    </>
  );
}
