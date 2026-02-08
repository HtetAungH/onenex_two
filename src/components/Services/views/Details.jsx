import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const Details = () => {
  const theme = useTheme();

  const containerVariants = {
    offscreen: {},
    onscreen: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = (color) => ({
    offscreen: {
      opacity: 0.2,
      y: 30,
      scale: 0.9,
      color: theme.palette.text.blackDimmed, // Use theme text color for offscreen
      textShadow: "0 0 0px rgba(0, 0, 0, 0)",
    },
    onscreen: {
      opacity: 1,
      y: 0,
      scale: 1,
      color: color,
      textShadow: `0 0 10px ${color}44, 0 0 20px ${color}22`,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: theme.palette.background.light,
        px: { xs: 4, md: 8 },
        py: 8,
      }}
    >
      <Box
        component={motion.div}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
        sx={{ maxWidth: "1200px", textAlign: "center" }}
      >
        <Typography
          variant="h3"
          component={motion.h3}
          variants={itemVariants(theme.palette.secondary.main)}
          sx={{
            mb: 6,
          }}
        >
          Every small details matter to us. Your colors, Typefaces? How does
          your customer service handle complaints? All of the above and More?
        </Typography>

        <Typography
          variant="h3"
          component={motion.h3}
          variants={itemVariants(theme.palette.primary.main)}
          sx={{
            maxWidth: "900px",
            mx: "auto",
          }}
        >
          This is where we start. Your digital product big or small should be
          unique and should tell the right stories and
        </Typography>
      </Box>
    </Box>
  );
};

export default Details;
