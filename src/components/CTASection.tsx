"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Calendar, ArrowRight, CheckCircle, Clock } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const CTASection = () => {
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [isScheduleMode, setIsScheduleMode] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  // Segmented Time Inputs
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [period, setPeriod] = useState<"AM" | "PM">("AM");

  const [phoneSubmitted, setPhoneSubmitted] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  // Focus management refs
  const hourRef = useRef<HTMLInputElement>(null);
  const minuteRef = useRef<HTMLInputElement>(null);

  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val === "") {
      setHour("");
      return;
    }
    if (val.length > 2) val = val.slice(0, 2);

    if (parseInt(val, 10) > 12) val = "12";

    setHour(val);

    // Auto-advance
    // if (val.length === 2 && minuteRef.current) {
    //   minuteRef.current.focus();
    // }
  };

  const handleHourBlur = () => {
    if (hour === "") return;
    let val = hour;
    const num = parseInt(val, 12);
    if (num >= 0 && num <= 9) {
      val = val.padStart(2, "0");
    }
    setHour(val);
  };

  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val === "") {
      setMinute("");
      return;
    }
    if (val.length > 2) val = val.slice(0, 2);

    if (parseInt(val, 10) > 59) val = "59";

    setMinute(val);
  };

  const handleMinuteBlur = () => {
    if (minute === "") return;
    let val = minute;
    const num = parseInt(val, 10);
    if (num >= 0 && num <= 9) {
      val = val.padStart(2, "0");
    }
    setMinute(val);
  };

  const getFormattedTime = () => {
    if (!hour || !minute) return "";
    return `${hour}:${minute} ${period}`;
  };

  const handleCallNow = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName && phone && companyName && companySize && agreed) {
      setPhoneSubmitted(true);
    }
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName && phone && companyName && companySize && agreed && selectedDate && hour && minute) {
      setDemoSubmitted(true);
    }
  };

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

        {/* Single Column Layout */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 lg:p-10 border border-border-card shadow-lg transition-all duration-300">

            {/* Success State - Call Now */}
            {phoneSubmitted ? (
              <div className="text-center py-8 animate-fade-in">
                <div className="w-16 h-16 rounded-full accent-tint-bg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 accent-text" />
                </div>
                <h4 className="text-lg font-semibold text-headline mb-2">Call Incoming{firstName ? `, ${firstName}` : ""}!</h4>
                <p className="text-body">
                  Our AI will call you at <span className="font-medium">{phone}</span> within 60 seconds.
                </p>
              </div>
            ) : demoSubmitted ? (
              /* Success State - Demo Scheduled */
              <div className="text-center py-8 animate-fade-in">
                <div className="w-16 h-16 rounded-full accent-tint-bg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 accent-text" />
                </div>
                <h4 className="text-lg font-semibold text-headline mb-2">Demo Scheduled!</h4>
                <p className="text-body">
                  We'll see you on{" "}
                  <span className="font-medium">
                    {selectedDate && new Date(selectedDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>{" "}
                  at <span className="font-medium">{getFormattedTime()}</span>.
                </p>
              </div>
            ) : (
              /* Main Form */
              <form onSubmit={isScheduleMode ? handleScheduleSubmit : handleCallNow} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-headline">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Steven"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="h-12 border-input focus:border-accent focus:ring-accent/20 transition-all font-medium"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-headline">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="h-12 border-input focus:border-accent focus:ring-accent/20 transition-all font-medium"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div className="space-y-2">
                    <label htmlFor="companyName" className="text-sm font-medium text-headline">
                      Company Name
                    </label>
                    <Input
                      id="companyName"
                      placeholder="Acme Inc."
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="h-12 border-input focus:border-accent focus:ring-accent/20 transition-all font-medium"
                      required
                    />
                  </div>

                  {/* Company Size */}
                  <div className="space-y-2">
                    <label htmlFor="companySize" className="text-sm font-medium text-headline">
                      Company Size
                    </label>
                    <Select value={companySize} onValueChange={setCompanySize} required>
                      <SelectTrigger className="h-12 border-input focus:ring-accent/20 focus:border-accent font-medium">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-5">0-5 employees</SelectItem>
                        <SelectItem value="5-9">5-9 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="20-50">20-50 employees</SelectItem>
                        <SelectItem value="51-99">51-99 employees</SelectItem>
                        <SelectItem value="100+">100+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start space-x-3 p-1">
                  <Checkbox
                    id="terms"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                    required
                    className="mt-0.5 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-muted-text leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer select-none"
                  >
                    I have agreed to receive calls & sms from AI-RD1.com
                  </label>
                </div>

                {/* Action Buttons Toggle */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <Button
                    type={isScheduleMode ? "button" : "submit"}
                    variant={!isScheduleMode ? "cta" : "outline"}
                    className={cn(
                      "h-14 text-base font-semibold w-full transition-all duration-300 relative overflow-hidden",
                      !isScheduleMode
                        ? "shadow-lg shadow-accent/25 scale-[1.02] border-accent"
                        : "border-border hover:bg-muted/50 text-muted-text hover:text-headline"
                    )}
                    onClick={() => setIsScheduleMode(false)}
                  >
                    {!isScheduleMode && <Phone className="mr-2 h-5 w-5 animate-pulse" />}
                    Call Now
                  </Button>

                  <Button
                    type="button"
                    variant={isScheduleMode ? "cta" : "outline"}
                    className={cn(
                      "h-14 text-base font-semibold w-full transition-all duration-300",
                      isScheduleMode
                        ? "shadow-lg shadow-accent/25 scale-[1.02] border-accent"
                        : "border-border hover:bg-muted/50 text-muted-text hover:text-headline"
                    )}
                    onClick={() => setIsScheduleMode(true)}
                  >
                    {isScheduleMode && <Calendar className="mr-2 h-5 w-5" />}
                    Schedule Call
                  </Button>
                </div>

                {/* Schedule Fields - Animated Reveal */}
                <div className={cn(
                  "grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden transition-all duration-500 ease-in-out",
                  isScheduleMode ? "max-h-[300px] opacity-100 pt-6 border-t border-border mt-6" : "max-h-0 opacity-0 pt-0 mt-0"
                )}>
                  {/* Date Picker */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-headline flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      Select Date
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full h-12 justify-start text-left font-normal border-input hover:border-accent hover:bg-accent/5 transition-all text-muted-foreground",
                            selectedDate && "text-headline border-accent bg-accent/5"
                          )}
                        >
                          <Calendar className={cn("mr-2 h-4 w-4", selectedDate ? "text-accent" : "opacity-50")} />
                          {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          initialFocus
                          disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Segmented Unique Time Input */}
                  <div className="space-y-2 mr-1">
                    <label className="text-sm font-medium text-headline flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent" />
                      Select Time
                    </label>
                    <div className="flex items-center h-12 w-full rounded-md border border-input bg-background ring-offset-background focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:border-accent transition-all overflow-hidden group hover:border-accent/50 cursor-text ">
                      {/* Hour */}
                      <input
                        ref={hourRef}
                        type="text"
                        inputMode="numeric"
                        placeholder="HH"
                        value={hour}
                        onChange={handleHourChange}
                        onBlur={handleHourBlur}
                        onFocus={(e) => e.target.select()}
                        className="w-full text-center bg-transparent border-none focus:outline-none text-headline font-semibold p-0 text-lg placeholder:text-muted-foreground/50 h-full"
                      />
                      <span className="text-muted-foreground font-bold pb-1">:</span>
                      {/* Minute */}
                      <input
                        ref={minuteRef}
                        type="text"
                        inputMode="numeric"
                        placeholder="MM"
                        value={minute}
                        onChange={handleMinuteChange}
                        onBlur={handleMinuteBlur}
                        onFocus={(e) => e.target.select()}
                        className="w-full text-center bg-transparent border-none focus:outline-none text-headline font-semibold p-0 text-lg placeholder:text-muted-foreground/50 h-full"
                      />
                      {/* Period Toggle */}
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setPeriod(prev => prev === "AM" ? "PM" : "AM"); }}
                        className="h-full px-4 text-xl font-bold text-accent border-l border-border transition-colors w-16"
                      >
                        {period}
                      </button>
                    </div>
                  </div>

                  {/* Submit Button for Schedule */}
                  <div className="md:col-span-2 pt-2">
                    <Button type="submit" variant="cta" size="lg" className="w-full h-14 text-lg group">
                      Confirm Schedule
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
