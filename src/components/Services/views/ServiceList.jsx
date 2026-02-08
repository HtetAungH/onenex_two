import { Box, Typography, Divider, Container } from "@mui/material";
import { motion } from "framer-motion";

const servicesData = [
  {
    title: "BRANDING",
    description:
      "Figuring out who you are and what you're really about. We help come up with a branding creative that tells your story, get the word out to the people who are looking for you.",
    details: [
      "Findings & Opportunities",
      "Brand Strategy",
      "Identity Development",
      "Digital Collateral",
      "Brand Guidelines",
    ],
  },
  {
    title: "DIGITAL EXPERIENCES",
    description:
      "We help build digital products and solutions that enhance consumer's lives, and help them navigate better, help communicate with each other and solve their problems faster.",
    details: [
      "Marketing Websites",
      "Digital Products",
      "Mobile Apps",
      "Design Systems",
    ],
  },
];

const ServiceList = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", color: "text.white", py: 10 }}>
      <Container maxWidth="lg">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Box sx={{ mb: 10 }}>
              <Typography variant="h2" sx={{ mb: 4, color: "secondary.main" }}>
                {service.title}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 4,
                }}
              >
                <Typography variant="h6" sx={{ flex: 1, opacity: 0.9 }}>
                  {service.description}
                </Typography>

                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      borderBottom: "1px solid",
                      borderColor: "text.white",
                      pb: 1,
                      mb: 2,
                      display: "inline-block",
                      color: "secondary.main",
                    }}
                  >
                    SERVICE DETAIL
                  </Typography>
                  <Box component="ul" sx={{ listStyle: "none", p: 0 }}>
                    {service.details.map((item, i) => (
                      <Typography
                        component="li"
                        variant="h6"
                        key={i}
                        sx={{ py: 0.5, fontWeight: 400 }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
              <Divider sx={{ mt: 8, borderColor: "border.whiteMuted" }} />
            </Box>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
};

export default ServiceList;
