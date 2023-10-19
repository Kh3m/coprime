import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import AboutUs from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Mission from "./components/Mission";
import Vision from "./components/Vision";
import Teams from "./components/Teams";

function App() {
  return (
    <>
      <NavBar />
      <Box
        padding={5}
        width={{ base: "full", md: "1024px", lg: "1140px" }}
        margin="auto"
      >
        <Hero />
        <AboutUs />
        <Teams />
        <Services />
        <Mission />
        <Vision />
      </Box>
      <Footer />
    </>
  );
}

export default App;
