import { Users, Lightbulb, Handshake, Presentation, Network } from "lucide-react";
import doctorImage from "@/assets/doctor-profile.jpg";

export const Features = () => {
  const features = [
    {
      icon: Users,
      title: "High-Level Summit",
      description: "A dedicated two-day summit for African health leaders and policymakers.",
    },
    {
      icon: Handshake,
      title: "Hands-On Workshops",
      description: "Skills labs on ultrasound, procedural cadavers, difficult airways, and more.",
    },
    {
      icon: Lightbulb,
      title: 'The "Addis Ababa Innovation Challenge"',
      description: "A showcase for low-cost, high-impact medical innovations from across the globe.",
    },
    {
      icon: Presentation,
      title: "Young Researchers' Forum",
      description: "A platform for emerging global scientists to present their work.",
    },
    {
      icon: Network,
      title: "Networking Events",
      description: "Cultural evenings and Gala dinners to foster collaboration.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Secretary General Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16 max-w-4xl mx-auto">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-elevated flex-shrink-0">
            <img
              src={doctorImage}
              alt="Dr. Woldesenbet Waganew"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-foreground mb-2">Dr. Woldesenbet Waganew</h3>
            <p className="text-muted-foreground text-lg">Secretary General of WACEM2026</p>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Key Features & Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive coverage of all critical aspects of emergency medicine
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card border border-border rounded-lg p-8 shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
