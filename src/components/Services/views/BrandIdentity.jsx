import { Box, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import YomaImg from "../../../assets/yoma.jpg";
import RealEstateImg from "../../../assets/RealEstateIndustry.jpg";
import CorporateImg from "../../../assets/corporate.jpg";

const projects = [
  {
    id: 1,
    title: "YOMA BANK",
    mainText: "BUILDING BRAND IDENTITIES THAT LAST",
    image: YomaImg,
  },
  {
    id: 2,
    title: "STARCITY RESIDENTIAL APP",
    mainText: "REDEFINING RESIDENTIAL EXPERIENCE",
    image: RealEstateImg,
  },
  {
    id: 3,
    title: "CORPORATE SOLUTIONS",
    mainText: "CRAFTING DIGITAL EXCELLENCE",
    image: CorporateImg,
  },
];

const Card = ({ project, index, total }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  // Scale and opacity effects as the card comes into view or sticks
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <Box
      ref={containerRef}
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: 0,
        zIndex: index + 1,
      }}
    >
      <Box
        component={motion.div}
        style={{ scale, opacity }}
        sx={{
          width: { xs: "90%", md: "80%", lg: "60%" },
          height: "80vh",
          borderRadius: "20px 90px 20px 20px",
          overflow: "hidden",
          position: "relative",
          border: "1px solid",
          borderColor: "border.whiteMuted",
          mt: `${index * 40}px`, // Staggering effect
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0, // Shorthand for top, right, bottom, left
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5))",
          },
        }}
      >
        {/* Background Image */}
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "text.white",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              position: "relative",
              mb: 4,
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -10,
                left: "25%",
                width: "50%",
                height: "2px",
                bgcolor: "secondary.main",
              },
            }}
          >
            {project.title}
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: "text.white",
              fontWeight: 900,
              lineHeight: 1.1,
              maxWidth: "800px",
              textTransform: "uppercase",
            }}
          >
            {project.mainText}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const BrandIdentity = () => {
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.background.main,
        position: "relative",
      }}
    >
      {projects.map((project, index) => (
        <Card
          key={project.id}
          project={project}
          index={index}
          total={projects.length}
        />
      ))}

      {/* Scroll indicator or spacing if needed */}
      <Box sx={{ height: "10vh" }} />
    </Box>
  );
};

export default BrandIdentity;
