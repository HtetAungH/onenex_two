import {
  Box,
  Typography,
  Divider,
  Stack,
  Link,
  IconButton,
  Button,
  Grid,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Footer = ({ sx, ...other }) => (
  <Box
    {...other}
    sx={[
      {
        bgcolor: "primary.main",
        color: "text.white",
        pt: { xs: 8, md: 12 },
        pb: 4,
        px: { xs: 4, md: 10 },
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mb: { xs: 6, md: 10 },
        flexWrap: "wrap",
        gap: 4,
      }}
    >
      <Typography variant="h2" sx={{ maxWidth: { xs: "100%", md: "70%" } }}>
        WE ARE YOUR PARTNER FOR INNOVATION & GROWTH
      </Typography>
      <Box>
        <Button
          variant="outlined"
          color="inherit"
          endIcon={<ArrowForwardIcon />}
          sx={{
            borderColor: "border.whiteMuted",
            borderRadius: 0,
            px: { xs: 2, md: 3 },
            py: 1.5,
            "&:hover": {
              borderColor: "text.white",
              bgcolor: "rgba(255,255,255,0.05)",
            },
          }}
        >
          GET IN TOUCH
        </Button>
      </Box>
    </Box>

    <Grid container spacing={6} sx={{ mb: { xs: 6, md: 15 } }}>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Typography
          variant="overline"
          sx={{ color: "text.whiteMuted", display: "block", mb: 2 }}
        >
          WE ONENEX
        </Typography>
        <Stack spacing={1.5}>
          {["Cases", "Contact us", "Services"].map((t) => (
            <Link
              key={t}
              href="#"
              sx={{
                color: "text.white",
                textDecoration: "none",
                fontSize: "1rem",
                "&:hover": { opacity: 0.8 },
              }}
            >
              {t}
            </Link>
          ))}
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Typography
          variant="overline"
          sx={{ color: "text.whiteMuted", display: "block", mb: 2 }}
        >
          WE OFFER
        </Typography>
        <Stack spacing={1.5}>
          {[
            "UI/UX Development",
            "Web Development",
            "Android Development",
            "iOS Development",
          ].map((t) => (
            <Link
              key={t}
              href="#"
              sx={{
                color: "text.white",
                textDecoration: "none",
                fontSize: "1rem",
                "&:hover": { opacity: 0.8 },
              }}
            >
              {t}
            </Link>
          ))}
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, md: 3 }} sx={{ ml: { md: "auto" } }}>
        <Typography
          variant="overline"
          sx={{ color: "text.whiteMuted", display: "block", mb: 2 }}
        >
          FOLLOW US
        </Typography>
        <Stack direction="row" spacing={2}>
          {[FacebookIcon, InstagramIcon, LinkedInIcon, YouTubeIcon].map(
            (Icon, i) => (
              <IconButton
                key={i}
                sx={{
                  bgcolor: "text.white",
                  color: "primary.main",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                  height: 48,
                  width: 48,
                }}
              >
                <Icon fontSize="medium" />
              </IconButton>
            ),
          )}
        </Stack>
      </Grid>
    </Grid>

    <Divider sx={{ borderColor: "border.whiteMuted", mb: 4 }} />

    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        textAlign: { xs: "center", sm: "left" },
        gap: 3,
        opacity: 0.7,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h4" sx={{ letterSpacing: -1, fontWeight: 900 }}>
          onenex
        </Typography>
      </Box>
      <Typography variant="caption" sx={{ letterSpacing: 1 }}>
        ONENEX © COPYRIGHT 2026. ALL RIGHTS RESERVED.
      </Typography>
    </Box>
  </Box>
);

export default Footer;
