"use client";

import { Box, Container, Typography, List, ListItem, Link } from "@mui/material";

export default function Compliance() {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Compliance Requirements
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Learn about the necessary compliance requirements for exporting goods to international markets.
        </Typography>

        <Box my={3}>
          <Typography variant="h5" gutterBottom>
            Key Compliance Areas
          </Typography>
          <List>
            <ListItem>Trade documentation and labeling requirements.</ListItem>
            <ListItem>Customs clearance and country-specific regulations.</ListItem>
            <ListItem>
              Adhering to international product standards like ASTM or ISO.
            </ListItem>
          </List>
        </Box>

        <Box my={3}>
          <Typography variant="h5" gutterBottom>
            Resources for Compliance
          </Typography>
          <List>
            <ListItem>
              <Link href="https://www.astm.org/products-services/standards-and-publications.html" target="_blank">
                ASTM Standards
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.cpsc.gov/Business--Manufacturing/Business-Education/childrens-products" target="_blank">
                CPSC Guidelines
              </Link>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Container>
  );
}
