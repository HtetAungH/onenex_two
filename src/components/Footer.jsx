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
        pt: 12,
        pb: 4,
        px: { xs: 4, md: 10 },
        minHeight: "100vh",
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
        mb: 10,
        flexWrap: "wrap",
        gap: 4,
      }}
    >
      <Typography variant="h2" sx={{ maxWidth: "70%" }}>
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
            px: 3,
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

    <Grid container spacing={4} sx={{ mb: 15 }}>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Typography
          variant="overline"
          sx={{ color: "text.whiteMuted", display: "block", mb: 3 }}
        >
          WE ONENEX
        </Typography>
        <Stack spacing={2}>
          {["Cases", "Contact us", "Services"].map((t) => (
            <Link
              key={t}
              href="#"
              sx={{
                color: "text.white",
                textDecoration: "none",
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
          sx={{ color: "text.whiteMuted", display: "block", mb: 3 }}
        >
          WE OFFER
        </Typography>
        <Stack spacing={2}>
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
                "&:hover": { opacity: 0.8 },
              }}
            >
              {t}
            </Link>
          ))}
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ ml: { md: "auto" } }}>
        <Typography
          variant="overline"
          sx={{ color: "text.whiteMuted", display: "block", mb: 3 }}
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
                  height: 40,
                  width: 40,
                }}
              >
                <Icon fontSize="small" />
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
        flexWrap: "wrap",
        gap: 2,
        opacity: 0.7,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h4" sx={{ letterSpacing: -1 }}>
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
