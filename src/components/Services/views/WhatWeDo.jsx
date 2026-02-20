import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: (theme) => theme.palette.background.services,
        px: { xs: 4, md: 8, lg: 12 },
        py: 8,
      }}
    >
      <Box sx={{ maxWidth: "1400px", mx: "auto", width: "100%" }}>
        <Typography
          variant="h5"
          sx={{
            color: "text.white",
            mb: 4,
            display: "block",
          }}
        >
          WHAT DO WE DO?
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 8,
            alignItems: "start",
          }}
        >
          {/* Left Side - Main Heading */}
          <Box
            component={motion.div}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <Typography
              variant="h4"
              component={motion.h3}
              variants={{
                offscreen: {
                  color: theme.palette.text.whiteDimmed,
                  textShadow: "0 0 0px rgba(0, 217, 255, 0)",
                  x: -20,
                  scale: 0.95,
                },
                onscreen: {
                  color: theme.palette.secondary.main,
                  textShadow: `0 0 15px ${theme.palette.secondary.main}88, 0 0 30px ${theme.palette.secondary.main}33`,
                  x: 0,
                  scale: 1,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              sx={{
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              We don't just build website.
            </Typography>

            <Typography
              variant="h4"
              component={motion.h3}
              variants={{
                offscreen: {
                  color: theme.palette.text.whiteDimmed,
                  textShadow: "0 0 0px rgba(0, 217, 255, 0)",
                  x: -20,
                  scale: 0.95,
                },
                onscreen: {
                  color: theme.palette.secondary.main,
                  textShadow: `0 0 15px ${theme.palette.secondary.main}88, 0 0 30px ${theme.palette.secondary.main}33`,
                  x: 0,
                  scale: 1,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              sx={{
                fontWeight: 400,
              }}
            >
              We help build digital products{" "}
              <Box
                component={motion.span}
                variants={{
                  offscreen: {
                    color: theme.palette.text.whiteDimmed,
                    textShadow: "0 0 0px rgba(0, 217, 255, 0)",
                    x: -20,
                    scale: 0.95,
                  },
                  onscreen: {
                    color: theme.palette.secondary.main,
                    textShadow: `0 0 15px ${theme.palette.secondary.main}88, 0 0 30px ${theme.palette.secondary.main}33`,
                    x: 0,
                    scale: 1,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
              >
                functional
              </Box>{" "}
              and{" "}
              <Box
                component={motion.span}
                variants={{
                  offscreen: {
                    color: theme.palette.text.whiteDimmed,
                    textShadow: "0 0 0px rgba(0, 217, 255, 0)",
                    x: -20,
                    scale: 0.95,
                  },
                  onscreen: {
                    color: theme.palette.secondary.main,
                    textShadow: `0 0 15px ${theme.palette.secondary.main}88, 0 0 30px ${theme.palette.secondary.main}33`,
                    x: 0,
                    scale: 1,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
                sx={{
                  display: "inline-block",
                }}
              >
                impactful.
              </Box>
            </Typography>
          </Box>

          {/* Right Side - Description */}
          <Box
            component={motion.div}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            sx={{ pt: { xs: 0, md: 8 } }}
          >
            <Typography
              variant="h6"
              component={motion.p}
              variants={{
                offscreen: {
                  opacity: 0,
                  y: 20,
                  color: theme.palette.text.whiteDimmed,
                },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  color: theme.palette.text.whiteMuted,
                  transition: { duration: 1, delay: 0.4 },
                },
              }}
            >
              Our job is to make it more human. To build digital products, that
              help businesses do better, be better and show up in a way that
              makes our consumers' lives better.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatWeDo;
