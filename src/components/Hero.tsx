import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            className="fill-background"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 pt-32 pb-40">
        <div className="max-w-4xl">
          <p className="text-secondary text-lg font-semibold mb-4 animate-fade-in">
            The African Chapter
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up">
            World Academic Congress of Emergency Medicine 2026
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-medium animate-fade-in-up animation-delay-200">
            Building Resilient Emergency Care Systems
          </p>

          {/* Event Details Cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-8 animate-fade-in-up animation-delay-400">
            <div className="bg-primary/20 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/80 font-medium">Event Date</p>
                  <p className="text-lg font-bold text-primary-foreground">October 26-29, 2026</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/20 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/80 font-medium">Location</p>
                  <p className="text-lg font-bold text-primary-foreground">African Union HQ, Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 h-14 shadow-elevated animate-fade-in-up animation-delay-600"
          >
            Register Now
          </Button>
        </div>
      </div>
    </section>
  );
};
