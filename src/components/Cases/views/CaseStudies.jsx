import React, { useState } from "react";
import { Box, Typography, Grid, CardMedia } from "@mui/material";
import heal from "../../../assets/heal.jpg";
import Loyalty from "../../../assets/Loyalty.jpg";
import yoma from "../../../assets/yoma.jpg";
import corporate from "../../../assets/corporate.jpg";
import portfolio from "../../../assets/portfolio.jpg";
import landingpage from "../../../assets/landingpage.jpg";
import RealEstateIndustry from "../../../assets/RealEstateIndustry.jpg";
import Elearning from "../../../assets/Elearning.jpg";
import Ngo from "../../../assets/Ngo.jpg";
import Shopify from "../../../assets/Shopify.jpg";
import Woocommerce from "../../../assets/Woocommerce.jpg";
import Cart from "../../../assets/Cart.jpg";

const allStudies = [
  {
    id: 1,
    category: "app",
    title: "Heal App: Embracing the Latest Digital Health Technology",
    brand: "Pun Hlaing Hospital",
    // Placeholder image that matches the blue vibe of the screenshot
    img: heal,
    layout: "left",
  },
  {
    id: 2,
    category: "app",
    title: "Bringing Brands Loyalty with Digital Solutions",
    brand: "Pop Zap",
    img: Loyalty,
    layout: "right",
  },
  {
    id: 3,
    category: "app",
    title: "Fintech Revolution in Modern Banking",
    brand: "Yoma Bank",
    img: yoma,
    layout: "left",
  },
  // Dummy data for other categories
  {
    id: 4,
    category: "ecommerce",
    title: "Shopify Store Scale Up",
    brand: "Fashion Brand",
    img: Shopify,
  },
  {
    id: 5,
    category: "ecommerce",
    title: "WooCommerce Migration",
    brand: "Retail Giant",
    img: Woocommerce,
  },
  {
    id: 6,
    category: "ecommerce",
    title: "Custom Cart Solution",
    brand: "Local Shop",
    img: Cart,
  },
  {
    id: 7,
    category: "website",
    title: "Corporate Identity",
    brand: "Tech Corp",
    img: corporate,
  },
  {
    id: 8,
    category: "website",
    title: "Portfolio showcase",
    brand: "Design Agency",
    img: portfolio,
  },
  {
    id: 9,
    category: "website",
    title: "Landing Page Optimization",
    brand: "SaaS Startup",
    img: landingpage,
  },
  {
    id: 10,
    category: "website",
    title: "Real Estate Portal",
    brand: "Starcity",
    img: RealEstateIndustry,
  },
  {
    id: 11,
    category: "website",
    title: "Education Platform",
    brand: "Uni",
    img: Elearning,
  },
  {
    id: 12,
    category: "website",
    title: "NGO Website",
    brand: "Charity",
    img: Ngo,
  },
];

const categoriesList = [
  { id: "ecommerce", label: "E-COMMERCE" },
  { id: "website", label: "WEBSITE" },
  { id: "app", label: "APP" },
];

// Calculate counts dynamically
const categories = categoriesList.map((cat) => ({
  ...cat,
  count: allStudies.filter((s) => s.category === cat.id).length,
}));

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState("app");

  const filteredStudies = allStudies.filter(
    (study) => study.category === activeTab,
  );

  return (
    <Box sx={{ px: 10, py: 10, bgcolor: "#F2F2E6", minHeight: "100vh" }}>
      {/* Filter Tabs */}
      <Box
        sx={{
          display: "flex",
          gap: 6,
          mb: 8,
          borderBottom: "1px solid #000",
          pb: 2,
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        {categories.map((cat) => (
          <Typography
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            variant="subtitle1"
            sx={{
              cursor: "pointer",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: "1.2rem",
              fontWeight: activeTab === cat.id ? 700 : 400,
              color: activeTab === cat.id ? "#000" : "#888",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
              "&:hover": { color: "#000" },
            }}
          >
            {cat.label} <span style={{ fontSize: "0.8em" }}>[{cat.count}]</span>
          </Typography>
        ))}
      </Box>

      {/* Case Studies Grid */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 15 }}>
        {filteredStudies.map((study, index) => {
          // Helper to decide layout direction
          const isEven = index % 2 === 0;
          const direction = isEven ? "row" : "row-reverse";

          return (
            <Grid
              container
              key={study.id}
              spacing={8}
              alignItems="center"
              direction={direction}
            >
              {/* Image Side */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    overflow: "hidden",
                    borderRadius: 2,
                    "&:hover img": { transform: "scale(1.03)" },
                  }}
                >
                  <CardMedia
                    component="img"
                    src={study.img}
                    alt={study.title}
                    sx={{
                      width: "100%",
                      height: "450px",
                      display: "block",
                      transition: "transform 0.5s ease-out",
                    }}
                  />
                </Box>
              </Grid>

              {/* Text Side */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    [isEven ? "pl" : "pr"]: { md: 4 },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: "2rem", md: "2.75rem" },
                      lineHeight: 1.1,
                      mb: 3,
                      color: "#000",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {study.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="p"
                    sx={{
                      fontWeight: 500,
                      color: "#333",
                    }}
                  >
                    {study.brand}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Box>
    </Box>
  );
};

export default CaseStudies;
