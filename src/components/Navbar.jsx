import { Box, Typography, Stack } from "@mui/material";

const Navbar = ({ onNavigate, currentView }) => {
  const handleItemClick = (item) => {
    if (item === "CONTACT US") {
      onNavigate("contact");
    } else if (item === "CASES") {
      onNavigate("cases");
    } else if (item === "SERVICES") {
      onNavigate("services");
    }
  };

  const navbarColor =
    currentView === "services" ? "secondary.main" : "primary.main";

  return (
    <>
      <Box
        sx={{
          p: 3,
          display: "flex",
          justifyContent: "space-between",
          position: "absolute", // Positioned over the Hero section
          width: "100%",
          zIndex: 10,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 900, color: navbarColor }}>
          ONENEX
        </Typography>
        <Stack direction="row" spacing={4}>
          {["SERVICES", "CASES", "CONTACT US"].map((item) => (
            <Typography
              key={item}
              variant="body1"
              className="clickable"
              onClick={() => handleItemClick(item)}
              sx={{ fontWeight: 500, color: navbarColor, cursor: "pointer" }}
            >
              {item}
            </Typography>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default Navbar;
