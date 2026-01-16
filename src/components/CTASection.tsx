"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Calendar, ArrowRight, CheckCircle, Clock, Loader2, XCircle, ChevronDown, Check } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import axios from "axios";
import { countries } from "@/lib/countries";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const CTASection = () => {
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [isScheduleMode, setIsScheduleMode] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [countryIso, setCountryIso] = useState("US");
  const [openCombobox, setOpenCombobox] = useState(false);

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

  const getCountryDialCode = (iso: string) => {
    return countries.find((c) => c.code === iso)?.dial_code || "+1";
  };

  const handleCallNow = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    if (firstName && phone && companyName && companySize && agreed) {
      setIsLoading(true);
      const dialCode = getCountryDialCode(countryIso);
      const fullPhone = `${dialCode}${phone}`;
      try {
        const response = await axios.post(`${BASE_URL}/interview/client/call/`, {
          name: firstName,
          phone: fullPhone,
          company_name: companyName,
          company_size: companySize,
          call_type: "NOW",
        });
        if (response.status === 200 || response.status === 201) {
          setPhoneSubmitted(true);
        }
      } catch (error: any) {
        console.error("Error making call", error);
        if (error.response?.data?.detail) {
          setErrorMessage(error.response.data.detail);
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleScheduleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    if (firstName && phone && companyName && companySize && agreed && selectedDate && hour && minute) {
      setIsLoading(true);
      const dialCode = getCountryDialCode(countryIso);
      const fullPhone = `${dialCode}${phone}`;
      const scheduledDate = new Date(selectedDate);
      let hours = parseInt(hour, 10);
      if (period === "PM" && hours < 12) hours += 12;
      if (period === "AM" && hours === 12) hours = 0;
      scheduledDate.setHours(hours, parseInt(minute, 10), 0, 0);

      try {
        const response = await axios.post(`${BASE_URL}/interview/client/call/`, {
          name: firstName,
          phone: fullPhone,
          company_name: companyName,
          company_size: companySize,
          scheduled_at: scheduledDate.toISOString(),
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          call_type: "SCHEDULE",
        });
        if (response.status === 200 || response.status === 201) {
          setDemoSubmitted(true);
        }
      } catch (error: any) {
        console.error("Error scheduling demo", error);
        if (error.response?.data?.detail) {
          setErrorMessage(error.response.data.detail);
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleBack = () => {
    setPhoneSubmitted(false);
    setDemoSubmitted(false);
    setErrorMessage(null);
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
                <p className="text-body mb-6">
                  Our AI will call you at <span className="font-medium">{getCountryDialCode(countryIso)}{phone}</span> within 60 seconds.
                </p>
                <Button onClick={handleBack} variant="outline" className="min-w-[100px]">
                  Back
                </Button>
              </div>
            ) : demoSubmitted ? (
              /* Success State - Demo Scheduled */
              <div className="text-center py-8 animate-fade-in">
                <div className="w-16 h-16 rounded-full accent-tint-bg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 accent-text" />
                </div>
                <h4 className="text-lg font-semibold text-headline mb-2">Demo Scheduled!</h4>
                <p className="text-body mb-6">
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
                <Button onClick={handleBack} variant="outline" className="min-w-[100px]">
                  Back
                </Button>
              </div>
            ) : errorMessage ? (
              /* Error State */
              <div className="text-center py-8 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mx-auto mb-4">
                  <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h4 className="text-lg font-semibold text-headline mb-2">Error</h4>
                <p className="text-body mb-6">
                  {errorMessage}
                </p>
                <Button onClick={handleBack} variant="outline" className="min-w-[100px]">
                  Back
                </Button>
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
                    <div className="flex gap-2">
                      <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openCombobox}
                            className="w-[140px] h-12 justify-between border-input focus:ring-accent/20 focus:border-accent font-medium px-3"
                          >
                            <span className="flex items-center gap-2">
                              <span className="text-lg mb-1">{getCountryDialCode(countryIso) === "+1" && countryIso !== "US" && countryIso !== "CA" ? countries.find(c => c.code === countryIso)?.flag : countries.find(c => c.code === countryIso)?.flag}</span>
                              <span>{getCountryDialCode(countryIso)}</span>
                            </span>
                            <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[144px] p-0">
                          <Command>
                            <CommandInput placeholder="Search country..." />
                            <CommandList>
                              <CommandEmpty>No country found.</CommandEmpty>
                              <CommandGroup>
                                {countries.map((country) => (
                                  <CommandItem
                                    key={country.code}
                                    value={`${country.name} ${country.dial_code} ${country.flag} ${country.code}`}
                                    onSelect={(currentValue) => {
                                      setCountryIso(country.code);
                                      setOpenCombobox(false);
                                    }}
                                    className="group"
                                  >
                                    <div className="flex items-center justify-center gap-2 w-full">
                                      <span className="text-lg w-4 text-center mb-1">{country.flag}</span>
                                      <span className="text-muted-foreground whitespace-nowrap text-center group-data-[selected=true]:text-white transition-colors">{country.dial_code}</span>
                                    </div>
                                    <Check
                                      className={cn(
                                        "ml-auto h-4 w-4 hidden",
                                        countryIso === country.code ? "opacity-100" : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="h-12 border-input focus:border-accent focus:ring-accent/20 transition-all font-medium flex-1"
                        required
                      />
                    </div>
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
                    disabled={isLoading}
                  >
                    {!isScheduleMode && isLoading ? (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : !isScheduleMode ? (
                      <Phone className="mr-2 h-5 w-5 animate-pulse" />
                    ) : null}
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
                    disabled={isLoading}
                  >
                    {isScheduleMode && isLoading ? (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : isScheduleMode ? (
                      <Calendar className="mr-2 h-5 w-5" />
                    ) : null}
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
                    <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
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
                          onSelect={(date) => {
                            setSelectedDate(date);
                            setIsCalendarOpen(false);
                          }}
                          initialFocus
                          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
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
                    <Button type="submit" variant="cta" size="lg" className="w-full h-14 text-lg group" disabled={isLoading}>
                      {isLoading ? (
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      ) : (
                        <>
                          Confirm Schedule
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
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
