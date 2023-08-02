import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Well Wisher</Typography>
        <p>
            Welcome to "Well Wisher," a heartwarming platform dedicated to celebrating lif'es special moments through 
            the power of heartfelt wishes.Our mission is simple yet powerful: to spread joy and warmth in the lives of 
            people worldwide. We believe that a heartfelt wish has the ability to touch hearts, brighten days, and create
            cherished memories. With "Well Wisher," you can be a part of this uplifting experience and make someone's day 
            extra special.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
