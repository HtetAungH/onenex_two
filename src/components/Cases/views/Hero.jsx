import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const theme = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Box
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        height: "95vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Spotlight overlay - only visible when hovering */}
      {isHovering && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 10,
            background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, #d4e157, transparent 80%)`,
            transition: "background 0.1s ease-out",
          }}
        />
      )}
      {/* Foreground Content - Using Box instead of Container */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "lg", // Equivalent to Container's maxWidth="lg"
          mx: "auto", // Center the Box horizontally
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 500,
            color: theme.palette.text.secondary,
            fontSize: { xs: "2.5rem", md: "4rem" },
            lineHeight: 1.1,
            textAlign: "left",
            width: "120%",
          }}
        >
          We are in the business of building capabilities for our clients,
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontWeight: 500,
            color: theme.palette.text.secondary,
            fontSize: { xs: "2.5rem", md: "4.5rem" },
            mt: 25,
            textAlign: "right",
          }}
        >
          from startup to industry leaders
        </Typography>
      </Box>

      {/* Moving Background Text */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10,
        }}
        style={{
          position: "absolute",
          top: "45%",
          left: 0,
          width: "100%", // Maintain full width for the animation
          whiteSpace: "nowrap",
          zIndex: 0,
        }}
      >
        <Typography
          sx={{
            fontSize: "6vw",
            fontWeight: 600,
            color: "transparent",
            WebkitTextStroke: `2px ${theme.palette.primary.main}`,
            letterSpacing: "-0.02em",
          }}
        >
          <span
            style={{
              color: theme.palette.primary.main,
              WebkitTextStroke: "0px",
            }}
          >
            CASE
          </span>{" "}
          STUDIES —{" "}
          <span
            style={{
              color: theme.palette.primary.main,
              WebkitTextStroke: "0px",
            }}
          >
            CASE
          </span>{" "}
          STUDIES —{" "}
          <span
            style={{
              color: theme.palette.primary.main,
              WebkitTextStroke: "0px",
            }}
          >
            CASE
          </span>{" "}
          STUDIES —{" "}
          <span
            style={{
              color: theme.palette.primary.main,
              WebkitTextStroke: "0px",
            }}
          >
            CASE
          </span>{" "}
          STUDIES —{" "}
          <span
            style={{
              color: theme.palette.primary.main,
              WebkitTextStroke: "0px",
            }}
          >
            CASE
          </span>{" "}
          STUDIES —{" "}
          <span
            style={{
              color: theme.palette.primary.main,
              WebkitTextStroke: "0px",
            }}
          >
            CASE
          </span>{" "}
          STUDIES —
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Hero;
