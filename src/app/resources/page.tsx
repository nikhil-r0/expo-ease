"use client";

import { Box, Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";

const resources = [
  {
    title: "ASTM Standards",
    description:
      "Explore international standards for testing and material specifications. Useful for ensuring product quality and compliance.",
    link: "https://www.astm.org/products-services/standards-and-publications.html",
  },
  {
    title: "CPSC Guidelines for Children’s Products",
    description:
      "Learn about safety requirements for exporting products for children to the US, including testing and labeling.",
    link: "https://www.cpsc.gov/Business--Manufacturing/Business-Education/childrens-products",
  },
  {
    title: "Amazon Product Compliance",
    description:
      "Understand Amazon's product compliance guidelines to ensure seamless listing and exporting.",
    link: "https://sellercentral.amazon.in/spec/productcompliance/form?clientName=spec_web",
  },
  {
    title: "DGFT RoDTEP Guidelines",
    description:
      "Access the official DGFT guidelines for the Remission of Duties and Taxes on Exported Products (RoDTEP) scheme.",
    link: "https://www.dgft.gov.in/CP/?opt=RoDTEP",
  },
  {
    title: "Export Duty Drawback Rates",
    description:
      "Download the latest duty drawback rates for exported goods, updated periodically by Indian trade authorities.",
    link: "https://fieo.org/uploads/files/file/Drawback%20Rates%20w_e_f%202020.pdf",
  },
];

export default function Resources() {
  return (
    <Container maxWidth="lg" sx={{ backgroundColor: "#f5f7fa", py: 4, borderRadius: "8px" }}>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Resources
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Explore official documentation, standards, and helpful links to enhance your exporting journey.
        </Typography>
        <Grid container spacing={4}>
          {resources.map((resource, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: "#e3f2fd", boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {resource.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {resource.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href={resource.link}
                    target="_blank"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
