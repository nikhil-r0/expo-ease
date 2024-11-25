"use client";

import { Box, Container, Typography, List, ListItem, Link } from "@mui/material";

export default function TariffManagement() {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Tariff and Duty Management
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Understand how to manage tariffs and calculate duties for your products.
        </Typography>

        <Box my={3}>
          <Typography variant="h5" gutterBottom>
            Key Concepts
          </Typography>
          <List>
            <ListItem>Determining HS codes for your products.</ListItem>
            <ListItem>Calculating duties based on tariff classifications.</ListItem>
            <ListItem>Leveraging duty exemption programs (e.g., RoDTEP).</ListItem>
          </List>
        </Box>

        <Box my={3}>
          <Typography variant="h5" gutterBottom>
            Tools and References
          </Typography>
          <List>
            <ListItem>
              <Link href="https://hts.usitc.gov" target="_blank">
                US ITC Tariff Schedule
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.cbic.gov.in/" target="_blank">
                CBIC (India) Tariff Information
              </Link>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Container>
  );
}
