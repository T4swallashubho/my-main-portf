// eslint-disable-next-line no-unused-vars
import React from "react";
import "../stylesheets/Common.css";
import { Box, Button, Container, CssBaseline, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: 'url("/background_landing.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
        }}
      >
        <Container
          component="main"
          maxWidth="sm"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: 4,
            padding: 4,
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            textAlign="center"
            gutterBottom
          >
            Welcome to Your App
          </Typography>
          <Typography
            variant="h5"
            component="div"
            textAlign="center"
            color="text.secondary"
          >
            A place where you can showcase your awesome product or service.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 4,
            }}
          >
            <Button variant="contained" color="primary">
              Get Started
            </Button>
            <Button variant="outlined" color="primary" sx={{ marginLeft: 2 }}>
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
