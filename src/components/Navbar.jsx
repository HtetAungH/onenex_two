import {
  Box,
  Typography,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Navbar = ({ onNavigate, currentView }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleItemClick = (item) => {
    if (item === "CONTACT US") {
      onNavigate("contact");
    } else if (item === "CASES") {
      onNavigate("cases");
    } else if (item === "SERVICES") {
      onNavigate("services");
    }
    setMobileOpen(false);
  };

  const navbarColor =
    currentView === "services" ? "secondary.main" : "primary.main";

  const navItems = ["SERVICES", "CASES", "CONTACT US"];

  return (
    <>
      <Box
        sx={{
          p: { xs: 2, sm: 3 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          width: "100%",
          zIndex: 10,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 900,
            color: navbarColor,
            cursor: "pointer",
          }}
          onClick={() => handleItemClick("CASES")}
        >
          ONENEX
        </Typography>

        {/* Desktop Menu */}
        <Stack
          direction="row"
          spacing={4}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {navItems.map((item) => (
            <Typography
              key={item}
              variant="body1"
              className="clickable"
              onClick={() => handleItemClick(item)}
              sx={{
                fontWeight: 600,
                color: navbarColor,
                cursor: "pointer",
                position: "relative",
                "&:hover": {
                  opacity: 0.8,
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Stack>

        {/* Mobile Menu Icon */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { md: "none" }, color: navbarColor }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100%",
            bgcolor: "background.default",
            p: 3,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon sx={{ color: "primary.main" }} />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item}
              disablePadding
              onClick={() => handleItemClick(item)}
              sx={{ mb: 2 }}
            >
              <ListItemText
                primary={
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      color: "primary.main",
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
