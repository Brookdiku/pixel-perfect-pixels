import partnersBackground from "@/assets/partners-background.webp";

export const Partners = () => {
  const partners = [
    { name: "World Health Organization", logo: "WHO" },
    { name: "African Union", logo: "AU" },
    { name: "Ministry of Health Ethiopia", logo: "MOH" },
    { name: "Emergency Medicine Association", logo: "EMA" },
    { name: "Global Health Alliance", logo: "GHA" },
    { name: "Medical Research Institute", logo: "MRI" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={partnersBackground}
          alt="Partners background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Collaborating with leading organizations to advance emergency medicine globally
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="bg-card border border-border rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-elevated transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-3">
                <span className="text-primary-foreground font-bold text-sm text-center">
                  {partner.logo}
                </span>
              </div>
              <p className="text-xs text-center text-muted-foreground font-medium">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
