import { Box, Typography, Container, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Contact = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 15 },
        textAlign: "center",
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h5"
          display="block"
          sx={{ mb: 2, color: "text.secondary" }}
        >
          SEEKING PARTNERS IN CHANGE?
        </Typography>
        <Typography
          variant="h2"
          color="primary.main"
          sx={{ mb: { xs: 4, md: 6 }, fontWeight: 800 }}
        >
          Let's talk about <br /> your project.
        </Typography>
        <Button
          variant="outlined"
          className="clickable"
          endIcon={<ArrowForwardIcon />}
          sx={{
            color: "secondary.main",
            px: { xs: 3, md: 4 },
            py: 1.5,
            borderWidth: "1px",
            borderColor: "secondary.main",
            transition: "all 0.3s ease",
            "&:hover": {
              borderColor: "primary.main",
              bgcolor: "rgba(0, 217, 255, 0.05)",
              borderWidth: "1px",
            },
          }}
        >
          GET IN TOUCH
        </Button>
      </Container>
    </Box>
  );
};

export default Contact;
