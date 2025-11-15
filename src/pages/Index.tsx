import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CountdownWithProfile } from "@/components/CountdownWithProfile";
import { Features } from "@/components/Features";
import { Tracks } from "@/components/Tracks";
import { ImportantDates } from "@/components/ImportantDates";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CountdownWithProfile />
      <Features />
      <Tracks />
      <ImportantDates />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
