import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Target, Globe, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To advance emergency medicine globally by fostering knowledge exchange, research collaboration, and capacity building, with a special focus on strengthening healthcare systems in Africa.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "WACEM brings together emergency care professionals from over 50 countries to share best practices, innovations, and create lasting partnerships that transform emergency care worldwide.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of multidisciplinary collaboration, bringing together physicians, nurses, paramedics, researchers, policymakers, and healthcare leaders.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Our commitment to excellence drives us to provide world-class educational opportunities, cutting-edge research presentations, and practical skills training.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-medical">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                About WACEM 2026
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                The World Academic Congress of Emergency Medicine (WACEM) is the premier global platform 
                for emergency care professionals, researchers, and policymakers dedicated to advancing 
                emergency medicine worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">The African Chapter</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  WACEM 2026 marks a historic milestone as we bring the congress to Africa for the first time. 
                  Hosted at the African Union Headquarters in Addis Ababa, Ethiopia, this landmark event represents 
                  our commitment to building resilient emergency care systems across the African continent.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ethiopia, as the diplomatic capital of Africa, provides the perfect setting for this transformative 
                  gathering. The congress will address unique challenges faced by African healthcare systems while 
                  showcasing innovative solutions and best practices from around the world.
                </p>
              </div>

              {/* Values Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="bg-card border border-border rounded-lg p-8 shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>

              {/* What to Expect */}
              <div className="bg-muted rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">What to Expect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Four Days of Innovation:</strong> October 26-29, 2026, will feature 
                    intensive sessions covering prehospital care, emergency medicine, critical care, research, policy, and 
                    system strengthening.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-foreground">World-Class Faculty:</strong> Learn from internationally recognized 
                    experts and thought leaders who are shaping the future of emergency medicine.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Hands-On Learning:</strong> Participate in skills labs, simulation 
                    training, and practical workshops designed to enhance your clinical capabilities.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Networking Opportunities:</strong> Connect with peers, mentors, and 
                    collaborators from over 50 countries during cultural evenings and gala dinners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
