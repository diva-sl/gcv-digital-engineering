import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Work from "./pages/Work";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

interface Metric {
  label: string;
  value: string;
}

interface Screenshot {
  label: string;
  path: string;
  type: "storefront" | "admin";
}

interface Project {
  id: string;
  title: string;
  client: string;
  category: "all" | "platform" | "design";
  description: string;
  outcome: string;
  tags: string[];
  image: string;
  challenge: string;
  solution: string;
  architecture: string[];
  metrics: Metric[];
  siteUrl: string;
  adminUrl: string;
  screenshots: Screenshot[];
}

type Page =
  | "home"
  | "about"
  | "products"
  | "services"
  | "contact"
  | "work"
  | "case-study"
  | "privacy"
  | "terms";

type NavPage = Exclude<Page, "case-study">;

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    handlePageChange("case-study");
  };

  const currentNavPage: NavPage =
    currentPage === "case-study"
      ? "work"
      : currentPage === "privacy" || currentPage === "terms"
        ? "home"
        : currentPage;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header
        currentPage={currentNavPage}
        onPageChange={handlePageChange}
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
        {currentPage === "work" && (
          <Work onSelectProject={handleSelectProject} />
        )}
        {currentPage === "case-study" && (
          <CaseStudyDetail
            project={selectedProject}
            onBack={() => handlePageChange("work")}
          />
        )}
        {currentPage === "privacy" && (
          <PrivacyPolicy onBack={() => handlePageChange("home")} />
        )}
        {currentPage === "terms" && (
          <TermsOfService onBack={() => handlePageChange("home")} />
        )}
      </main>
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
