"use client";

import { Box, Container, Typography, List, ListItem, Button, Divider } from "@mui/material";
import Link from "next/link";

export default function Guides() {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Exporting Guides
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Explore various topics to enhance your exporting knowledge. Click on a guide to learn more.
        </Typography>
        <Divider sx={{ my: 2 }} />
        <List>
          <ListItem>
            <Link href="/guides/compliance" passHref>
              <Button variant="contained" color="primary">Compliance Requirements</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/guides/tariff-management" passHref>
              <Button variant="contained" color="secondary">Tariff and Duty Management</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/guides/international-standards" passHref>
              <Button variant="contained" color="success">International Standards</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/guides/product-classification" passHref>
              <Button variant="contained" color="warning">Product Type Classification</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/guides/api-compliance" passHref>
              <Button variant="contained" color="info">API Utilization for Compliance</Button>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}
