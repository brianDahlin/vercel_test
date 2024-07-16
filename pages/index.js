import Head from "next/head";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import PricingSection from "../components/PricingSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

const Home = () => (
  <div>
    <Head>
      <title>YuVi Technologies - Telegram Clicker Bot Solution</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <HeroSection />
    <FeaturesSection />
    <PricingSection />
    <TestimonialsSection />
    <ContactForm />
    <Footer />
  </div>
);

export default Home;
