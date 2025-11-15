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

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Secretary General Profile */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-md shadow-elevated overflow-hidden">
              <img
                src={secretaryImage}
                alt="Dr. Woldesenbet Waganew - Secretary General of WACEM2026"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Message from the Secretary General
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                Dr. Woldesenbet Waganew
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Welcome to WACEM 2026! As Secretary General, I am honored to invite you to join us in Addis Ababa for this landmark congress. Together, we will advance emergency medicine across Africa and beyond, sharing knowledge, innovations, and building partnerships that will transform healthcare delivery for millions.
              </p>
            </div>

            {/* Compact Countdown */}
            <div className="bg-muted p-6 rounded-lg">
              <p className="text-sm text-muted-foreground mb-3 font-medium">Event starts in:</p>
              <div className="flex gap-4 items-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {String(timeLeft.days).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase">Days</div>
                </div>
                <div className="text-2xl text-muted-foreground">:</div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase">Hours</div>
                </div>
                <div className="text-2xl text-muted-foreground">:</div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase">Minutes</div>
                </div>
                <div className="text-2xl text-muted-foreground">:</div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
