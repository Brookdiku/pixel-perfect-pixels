import { useState, useEffect } from "react";
import secretaryImage from "@/assets/secretary-general.png";

export const CountdownWithProfile = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-10-26T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Countdown Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center lg:text-left">
              Event Countdown
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {timeUnits.map((unit, index) => (
                <div
                  key={unit.label}
                  className="bg-primary rounded-lg p-6 md:p-8 text-center shadow-card animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                    {String(unit.value).padStart(2, "0")}
                  </div>
                  <div className="text-secondary text-sm font-semibold uppercase tracking-wide">
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secretary General Profile */}
          <div className="flex flex-col items-center text-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-elevated mb-6">
              <img
                src={secretaryImage}
                alt="Dr. Woldesenbet Waganew"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Dr. Woldesenbet Waganew
            </h3>
            <p className="text-muted-foreground text-lg">Secretary General of WACEM2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};
