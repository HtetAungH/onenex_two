import { Box, Typography } from "@mui/material";
import Image from "../../../assets/Image.png";
const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        bgcolor: "background.dark",
        overflow: "hidden",
      }}
    >
      {/* 3D Phone Mockup Background Image */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "80%",
          backgroundImage: `url(${Image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.8,
        }}
      />

      {/* Main Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "900px",
          px: 4,
          ml: { xs: 0, md: -10 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "text.white",
            mb: 1,
          }}
        >
          BOOST YOUR
        </Typography>
        <Typography
          variant="h1"
          sx={{
            color: "secondary.main",
          }}
        >
          GROWTH
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
