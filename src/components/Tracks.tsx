export const Tracks = () => {
  const tracks = [
    {
      number: "1",
      title: "Prehospital & Disaster Medicine",
      items: [
        "Strengthening National EMS Systems",
        "Community First Responder Programs",
        "Disaster Preparedness & Mass Casualty Management",
      ],
    },
    {
      number: "2",
      title: "Emergency, Critical & Operative Care",
      items: [
        "Trauma & Acute Care in Resource-Limited Settings",
        "Pediatric & Obstetric Emergencies",
        "Critical Care Protocols and ICU Management",
      ],
    },
    {
      number: "3",
      title: "Education, Research & Innovation",
      items: [
        "Excellency in acute care education & Simulation Training",
        "Context-Relevant Quality and Research Methodologies",
        "Low-Cost Medical Technology & Digital Health",
      ],
    },
    {
      number: "4",
      title: "Policy, Leadership & System Strengthening",
      items: [
        "Health System Integration & Governance",
        "Advocacy for Emergency Care Funding",
        "Building Interprofessional Teams",
      ],
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Thematic Tracks</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive coverage of all critical aspects of emergency medicine
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-primary hidden md:block" />

          {/* Tracks */}
          <div className="space-y-12">
            {tracks.map((track, index) => (
              <div
                key={track.number}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-elevated transition-all duration-300">
                    <span className="inline-block text-secondary font-bold text-4xl mb-2">
                      Track {track.number}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{track.title}</h3>
                    <ul className="space-y-2">
                      {track.items.map((item) => (
                        <li
                          key={item}
                          className={`text-muted-foreground flex items-start gap-2 ${
                            index % 2 === 0 ? "md:justify-end" : ""
                          }`}
                        >
                          <span className="text-primary mt-1.5 text-xl leading-none">•</span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-primary border-4 border-muted rounded-full items-center justify-center shadow-lg z-10">
                  <div className="w-3 h-3 bg-secondary rounded-full" />
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
