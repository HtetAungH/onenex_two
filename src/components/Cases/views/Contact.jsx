import { Box, Typography, Container, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Contact = () => {
  return (
    <Box sx={{ py: 12, textAlign: "center", bgcolor: "#F2F2E6" }}>
      <Container maxWidth="md">
        <Typography
          variant="h6"
          display="block"
          gutterBottom
          sx={{ mb: 2, color: "text.secondary" }}
        >
          SEEKING PARTNERS IN CHANGE?
        </Typography>
        <Typography
          variant="h2"
          color="primary"
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Let's talk about <br /> your project.
        </Typography>
        <Button
          variant="outlined"
          className="clickable"
          endIcon={<ArrowForwardIcon />}
          sx={{
            color: "secondary.main",
            px: 4,
            py: 1.5,
            borderWidth: "1px",
            fontSize: "0.9rem",
            letterSpacing: "0.05em",
            borderColor: "border.primary",
          }}
        >
          GET IN TOUCH
        </Button>
      </Container>
    </Box>
  );
};

export default Contact;
