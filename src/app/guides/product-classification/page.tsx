"use client";

import { Box, Container, Typography, List, ListItem, Link } from "@mui/material";

export default function ProductClassification() {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Product Type Classification
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Learn about product classifications and how to use HS codes effectively.
        </Typography>

        <Box my={3}>
          <Typography variant="h5" gutterBottom>
            Key Topics
          </Typography>
          <List>
            <ListItem>Overview of the Harmonized System (HS) codes.</ListItem>
            <ListItem>Finding the correct HS code for your product.</ListItem>
            <ListItem>
              Automating compliance with APIs like the Product Type Definitions API.
            </ListItem>
          </List>
        </Box>

        <Box my={3}>
          <Typography variant="h5" gutterBottom>
            Helpful Links
          </Typography>
          <List>
            <ListItem>
              <Link href="https://hts.usitc.gov" target="_blank">
                US ITC HS Codes
              </Link>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Container>
  );
}
