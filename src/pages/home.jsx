import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Products from "../components/products";
import AboutPreview from "../components/aboutPreview";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <AboutPreview />
      <Footer />
    </>
  );
}
