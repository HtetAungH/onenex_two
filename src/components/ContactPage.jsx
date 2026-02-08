import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ContactPage = () => {
  const fieldSx = {
    mb: 4,
    "& .MuiInputBase-input": {
      color: "text.secondary",
    },
    "& .MuiInputBase-input::placeholder": {
      color: "text.secondary",
      opacity: 1,
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "border.dimmed", // Use a dimmed border color from theme or default
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "primary.main",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomColor: "text.primary",
    },
  };

  return (
    <Box
      sx={{
        p: { xs: 4, md: 10 },
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container spacing={10} alignItems="center">
        <Grid sx={{ mb: { xs: 4, md: 30 } }} size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h1"
            sx={{
              color: "primary.main",
            }}
          >
            We're ready if you are. Let's get to it
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box component="form">
            <TextField
              fullWidth
              variant="standard"
              placeholder="Name"
              sx={fieldSx}
            />
            <TextField
              fullWidth
              variant="standard"
              placeholder="Business (OPTIONAL)"
              sx={fieldSx}
            />
            <TextField
              fullWidth
              variant="standard"
              placeholder="Phone"
              sx={fieldSx}
            />
            <TextField
              fullWidth
              variant="standard"
              placeholder="Email"
              sx={fieldSx}
            />
            <TextField
              fullWidth
              variant="standard"
              placeholder="Tell us about your project"
              multiline
              rows={2}
              sx={fieldSx}
            />
            <Box sx={{ textAlign: "right", mt: 4 }}>
              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  borderRadius: 1,
                  px: 4,
                  py: 1,
                  borderColor: "text.primary",
                  color: "text.primary",
                  "&:hover": {
                    backgroundColor: "rgba(91, 33, 182, 0.04)",
                    borderColor: "primary.main",
                  },
                }}
              >
                SEND
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactPage;
