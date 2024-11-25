"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
  OutlinedInput,
  Checkbox,
  ListItemText,
  CircularProgress,
  Card,
  CardContent,
  Divider,
  Grid,
} from "@mui/material";
import remarkGfm from "remark-gfm"; // GitHub Flavored Markdown for tables, task lists, etc.
import ReactMarkdown from "react-markdown";

const countryOptions = ["USA", "European Union", "Japan", "Australia"];

const regionMapping: { [key: string]: string } = {
  USA: "us",
  "European Union": "eu",
  Japan: "jp",
  Australia: "au",
};

interface FormData {
  productName: string;
  productDescription: string;
  hsCode: string;
  category: string;
  targetCountries: string[];
  certifications: string;
  unitValue: string;
}

export default function ExportQuestionnaire() {
  const [formData, setFormData] = useState<FormData>({
    productName: "",
    productDescription: "",
    hsCode: "",
    category: "",
    targetCountries: [],
    certifications: "",
    unitValue: "",
  });

  const [apiResponse, setApiResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMultiSelectChange = (event: any) => {
    setFormData({ ...formData, targetCountries: event.target.value as string[] });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Prepare target region for SerpAPI
    const targetRegion = regionMapping[formData.targetCountries[0]] || "us"; // Default to 'us'

    // Flask API Endpoint
    const apiEndpoint = "http://127.0.0.1:5000/submit-form";

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, targetCountries: [targetRegion] }),
      });

      if (response.ok) {
        const data = await response.json();
        setApiResponse(data);
      } else {
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Export Questionnaire
        </Typography>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 4,
          p: 4,
          border: "1px solid #ddd",
          borderRadius: "10px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <TextField
          label="Product Name"
          name="productName"
          value={formData.productName}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          variant="outlined"
          placeholder="e.g., Leather Handbags"
        />

        <TextField
          label="Product Description"
          name="productDescription"
          value={formData.productDescription}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
          placeholder="Provide a detailed description of your product."
        />

        <TextField
          label="HS Code (if known)"
          name="hsCode"
          value={formData.hsCode}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          variant="outlined"
          placeholder="e.g., 420221"
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Product Category</InputLabel>
          <Select
            name="category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            input={<OutlinedInput label="Product Category" />}
          >
            <MenuItem value="Fashion Accessories">Fashion Accessories</MenuItem>
            <MenuItem value="Food Products">Food Products</MenuItem>
            <MenuItem value="Industrial Goods">Industrial Goods</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Target Countries/Regions</InputLabel>
          <Select
            name="targetCountries"
            multiple
            value={formData.targetCountries}
            onChange={handleMultiSelectChange}
            renderValue={(selected) => (selected as string[]).join(", ")}
            input={<OutlinedInput label="Target Countries/Regions" />}
          >
            {countryOptions.map((country) => (
              <MenuItem key={country} value={country}>
                <Checkbox checked={formData.targetCountries.indexOf(country) > -1} />
                <ListItemText primary={country} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Certifications (if any)"
          name="certifications"
          value={formData.certifications}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          variant="outlined"
          placeholder="e.g., USDA Organic"
        />

        <TextField
          label="Unit Value (in USD)"
          name="unitValue"
          value={formData.unitValue}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          variant="outlined"
          placeholder="e.g., 50"
          type="number"
        />

        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Button type="submit" variant="contained" color="primary" size="large">
            {loading ? <CircularProgress size={24} /> : "Submit"}
          </Button>
        </Box>
      </Box>

      {apiResponse && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            API Response
          </Typography>

          {/* HS Code Details */}
          <Card sx={{ mb: 3, backgroundColor: "#f7f7f7" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>HS Code Details</Typography>
              {apiResponse.hsCodeDetails.map((detail: any, index: number) => (
                <Box key={index} sx={{ mt: 2 }}>
                  <Typography variant="body1">
                    <strong>Description:</strong> {detail.description}
                  </Typography>
                  <Typography variant="body1">
                    <strong>General Tariff:</strong> {detail.tariff_rates.general}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Special Tariff:</strong> {detail.tariff_rates.special}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Other Tariff:</strong> {detail.tariff_rates.other}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>

          {/* Market Analysis */}
          <Card sx={{ mb: 3, backgroundColor: "#e0f7fa" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>Market Analysis</Typography>
              <Typography variant="body1">
                <strong>Average Price:</strong> ${apiResponse.marketAnalysis.average_price}
              </Typography>
              <Typography variant="body1">
                <strong>Median Price:</strong> ${apiResponse.marketAnalysis.median_price}
              </Typography>
              <Typography variant="body1">
                <strong>Min Price:</strong> ${apiResponse.marketAnalysis.min_price}
              </Typography>
              <Typography variant="body1">
                <strong>Max Price:</strong> ${apiResponse.marketAnalysis.max_price}
              </Typography>
              <Typography variant="body1">
                <strong>Suggested Price:</strong> ${apiResponse.marketAnalysis.suggested_price}
              </Typography>
            </CardContent>
          </Card>

          {/* Product Summary */}
          <Card sx={{ backgroundColor: "#f9fbe7" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>Product Summary</Typography>
              <Divider sx={{ my: 2 }} />
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{apiResponse.productSummary.generated_text}</ReactMarkdown>
            </CardContent>
          </Card>
        </Box>
      )}
    </Container>
  );
}
