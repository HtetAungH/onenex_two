import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  CardMedia,
  Skeleton,
  Alert,
  Button,
} from "@mui/material";
import { Refresh as RefreshIcon } from "@mui/icons-material";
import { useCaseStudies } from "../../../hooks/useCaseStudies";

const categoriesList = [
  { id: "ecommerce", label: "E-COMMERCE" },
  { id: "website", label: "WEBSITE" },
  { id: "app", label: "APP" },
];

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState("app");
  const {
    data: allStudies = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useCaseStudies();

  // Calculate counts dynamically from fetched data
  const categories = categoriesList.map((cat) => ({
    ...cat,
    count: allStudies.filter((s) => s.category === cat.id).length,
  }));

  const filteredStudies = allStudies.filter(
    (study) => study.category === activeTab,
  );

  if (isError) {
    return (
      <Box
        sx={{
          px: { xs: 3, md: 10 },
          py: { xs: 10, md: 20 },
          bgcolor: "background.default",
          minHeight: "100vh",
          textAlign: "center",
        }}
      >
        <Alert severity="error" sx={{ mb: 4, maxWidth: "600px", mx: "auto" }}>
          Failed to load case studies: {error.message}
        </Alert>
        <Button
          variant="contained"
          startIcon={<RefreshIcon />}
          onClick={() => refetch()}
          sx={{ bgcolor: "primary.main" }}
        >
          Try Again
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        px: { xs: 3, md: 10 },
        py: { xs: 10, md: 20 },
        bgcolor: "background.default",
        minHeight: "100vh",
      }}
    >
      {/* Filter Tabs */}
      <Box
        sx={{
          display: "flex",
          gap: { xs: 3, md: 6 },
          mb: 8,
          borderBottom: "1px solid",
          borderColor: "common.black",
          pb: 2,
          overflowX: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {categories.map((cat) => (
          <Typography
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            variant="h6"
            sx={{
              cursor: "pointer",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontWeight: activeTab === cat.id ? 700 : 400,
              color: activeTab === cat.id ? "common.black" : "text.secondary",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
              fontSize: { xs: "0.9rem", md: "1.1rem" },
              "&:hover": { color: "common.black" },
            }}
          >
            {isLoading ? (
              <Skeleton width={80} />
            ) : (
              <>
                {cat.label}{" "}
                <span style={{ fontSize: "0.8em" }}>[{cat.count}]</span>
              </>
            )}
          </Typography>
        ))}
      </Box>

      {/* Case Studies Grid */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 8, md: 15 },
        }}
      >
        {isLoading ? (
          // Skeletons while loading
          [...Array(3)].map((_, i) => (
            <Grid
              container
              key={i}
              spacing={4}
              alignItems="center"
              direction={i % 2 === 0 ? "row" : "row-reverse"}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <Skeleton
                  variant="rectangular"
                  height={{ xs: 250, md: 450 }}
                  sx={{ borderRadius: 2 }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ [i % 2 === 0 ? "pl" : "pr"]: { md: 4 } }}>
                  <Skeleton
                    variant="text"
                    width="90%"
                    height={80}
                    sx={{ mb: 2 }}
                  />
                  <Skeleton variant="text" width="50%" height={40} />
                </Box>
              </Grid>
            </Grid>
          ))
        ) : filteredStudies.length > 0 ? (
          filteredStudies.map((study, index) => {
            const isEven = index % 2 === 0;
            return (
              <Grid
                container
                key={study.id}
                spacing={{ xs: 4, md: 8 }}
                alignItems="center"
                direction={isEven ? "row" : "row-reverse"}
              >
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
                        height: { xs: "250px", md: "450px" },
                        display: "block",
                        transition: "transform 0.5s ease-out",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      pl: { xs: 0, md: isEven ? 4 : 0 },
                      pr: { xs: 0, md: !isEven ? 4 : 0 },
                      textAlign: { xs: "left", md: "inherit" },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        lineHeight: 1.1,
                        mb: 2,
                        color: "common.black",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {study.title}
                    </Typography>
                    <Typography variant="h5" sx={{ color: "text.secondary" }}>
                      {study.brand}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            );
          })
        ) : (
          <Typography variant="h5" sx={{ textAlign: "center", py: 10 }}>
            No case studies found for this category.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default CaseStudies;
