import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Countdown } from "@/components/Countdown";
import { Features } from "@/components/Features";
import { Tracks } from "@/components/Tracks";
import { ImportantDates } from "@/components/ImportantDates";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Countdown />
      <Features />
      <Tracks />
      <ImportantDates />
      <Footer />
    </div>
  );
};

export default Index;
