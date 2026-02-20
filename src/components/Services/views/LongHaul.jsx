import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Counter from "./Counter";

const LongHaul = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: (theme) => theme.palette.background.light,
        px: { xs: 4, md: 8, lg: 12 },
        py: 12,
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "30vh",
          pointerEvents: "none",
        },
      }}
    >
      <Box sx={{ maxWidth: "1400px", mx: "auto", width: "100%" }}>
        {/* Section 1: The Long Haul */}
        <Grid container spacing={8} sx={{ mb: 15 }}>
          <Grid
            size={{ xs: 12, md: 6 }}
            component={motion.div}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "common.black",
                lineHeight: 1.2,
              }}
            >
              WE ARE WITH YOU FOR
              <br />
              THE LONG HAUL
            </Typography>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            component={motion.div}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "common.black",
                mb: 4,
              }}
            >
              As you scale, launch your products, and go into new markets, we
              continue to support your business and get people excited all over
              again.
            </Typography>

            <Box>
              <Typography
                variant="h2"
                sx={{
                  color: "primary.main",
                  mb: 1,
                }}
              >
                <Counter to={2.3} decimals={1} suffix=" YEARS" delay={0.5} />
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "common.black",
                  fontWeight: 600,
                }}
              >
                Industry average length of client - onenex relationship
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Section 2: To Launch */}
        <Grid container spacing={8}>
          <Grid
            size={{ xs: 12, md: 6 }}
            component={motion.div}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "common.black",
                lineHeight: 1.2,
              }}
            >
              WE KNOW WHAT IT TAKES
              <br />
              TO LAUNCH
            </Typography>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            component={motion.div}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "common.black",
                mb: 1,
              }}
            >
              We have launched hundreds of products across categories.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "common.black",
                mb: 4,
              }}
            >
              We have seen it all, done it all.
            </Typography>

            <Grid container spacing={4}>
              <Grid size={{ xs: 6 }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: "primary.main",
                    mb: 1,
                  }}
                >
                  <Counter to={27} delay={0.8} />
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "common.black",
                    fontWeight: 600,
                  }}
                >
                  Industries Sector
                </Typography>
              </Grid>

              <Grid size={{ xs: 6 }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: "primary.main",
                    mb: 1,
                  }}
                >
                  <Counter to={124} suffix="+" delay={0.8} />
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "common.black",
                    fontWeight: 600,
                  }}
                >
                  Product Launch
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LongHaul;
