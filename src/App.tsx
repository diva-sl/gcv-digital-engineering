import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Work from "./pages/Work";

function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "about" | "products" | "services" | "contact" | "work"
  >("home");
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onSelectSection={setActiveSection}
      />
      <main className="pt-20 overflow-x-hidden flex-1">
        {currentPage === "home" && <Home />}
        {currentPage === "about" && <AboutUs />}
        {currentPage === "products" && <Products />}
        {currentPage === "services" && (
          <Services
            activeSection={activeSection}
            onClearSection={() => setActiveSection(null)}
          />
        )}
        {currentPage === "contact" && <ContactUs />}
        {currentPage === "work" && <Work />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
