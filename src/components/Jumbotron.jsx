import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ProButton from "./ProButton";

export default function Jumbotron() {
  return (
    <Box sx={{ width: "50%", margin: "60px auto", textAlign: "center" }}>
      <Typography variant="h2">
        Fulfil Your Shopping Dreams With Wall Mart
      </Typography>
      <Typography variant="body2" my={4}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id
        inventore doloribus magnam dolorem repellat voluptates veritatis, quo
        animi dolore ab minus tempora, mollitia officia similique aspernatur
        enim placeat? Laborum.
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        sx={{ display: "flex", width: "50%", margin: "0 auto" }}>
        <ProButton variants="fill" type="large">
          View Product
        </ProButton>
        <ProButton type="medium">Exciting Offer</ProButton>
      </Stack>
    </Box>
  );
}
