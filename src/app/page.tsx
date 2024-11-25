"use client";

import Link from "next/link";
import { Box, Container, Typography, Button, Grid, Card, CardContent } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ backgroundColor: "#f5f7fa", py: 4, borderRadius: "8px" }}>
      <Box textAlign="center" my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Exporter’s Portal
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Navigate through our guides, resources, and tools to streamline your exporting journey.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#e8f5e9", boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Guides
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Learn how to export products effectively, including compliance requirements and best practices.
              </Typography>
              <Box textAlign="center" mt={2}>
                <Link href="/guides" passHref>
                  <Button variant="contained" color="primary">
                    Explore Guides
                  </Button>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#e3f2fd", boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Resources
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Access essential resources, including links and reference materials from official documents.
              </Typography>
              <Box textAlign="center" mt={2}>
                <Link href="/resources" passHref>
                  <Button variant="contained" color="secondary">
                    Browse Resources
                  </Button>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#f9fbe7", boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Questionnaire
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Input product details and generate insights for exporting your products.
              </Typography>
              <Box textAlign="center" mt={2}>
                <Link href="/questionnaire" passHref>
                  <Button variant="contained" color="success">
                    Start Questionnaire
                  </Button>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
