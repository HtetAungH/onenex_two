import { useState, useRef } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "./theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cases from "./components/Cases/Cases";
import Services from "./components/Services/Services";
import ContactPage from "./components/ContactPage";

function App() {
  const [view, setView] = useState("cases"); // Default view
  const topRef = useRef(null);

  const handleNavigate = (target) => {
    setView(target);
    // Scroll to top when navigating
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box ref={topRef} />
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          bgcolor: "background.default",
          marginBottom: "0",
        }}
      >
        <Navbar onNavigate={handleNavigate} currentView={view} />
        {view === "cases" && <Cases />}
        {view === "services" && <Services />}
        {view === "contact" && <ContactPage />}
      </Box>
      <Footer
        sx={{
          position: { xs: "relative", md: "fixed" },
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      />
      {/* Redundant footer to reserve space - only show on desktop where real footer is fixed */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Footer sx={{ visibility: "hidden" }} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
