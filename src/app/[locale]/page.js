import Features from "../components/main/Features";
import Hero from "../components/main/Hero";
import Portfolio from "../components/main/Portfolio";
import SalePoint from "../components/main/SalePoint";
import Price from "../components/main/Price";
import Team from "../components/main/Team";
import Reviews from "../components/main/Reviews";
import Contact from "../components/main/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Portfolio />
      <SalePoint /> 
      <Price />
      <Team />
      <Reviews />
      <Contact />
    </>
  );
}
