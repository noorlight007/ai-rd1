import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Calendar, ArrowRight, CheckCircle } from "lucide-react";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

const CTASection = () => {
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneSubmitted, setPhoneSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName.trim() && phone.trim()) {
      setPhoneSubmitted(true);
    }
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime) {
      setDemoSubmitted(true);
    }
  };

  // Generate next 7 days for date picker
  const getNextDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push({
        value: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
      });
    }
    return days;
  };

  const availableDays = getNextDays();

  return (
    <section id="cta" className="py-16 lg:py-24 bg-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-headline mb-4">
            Experience AI-RD1 Today
          </h2>
          <p className="text-lg text-body">
            Try our AI voice technology yourself or schedule a personalized demo.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left: Try AI Call */}
          <div className="bg-card rounded-2xl p-8 border border-border-card shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-headline">Try AI Call</h3>
                <p className="text-sm text-muted-text">Get a call in under 60 seconds</p>
              </div>
            </div>

            {!phoneSubmitted ? (
              <form onSubmit={handlePhoneSubmit} className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-headline mb-2">
                    Your First Name
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Steven"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="h-12 text-base"
                    autoComplete="given-name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-headline mb-2">
                    Your Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-12 text-base"
                    autoComplete="tel"
                  />
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full group">
                  <Phone size={18} />
                  Call Me Now
                  <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-xs text-muted-text text-center">
                  By submitting, you agree to receive a call from AI-RD1 for demo purposes.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full accent-tint-bg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 accent-text" />
                </div>
                <h4 className="text-lg font-semibold text-headline mb-2">Call Incoming{firstName ? `, ${firstName}` : ""}!</h4>
                <p className="text-body">
                  Our AI will call you at <span className="font-medium">{phone}</span> within 60 seconds.
                </p>
              </div>
            )}
          </div>

          {/* Right: Book Demo */}
          <div className="bg-card rounded-2xl p-8 border border-border-card shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-headline">Book a Demo</h3>
                <p className="text-sm text-muted-text">30-min personalized walkthrough</p>
              </div>
            </div>

            {!demoSubmitted ? (
              <form onSubmit={handleDemoSubmit} className="space-y-4">
                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-headline mb-2">
                    Select a Date
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {availableDays.slice(0, 4).map((day) => (
                      <button
                        key={day.value}
                        type="button"
                        onClick={() => setSelectedDate(day.value)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                          selectedDate === day.value
                            ? "border-accent bg-accent-tint accent-text glow-focus"
                            : "border-border bg-background text-body hover:border-accent/50"
                        }`}
                      >
                        {day.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-medium text-headline mb-2">
                    Select a Time
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 rounded-lg border text-xs font-medium transition-all ${
                          selectedTime === time
                            ? "border-accent bg-accent-tint accent-text glow-focus"
                            : "border-border bg-background text-body hover:border-accent/50"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full"
                  disabled={!selectedDate || !selectedTime}
                >
                  <Calendar size={18} />
                  Schedule Demo
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full accent-tint-bg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 accent-text" />
                </div>
                <h4 className="text-lg font-semibold text-headline mb-2">Demo Scheduled!</h4>
                <p className="text-body">
                  We'll see you on{" "}
                  <span className="font-medium">
                    {new Date(selectedDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>{" "}
                  at <span className="font-medium">{selectedTime}</span>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
