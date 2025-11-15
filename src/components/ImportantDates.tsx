import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ImportantDates = () => {
  const dates = [
    {
      date: "Jan 1, 2026",
      label: "Opening Date",
    },
    {
      date: "April 30, 2026",
      label: "Deadline for Submission",
    },
    {
      date: "June 15, 2026",
      label: "Notification of Acceptance",
    },
    {
      date: "Oct 26-29 2026",
      label: "Congress Dates",
    },
  ];

  const reasons = [
    "Learn from world-renowned experts and thought leaders in emergency medicine",
    "Access cutting-edge research and innovative practices from across the globe",
    "Build lasting partnerships with colleagues from 50+ countries",
    "Contribute to shaping emergency care policies for Africa and beyond",
    "Experience Ethiopia's rich culture and the diplomatic capital of Africa",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Important Dates Section */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 mb-16 shadow-elevated">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Important Dates</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dates.map((item, index) => (
              <div
                key={item.date}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">{item.date}</div>
                <div className="text-primary-foreground/90 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Attend Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Why Attend WACEM 2026?
          </h2>

          <ul className="space-y-4 mb-10">
            {reasons.map((reason, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-muted-foreground text-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-primary mt-1.5 text-2xl leading-none">•</span>
                <span className="flex-1">{reason}</span>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-12 h-14 shadow-elevated"
            >
              Register Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
