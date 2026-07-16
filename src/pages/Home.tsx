import Hero from "../components/Hero";
import Features from "../components/Features";
import Capabilities from "../components/Capabilities";
import About from "../components/About";
import CTA from "../components/CTA";

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

interface HomeProps {
  onPageChange: (page: Page) => void;
}

export default function Home({ onPageChange }: HomeProps) {
  return (
    <>
      <Hero onPageChange={onPageChange} />
      <Features />
      <Capabilities onPageChange={onPageChange} />
      <About />
      <CTA onPageChange={onPageChange} />
    </>
  );
}
